import React, { Component } from 'react';
import backArror from '../assets/images/icon_back.svg';
import { Link, Redirect } from 'react-router-dom';
import { AppContext } from 'Context/AppContext';
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';


class BagPage extends Component {
  static contextType = AppContext;
    constructor(){
        super();

        this.state = {
          bag: {
            "products":[]
          },
          delivery: null,
          totalOrder: null,
          grandTotal: null
        }
        this.address = this.address.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.subProduct = this.subProduct.bind(this);
    }

    componentDidMount() {
      this.setState({ bag: this.context.bag });
      this.totalCalculation();
    }

    totalCalculation(){
      var totalOrder=0;
      var grandTotal=0;
      var delivery = this.context.minFreeDelivery;
      var length = this.context.bag.products.length;
      for (var i = 0; i < length; i++) {
        totalOrder = this.context.bag.products[i].count* this.context.bag.products[i].sellingPrice;
      }
      if(totalOrder >= delivery){
        delivery = "Free";
        grandTotal = totalOrder;
      }
      else{
        delivery = this.context.deliveryCharge;
        grandTotal = delivery + totalOrder;
      }
      this.setState({delivery: delivery});
      this.setState({totalOrder: totalOrder});
      this.setState({grandTotal: grandTotal});
      this.context.updateGrandTotal(grandTotal);
      this.context.updateTotal(totalOrder);
    }

    address(){
      if(this.context.mobile != null){
        this.setState({redirectCheckOut: true})
      }
      else{
        this.setState({redirectLogin: true})
      }
    }

    addProduct(productId){
      this.context.updateBagCount(this.context.bagCount + 1);
      var products = this.context.bag.products;
        var found = false;
        var length = this.context.bag.products.length;
        for(var i=0; i< length; i++){
            if (this.context.bag.products[i].productId === productId) {
                products[i].count = products[i].count+ 1;
                found = true;
            }
        }
        if(!found){
            var newProduct = this.state.product;
            newProduct.count = 1;
            products.push(newProduct);
        }
        var updatedBag = {products:[],address:{}}
        updatedBag.products = products;
        this.context.updateBag(updatedBag); 
        this.totalCalculation();
    }

    subProduct(productId){
      this.context.updateBagCount(this.context.bagCount - 1);
      var products = this.context.bag.products;
        var length = this.context.bag.products.length;
        for(var i=0; i< length; i++){
            if (this.context.bag.products[i].productId === productId) {
                products[i].count = products[i].count - 1;
            }
        }
        var updatedBag = {products:[],address:{}}
        updatedBag.products = products;
        this.context.updateBag(updatedBag); 
        this.totalCalculation();
    }
    render(){

      const { redirectLogin } = this.state
      const { redirectCheckOut } = this.state
        if (redirectCheckOut)
            return (<Redirect to={{
                pathname: `${this.context.storeCode}/checkout`
            }} />)
        if(redirectLogin)
            return(
              <Redirect to={{
                pathname: `${this.context.storeCode}/otp`
            }} />)
      return(
        <div className="container">
          <Header/>
          <h1 className="heading"><Link to={`${this.context.storeCode}`}><img src={backArror} style={{marginRight:"15px"}} alt="bag"/></Link> Bag {this.context.bagCount}{" items"} </h1>

          <div className="row pr-0 mr-0 my-0">
            
            <div className="col-12 col-sm-8 px-0">
            {this.state.bag.products.map((product, index) => (
                <div className="container pr-0" key={index}>
                  <div className="row">
                    <div className="col-3 col-sm-2">
                      <div className="thumbnail-container thumbnail-padding">
                        <img src={product.productImage} alt="product" className="thumbnail rounded-xl" />
                      </div>
                    </div>
                    <div className="col-9 col-sm-10 px-0 pr-3 pt-1">
                      <h6 className="mb-0">{product.productName}</h6>
                      <div className="mb-0"></div>
                      {/*<small>1 piece</small>*/}
                      <div className="mt-1 mb-0">
                        <div>
                          ₹ {product.sellingPrice}
                          <p className="btn-group float-right mb-0">
                            <span className="btn btn-outline-primary" onClick={this.subProduct.bind(this,product.productId)}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2"><line x2="10" y1="1" y2="1" fill="none" stroke="#146EB4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" transform="translate(1)"></line></svg></span>
                            <span className="btn btn-outline-secondary">{product.count}</span>
                            <span className="btn btn-outline-primary" onClick={this.addProduct.bind(this,product.productId)}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><g fill="#146EB4"><path d="M6 0c.385 0 .702.29.745.663L6.75.75v10.5c0 .414-.336.75-.75.75-.385 0-.702-.29-.745-.663l-.005-.087V.75C5.25.336 5.586 0 6 0z"></path><path d="M11.25 5.25c.414 0 .75.336.75.75 0 .385-.29.702-.663.745l-.087.005H.75C.336 6.75 0 6.414 0 6c0-.385.29-.702.663-.745L.75 5.25h10.5z"></path></g></svg></span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mx-0 mt-3" />
                </div>
            ))}
            </div>


            <div className="col-12 col-sm-4 pr-0 pt-2">
              <section>
                <div className="d-md-block d-lg-block">
                  <div className="p-3 bg-light">
                    <p className="mb-0">Item Total: <span className="float-right">₹{this.state.totalOrder}</span></p>
                    <div className="mb-3">Delivery:<span className="float-right text-success">{this.state.delivery}</span></div>
                    <p><b>Grand Total: <span className="float-right">₹{this.state.grandTotal}</span></b></p>
                  </div>
                </div>
                <div className="text-center mt-5 pb-5 mb-5">
                  <div className="m-0">
                    <div className="btn btn-primary btn-lg btn-block text-white" onClick={this.address}>Select Address</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <Footer/>
        </div>
      )
    }
  }
  
  export default BagPage