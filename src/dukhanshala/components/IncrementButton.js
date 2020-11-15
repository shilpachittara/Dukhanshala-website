import React from 'react';
import { AppContext } from 'Context/AppContext';
import * as ProductdetailServices from '../../services/ProductdetailServices'

class IncrementButton extends React.Component {
  static contextType = AppContext;
  constructor() {
    super();
    this.state = {
      count: 0,
      bag: null,
      bagCount: null,
      product: {
        "availableQuantity": null,
        "categoryName": null,
        "mrp": null,
        "productId": null,
        "productImage": null,
        "productName": null,
        "sellingPrice": null
      }
    }
    this.addProduct = this.addProduct.bind(this);
    this.subProduct = this.subProduct.bind(this);

  }
  componentDidMount() {
    this.getProductDetail();

  }

  getProductDetail = async () => {
    if (this.context.storeCode !== null && this.context.productId !== null) {
      localStorage.setItem('storeCode', this.context.storeCode)
    }
    let requestUrl = {}
    requestUrl.storeCode = this.context.storeCode === null ? localStorage.getItem('storeCode') : this.context.storeCode
    requestUrl.prodId = this.props.productId

    let response = await ProductdetailServices.getProductDetail(requestUrl)
    try {
      if (response && response.status === 200 && response.data) {
        // this.props.setCategories(response.data.categories);
        //this.context.updateProduct(response.data);
        this.setState({ product: response.data });
      }
      else {
        //failure scenario
      }
    }
    catch (err) {

    }
    if(localStorage.getItem("bagCountBagPage")!== null && this.context.bag === null){
      var bagCount=parseInt(localStorage.getItem("bagCountBagPage"))
      this.context.updateBagCount(bagCount)
    }
    
    if (localStorage.getItem("bagProductsBagPage") !== null) {

      var bag = JSON.parse(localStorage.getItem("bagProductsBagPage"));
      this.context.updateBag(bag)

    }
    this.setState({ bag: this.context.bag });
    if (this.context.bag.products[0]) {
      var length = this.context.bag.products.length;
      for (var i = 0; i < length; i++) {
        if (this.context.bag.products[i]) {
          if (this.context.bag.products[i].productId === this.props.productId) {
            this.setState({ count: this.context.bag.products[i].count })

          }
        }
      }
    }
    if (this.state.count <= 0) {
      this.setState({count: 1});
      this.context.updateBagCount(this.context.bagCount + 1);
      localStorage.setItem("bagCountBagPage", this.context.bagCount + 1);
      this.addToBag();
    }

  };



  addProduct = () => {
    var count = this.state.count + 1;
    var prod = this.state.product;
    prod.quantity = count;
    this.setState({ product: prod });
    this.setState({ count: count });
    this.context.updateBagCount(this.context.bagCount + 1);
    localStorage.setItem("bagCountBagPage", this.context.bagCount + 1);
    this.addToBag();
  }

  addToBag = () => {
    var products = this.context.bag.products;
    var found = false;
    var length = this.context.bag.products.length;
    for (var i = 0; i < length; i++) {
      if (this.context.bag.products[i]) {
        if (this.context.bag.products[i].productId === this.props.productId) {
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
    localStorage.setItem("bagProductsBagPage", JSON.stringify(updatedBag))
    //this.setCookie();
    
  }

  subProduct = () => {
    if (this.state.count !== 0) {
      var count = this.state.count - 1;
      var prod = this.state.product;
      prod.quantity = count;
      this.setState({ product: prod });
      this.setState({ count: count });
      this.context.updateBagCount(this.context.bagCount - 1);
      localStorage.setItem("bagCountBagPage", this.context.bagCount - 1);
      this.subFromBag();
    }
  }

  subFromBag = () => {
    var products = this.context.bag.products;
    var length = this.context.bag.products.length;
    for (var i = 0; i < length; i++) {
      if (this.context.bag.products[i]) {
        if (this.context.bag.products[i].productId === this.props.productId) {
          products[i].count = products[i].count - 1;
        }
        if (products[i].count === 0) {
          products.splice(i, 1);
          if (length === 1) {
            products = [];
          }
        }
      }
    }
    var updatedBag = { products: [], address: {} }
    updatedBag.products = products;
    this.context.updateBag(updatedBag);
    localStorage.setItem("bagProductsBagPage", JSON.stringify(updatedBag))
  }

  setCookie = () => {
    localStorage.setItem("bagCountBagPage", this.context.bagCount)
    localStorage.setItem("bagProductsBagPage", JSON.stringify(this.context.bag))
  }

  render() {
    return (
      <div className="" >
        {/*<Grid container spacing={0} >
          <Grid item xs={12} style={{ marginRight: '5px' }}>
            <ButtonGroup color="primary" aria-label="outlined primary button group" >
              <Button style={{ width: "20px", height: '20px' }} onClick={this.subProduct}>-</Button>

            </ButtonGroup>
            <ButtonGroup color="primary" aria-label="contained primary button group" style={{ backgroundColor: '#3BB3A6' }}>
              <Button style={{ width: "20px", height: '20px', }} >{this.state.count}</Button>

            </ButtonGroup>
            <ButtonGroup color="primary" aria-label="outlined primary button group" >
              <Button style={{ width: "20px", height: '20px' }} onClick={this.addProduct}>+</Button>

            </ButtonGroup>
          </Grid>
    </Grid>*/}
    <p className="btn-group float-right mb-0">
        <span className="btn btn-outline-info" onClick={this.subProduct.bind(this)}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2"><line x2="10" y1="1" y2="1" fill="none" stroke="#146EB4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" transform="translate(1)"></line></svg></span>
        <span className="btn btn-outline-secondary">{this.state.count}</span>
        <span className="btn btn-outline-info" onClick={this.addProduct.bind(this)}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><g fill="#146EB4"><path d="M6 0c.385 0 .702.29.745.663L6.75.75v10.5c0 .414-.336.75-.75.75-.385 0-.702-.29-.745-.663l-.005-.087V.75C5.25.336 5.586 0 6 0z"></path><path d="M11.25 5.25c.414 0 .75.336.75.75 0 .385-.29.702-.663.745l-.087.005H.75C.336 6.75 0 6.414 0 6c0-.385.29-.702.663-.745L.75 5.25h10.5z"></path></g></svg></span>
    </p>


      </div>
    );
  }
}
export default IncrementButton;