import React, { Component } from 'react';
import ProductDetail from '../components/product-detail/ProductDetail';
import backArror from '../assets/images/icon_back.svg';
import { Redirect } from 'react-router-dom';
import { AppContext } from 'Context/AppContext';
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';
import * as ProductServices from "../../services/ProductServices"

class ProductDetailPage extends Component {

  static contextType = AppContext;
  constructor() {
    super();

    this.state = {
      categoryName: null
    }
    this.backPage = this.backPage.bind(this)
  }

  getStoreCode = () => {
    var path;


    if (this.context.storeCode != null) {
      path = this.context.storeCode;


    }
    else {
      let url = window.location.pathname;

      let index = url.search("/")
      let lastIndexOf = url.indexOf("/", url.indexOf("/") + 1);

      if (index !== -1) {
        let urlLength;
        if (lastIndexOf === -1) {
          let token = url;
          this.context.updateAppContext(token)

        }
        else {
          urlLength = lastIndexOf;
          let token = url.slice(index, urlLength);
          this.context.updateAppContext(token)



        }

      }
      else {
        alert("try again")
      }

    }

    //this.getCategoryName();
  }

  componentDidMount() {
    this.getStoreCode()
  }

  getCategoryName = async () => {
    let response = await ProductServices.getCategoriesByName(this.context.categoryId)
    try {
      if (response && response.data && response.data) {
        // this.props.setCategories(response.data.categories);
        this.setState({ categoryName: response.data.categoryName });
      }
      else {
        //failure scenario
      }
    }
    catch (e) {
      alert(e)
    }


  };
  backPage() {
    this.setState({ redirect: true })
  }

  render() {
    const { redirect } = this.state

    if (redirect)
      return (<Redirect to={{
        pathname: `${this.context.storeCode}`
      }} />)
    return (

      <div className="container">
        <Header />
        <div className="" >
          <h1 className="heading" ><img src={backArror} style={{ marginRight: "15px" }} alt="product" onClick={this.backPage} />{this.context.categoryName}</h1>

        </div><ProductDetail />
        <Footer />
      </div>

    )
  }
}

export default ProductDetailPage