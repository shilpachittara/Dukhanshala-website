import React, { Component } from 'react';
import { AppContext } from "../../Context/AppContext";
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';
import IncrementButton from '../components/IncrementButton'
import CompanyInfo from 'dukhanshala/components/companyInfo/CompanyInfo';
import * as HomepageServices from '../../services/HomepageServices'
import { Card, Grid, Typography } from '@material-ui/core';


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
      if (id === this.state.categories[i].categoryId) {
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
        if (id === tempArr[i].productId) {
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

        if (id === this.context.addedProdId[i]) {

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
        <section className="container-fluid" >

          <div className="scrolling-wrapper row pos-fixed">
            <div className="scrollmenu col-sm-12 col-md-12" >
              {this.state.categories && this.state.categories.map((categoryData, index) => (

                <a key={index} className={categoryData.isActive ? "a-a " : ""} onClick={() => this.getProductList(categoryData.categoryId, categoryData.categoryName, categoryData.isActive)} href="#home">{categoryData.categoryName}</a>
              ))}


            </div>

          </div>
        </section>


        <div className="prod-box">
          <div className="container productItems" style={{ marginTop: '65px', maxWidth: '550px' }}>

            {this.state.products === [] ? <div>...loading</div> : this.state.products.map((productData, index) => (
              <Card style={{ marginTop: '10px', height: '100px' }} key={index}>

                <Grid
                  container
                  spacing={1}
                  style={{ paddingLeft: '10px', }}
                >
                  <Grid
                    item
                    md={3}
                    xs={3}
                    onClick={() => this.productDetail(productData.categoryName, productData.categoryId, productData.productId)}
                  >
                    <img src={productData.productImage} alt={productData.productName} className="img-fluid custome-img" />
                  </Grid>

                  <Grid
                    item
                    md={4}
                    xs={4}
                    onClick={() => this.productDetail(productData.categoryName, productData.categoryId, productData.productId)}
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '8px' }}
                  >
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      className=" prod-name-home"
                      style={{ fontSize: '16px' }}


                    >
                      {" " + productData.productName}

                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <Typography
                        variant="subtitle1"
                        color="textPrimary"
                        style={{ fontSize: '15px' }}


                      >
                        {"₹ " + productData.sellingPrice}

                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="textPrimary"

                        style={productData.sellingPrice !== null ? { textDecoration: 'line-through', fontSize: '13px', margin: '3px', marginLeft: '5px' } : { display: 'none' }}>
                        {" " + productData.mrp !== null ? productData.mrp : ""}

                      </Typography>
                    </div>

                  </Grid>
                  <Grid
                    item
                    md={4}
                    xs={4}
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', padding: '0px', margin: 'auto' }}
                  >

                     <div >
                        <IncrementButton key={index} {...productData} />
                      </div> :

                      <button className="add-button btn" onClick={() => { this.clickAdd(productData.productId, productData.isAdded) }} style={{ backgroundColor: ' #3BB3A6', color: 'white', fontWeight: 'bold', height: '36px', width: '80px', paddingBottom: '10px', }}>
                        Add
                      </button>


                  </Grid>


                </Grid>
              </Card>


            ))}
          </div>
        </div>
        <CompanyInfo />

        <Footer />
      </div>
    )
  }
}

export default HomePage