import React, { Component } from 'react';
import backArror from '../assets/images/icon_back.svg';
import { Redirect } from 'react-router-dom';
import { AppContext } from 'Context/AppContext';
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';
import Checkout from 'dukhanshala/components/checkout/Checkout';
import Axios from 'axios';
import https from 'https';
import Validator from 'dukhanshala/util/Validator';
import ObjectCreation from 'dukhanshala/util/ObjectCreation';
import * as BagpageServices from '../../services/BagpageServices'


class BagPage extends Component {
  static contextType = AppContext;
  constructor() {
    super();

    this.state = {
      bag: {
        "products": []
      },
      deliveryCharge: null,
      totalOrder: null,
      grandTotal: null,
      storeCode: null,
      contact: null,
      totalItem: null,
      redirectLogin: false,
      total: null
    }
    this.address = this.address.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.subProduct = this.subProduct.bind(this);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validator = new Validator();
    this.objectCreation = new ObjectCreation();
  }

  componentDidMount() {
    this.setState({ contact: window.localStorage.getItem('userMobile') });
    this.setState({ storeCode: this.context.storeCode });
    this.setState({ bag: this.context.bag });
    this.setState({ totalItem: this.context.bagCount });
    this.totalCalculation();
  }

  totalCalculation() {
    var totalOrder = 0;
    var grandTotal = 0;
    var deliveryValue = 0;
    var delivery = this.context.minFreeDelivery;
    var length = this.context.bag.products.length;
    for (var i = 0; i < length; i++) {
      if (this.context.bag.products[i]) {
        totalOrder += this.context.bag.products[i].count * this.context.bag.products[i].sellingPrice;
      }
    }
    if (totalOrder >= delivery) {
      delivery = "Free";
      grandTotal = totalOrder;
    }
    else {
      delivery = this.context.deliveryCharge;
      grandTotal = delivery + totalOrder;
      deliveryValue = delivery;
    }
    this.setState({ deliveryCharge: deliveryValue });
    this.setState({ delivery: delivery });
    this.setState({ totalOrder: totalOrder });
    this.setState({ total: totalOrder });
    this.setState({ grandTotal: grandTotal });
    this.context.updateGrandTotal(grandTotal);
    this.context.updateTotal(totalOrder);
  }

  address() {

    // this.props.history.push(`${this.context.storeCode+ "/product/detail/" + prodId}`);

    this.props.history.goBack();
  }

  addProduct(productId) {
    this.context.updateBagCount(this.context.bagCount + 1);
    var products = this.context.bag.products;
    var found = false;
    var length = this.context.bag.products.length;
    for (var i = 0; i < length; i++) {
      if (this.context.bag.products[i]) {
        if (this.context.bag.products[i].productId === productId) {
          products[i].count = products[i].count + 1;
          found = true;
        }
      }
    }
    if (!found) {
      var newProduct = this.state.product;
      newProduct.count = 1;
      products.push(newProduct);
    }
    var updatedBag = { products: [], address: {} }
    updatedBag.products = products;
    this.context.updateBag(updatedBag);
    this.totalCalculation();
  }

