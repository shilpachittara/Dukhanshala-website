import React, { Component } from 'react';
import { AppContext } from "../../Context/AppContext";
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';
import IncrementButton from '../components/IncrementButton'
import CompanyInfo from 'dukhanshala/components/companyInfo/CompanyInfo';
import * as HomepageServices from '../../services/HomepageServices'


class HomePage extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      landing: true,
      showCount: "",
      active: false

    }
    // localStorage.removeItem("userMobile");
  }


  getCategoriesList = async (path) => {
    let response = await HomepageServices.getCategories(path)
    try {
      if (response && response.status === 200 && response.data && response.data.categories && response.data.categories.length >= 1) {
        this.context.updateCategories(response.data.categories);
  

        let tempArr = []
        for (let i = 0; i < response.data.categories.length; i++) {
          let obj = {}
          obj.categoryId = response.data.categories[i].categoryId
          obj.categoryImage = response.data.categories[i].categoryImage
          obj.categoryName = response.data.categories[i].categoryName
          obj.isActive = false;
          tempArr.push(obj)
        }
        this.setState({ categories: tempArr });

        this.getProductList(response.data.categories[0].categoryId)

      }
      else {
        //failure scenario
        alert("Something went wronge. Please try again !")
      }
    }
    catch (err) {
      alert(err)
    }

  };

  getStoreCode = () => {

    let xx = this.props.match.params.store

    var path;

    if (this.context.storeCode != null) {
      path = this.context.storeCode;
      this.getCategoriesList(path);
    }
    else {
      this.getCategoriesList("/" + xx);

    }
  }

  componentDidMount() {
    this.getStoreCode()
  }

  getProductList = async (id, name, flag) => {
    if (this.state.categories[0].categoryId !== id) {
      this.setState({
        landing: false
      })
    }
    else {
      this.setState({
        landing: true
      })
    }

    let temp1 = this.state.categories
    for (let i = 0; i < this.state.categories.length; i++) {
      if (id == this.state.categories[i].categoryId) {
        temp1[i].isActive = true
      }
      else {
        temp1[i].isActive = false
      }
    }

    this.setState({
      categories: temp1
    })

    let requestPath = {}
    requestPath.storeCode = this.context.storeCode
    requestPath.id = id


    let response = await HomepageServices.getProducts(requestPath)
    try {
      if (response && response.status === 200 && response.data && response.data.products) {
        let tempArr = []
        for (let i = 0; i < response.data.products.length; i++) {
          let obj = {}
          obj.isAdded = this.isPreAdded(response.data.products[i].productId)
          obj.availableQuantity = response.data.products[i].availableQuantity
          obj.categoryId = response.data.products[i].categoryId
          obj.categoryName = response.data.products[i].categoryName
          obj.mrp = response.data.products[i].mrp
          obj.productDescription = response.data.products[i].productDescription
          obj.productId = response.data.products[i].productId
          obj.productImage = response.data.products[i].productImage
          obj.productName = response.data.products[i].productName
          obj.sellingPrice = response.data.products[i].sellingPrice
          tempArr.push(obj)
        }
        this.setState({ products: tempArr });
      }
      else {
        //failure scenario
      }
    }
    catch (err) {
      alert(err)
    }

  }

  productDetail = (catName, catId, prodId) => {
    this.context.updateCategoryName(catName);
    this.context.updateCategoryId(catId);
    this.context.updateProductId(prodId);
    this.props.history.push(`${this.context.storeCode + "/product/detail/" + prodId}`);
  }

  clickAdd = (id, flag) => {
    let arr = this.context.addedProdId;//adding and updating  clicked prod id to an array
    arr.push(id)
    this.context.updateAddedProdId(arr);

    let tempArr = this.state.products
    if (flag === false) {

      for (var i in tempArr) {
        if (id == tempArr[i].productId) {
          tempArr[i].isAdded = true;
        }
      }
      this.setState({ products: tempArr })
    }

  }

  isPreAdded = (id) => {
    let flag;
    if (this.context.addedProdId.length > 0) {
      for (let i = 0; i < this.context.addedProdId.length; i++) {

        if (id == this.context.addedProdId[i]) {

          flag = true;
          break;

        }
        else {
          flag = false
        }

      }
      return flag
    }
    else {
      flag = false
      return flag
    }
  }

  render() {

    return (
      <div>

        <Header />
        <section className="container" >
          {/* <div >
          <h2 className="heading">Categories
           <Link to={`${this.context.storeCode}/categories`} className="viewAll">View All</Link></h2>
           </div> */}
          <div className="scrolling-wrapper row pos-fixed">
            <div className="scrollmenu col-sm-12 col-md-12" >
              {this.state.categories && this.state.categories.map((categoryData, index) => (

                <a key={index} className={categoryData.isActive ? "a-a " : ""} onClick={() => this.getProductList(categoryData.categoryId, categoryData.categoryName, categoryData.isActive)} href="#home">{categoryData.categoryName}</a>
              ))}


            </div>
            {/* <CategoriesHome /> */}
          </div>
        </section>
        {/* <ProductList categories={this.context.categories} /> */}

        <div className="prod-box">
          <div className="container productItems" style={{ marginTop: '65px' }}>

            {this.state.products === [] ? <div>...loading</div> : this.state.products.map((productData, index) => (
              <div key={index} className="col-12 col-sm-3 px-0 pr-md-4 my-md-2 mb-2 box-shadow" style={{ backgroundColor: 'white' }}>
                <div className="row h-50" style={{ marginTop: '10px' }}

                >
                  <div className="col-4 col-sm-12"  >
                    <div onClick={() => this.productDetail(productData.categoryName, productData.categoryId, productData.productId)} style={{ marginLeft: "10px" }} className="thumbnail-container thumbnail-padding">
                      <img src={productData.productImage} alt={productData.productName} className="thumbnail rounded-xl img-fluid custome-img" />
                      <span className="discount-badge">{productData.offer}% off</span>
                    </div>
                  </div>

                  <div className="col-8 col-sm-12 px-0 px-md-3 pr-3 align-bottom my-auto" >
                    <h6 onClick={() => this.productDetail(productData.categoryName, productData.categoryId, productData.productId)} className="mt-1 mt-sm-3 mb-0"  >{" " + productData.productName}</h6>

                    <div className="mt-1">
                      <span>₹</span> <span style={{ fontWeight: "bold" }}>{" " + productData.sellingPrice}</span>
                      <small className="small-text mr-2 pl-1" ><span style={productData.sellingPrice !== null ? { textDecoration: 'line-through' } : { display: 'none' }}>{" " + productData.mrp !== null ? productData.mrp : ""}</span></small>
                      {productData.isAdded ?
                        <div className="float-right ">
                          <IncrementButton />
                        </div> : <div className="btn float-right py-1" style={{ marginRight: '10px', backgroundColor: ' #3BB3A6', color: 'white', zIndex: 9999 }}
                          onClick={() => { this.clickAdd(productData.productId, productData.isAdded) }}
                        > ADD</div>
                      }
                    </div>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>


        {/*<section className="container">
          <h2 className="heading">New Arrival <Link to="/newarrival" className="viewAll">View All</Link></h2>          
            <Products/>
        </section>
        <section className="container">
          <h2 className="heading">Grocery <Link to="/grocery" className="viewAll">View All</Link></h2>          
            <Products/>
    </section>  */}
        <section>
          <CompanyInfo />
        </section>

        <div ></div>
        <Footer />
      </div>
    )
  }
}

export default HomePage