  subProduct(productId) {
    var selectedCount = 0;
    var products = this.context.bag.products;
    var length = this.context.bag.products.length;
    for (var i = 0; i < length; i++) {
      if (this.context.bag.products[i]) {
        if (this.context.bag.products[i].productId === productId) {
          selectedCount = products[i].count;
          if (products[i].count !== 0) {
            products[i].count = products[i].count - 1;
          }
          if (products[i].count === 0) {
            products.splice(i, 1);
            if (length == 1) {
              products = [];
            }
          }
        }
      }
    }
    var updatedBag = { products: [], address: {} }
    updatedBag.products = products;
    if (selectedCount !== 0) {
      this.context.updateBagCount(this.context.bagCount - 1);
      this.context.updateBag(updatedBag);
      this.totalCalculation();
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }


  submit = async()=> {
    const userVerified = window.localStorage.getItem('userMobile')


    if (this.validator.validateAddress(this.state)) {
      this.context.updateName(this.state.name)
      this.context.updateAddress(this.state.address)

      this.context.updateCity(this.state.city)
      this.context.updatePincode(this.state.pincode)
      this.context.updateCod(this.state.cod)

      if (userVerified != null) {


        let request = this.objectCreation.orderObject(this.state);
        // console.log('request bag',request)
       
        try {
          let response = await BagpageServices.orderProduct(request)
          this.setState({ redirect: true });
          this.context.updateBagCount(0);
          this.context.updateBag(this.state.updateBag);
        }
        catch (err) {

        }


      }
      else {
        this.setState({ redirectLogin: true })
      }
    }
  }
  render() {

    const { redirect } = this.state
    if (redirect)
      return (<Redirect to={{
        pathname: `${this.context.storeCode}/confirmation`
      }} />)
    else if (this.state.redirectLogin)
      return (<Redirect to={{
        pathname: `${this.context.storeCode}/otp`
      }} />)

    return (
      <div className="container">
        <Header />
        <h1 className="heading"><img onClick={() => this.address()} src={backArror} style={{ marginRight: "15px" }} alt="bag" /> Bag {this.context.bagCount}{" items"} </h1>

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
                          <span className="btn btn-outline-info" onClick={this.subProduct.bind(this, product.productId)}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2"><line x2="10" y1="1" y2="1" fill="none" stroke="#146EB4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" transform="translate(1)"></line></svg></span>
                          <span className="btn btn-outline-secondary">{product.count}</span>
                          <span className="btn btn-outline-info" onClick={this.addProduct.bind(this, product.productId)}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><g fill="#146EB4"><path d="M6 0c.385 0 .702.29.745.663L6.75.75v10.5c0 .414-.336.75-.75.75-.385 0-.702-.29-.745-.663l-.005-.087V.75C5.25.336 5.586 0 6 0z"></path><path d="M11.25 5.25c.414 0 .75.336.75.75 0 .385-.29.702-.663.745l-.087.005H.75C.336 6.75 0 6.414 0 6c0-.385.29-.702.663-.745L.75 5.25h10.5z"></path></g></svg></span>
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
              <div className="row col-sm-12">
                <div className="col-sm-12" style={{ textAlign: "center", marginTop: '20px', marginBottom: '10px', fontWeight: 'bold' }}>
                  Delivery Address
                  </div>
              </div>
              <div>
                <div>
                  {/* <p className="mt-3 mb-0"><b><Link to={`${this.context.storeCode}/bag`}><img src={backArror} style={{ marginRight: "15px" }} alt="" /></Link> Checkout</b></p>
                <p className="text-secondary">Payment of ₹{this.context.grandTotal}</p> */}

                  <div id="ourVision" className="row">
                    <div className="col-12 col-lg-8 mt-3">
                      <div className="form-group">
                        <label htmlFor="customer_name" className="float">Name</label>
                        <input type="text" id="name" name="name" placeholder=" " required="" className="form-control" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="col-12 col-lg-8">
                      <div className="form-group">
                        <label htmlFor="customer_name" className="float">Address</label>
                        <input type="text" id="address" name="address" placeholder=" " required="" className="form-control" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="col-lg-4"></div>
                    <div className="col-6 col-lg-4">
                      <div className="form-group">
                        <label htmlFor="customer_name" className="float">City</label>
                        <input type="text" id="city" name="city" placeholder=" " required="" className="form-control" onChange={this.handleChange} />
                      </div>
                    </div>
                    <div className="col-6 col-lg-4">
                      <div className="form-group">
                        <label htmlFor="customer_name" className="float">Pincode</label>
                        <input type="number" id="pincode" name="pincode" placeholder=" " required="" className="form-control" onChange={this.handleChange} />
                      </div>
                    </div>
                  </div>
                  <p className="small-text mt-1  mb-0">PAYMENT METHOD</p>
                  <div className="custom-control custom-radio custom-control-inline mt-3 mb-3" style={{ paddingBottom: '110px' }}>
                    <input type="radio" id="cod" name="cod" className="custom-control-input" onChange={this.handleChange} checked={true} />
                    <label className="custom-control-label" htmlFor="cod" style={{ paddingLeft: '20px' }}>Cash/UPI on Delivery</label></div>
                  <div className="mb-5 fixed-bottom " style={{ marginTop: '20px', paddingBottom: '15px', marginLeft: '10px', marginRight: '10px' }}>
                    <button href="#ourVision" className="btn  btn-lg btn-block text-white" style={{ backgroundColor: 'rgb(59, 179, 166)' }} onClick={this.submit}>Place Order</button>
                  </div>

                </div>
              </div>
              {/* <div className="text-center mt-5 pb-5 mb-5">
                  <div className="m-0">
                    <div className="btn btn-primary btn-lg btn-block text-white" onClick={this.address}>Checkout</div>
                  </div>
                </div> */}
            </section>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default BagPage