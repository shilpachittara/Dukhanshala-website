import React, { Component } from 'react';

import { Link } from 'react-router-dom';
// import ProductList from "../components/products/ProductList";
import { AppContext } from "../../Context/AppContext";
// import CategoriesHome from '../components/categories/CategoriesHome';
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';
import CompanyInfo from '../components/companyInfo/CompanyInfo'
import https from 'https';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class HomePage extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products:[],
      landing:true,
      redirect:""
    }
  }



  getCategoriesList = (path) => {
    let url = 'https://api.dukaanshala.com/web/category/detail' + path;
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });
    axios.get(url, { httpsAgent: agent })
      .then(response => {
        if (response && response.data && response.data.categories) {
      
          this.context.updateCategories(response.data.categories);
          this.setState({ categories: response.data.categories });
    
          this.getProductList(response.data.categories[0].categoryId)
          
        }
        else {
          //failure scenario
          alert("Something went wronge. Please try again !")
        }
      }

      )

  };

  componentDidMount() {
    var path;

    if (this.context.storeCode != null) {
      path = this.context.storeCode;
      this.getCategoriesList(path);
    }
    else {
      let url = window.location.pathname;

      let index = url.search("/")
      let lastIndexOf = url.indexOf("/", url.indexOf("/") + 1);

      if (index !== -1) {
        let urlLength;
        if (lastIndexOf == -1) {
          let token = url;
          this.context.updateAppContext(token)
          this.getCategoriesList(token);

        }
        else {
          urlLength = lastIndexOf;
          let token = url.slice(index, urlLength);
          this.context.updateAppContext(token)
          this.getCategoriesList(token);
          


        }

      }
      else {
        alert("try again")
      }

    }
  }



  getProductList=(id)=>{
    if(this.state.categories[0].categoryId!==id){
      this.setState({
        landing:false
      })
    }
    else{ 
      this.setState({
        landing:true
      })
    }
    this.setState({products: []});
      let url = `https://api.dukaanshala.com/web/category/products${this.context.storeCode}/${id}`;
        const agent = new https.Agent({
            rejectUnauthorized: false,
        });
        axios.get(url, { httpsAgent: agent })
          .then(response => {
              if(response && response.data && response.data.products){
                  this.setState({products: response.data.products});
                 
              }
              else{
                  //failure scenario
              }
              }
          )
    };
    productDetail = (catId,catName,prodId) => {
      this.context.updateCategoryName(catName);
      this.context.updateCategoryId(catId);
      this.context.updateProductId(prodId);
      this.setState({redirect:`${this.context.storeCode+ "/product/detail/" + prodId}` })
  }



  render() {
    if (this.state.redirect !="")
    return (<Redirect to={{
        pathname: this.state.redirect
    }} />)
    return (
      <div>

        <Header />
        <section className="container" >
          <div >
          <h2 className="heading">Categories
           <Link to={`${this.context.storeCode}/categories`} className="viewAll">View All</Link></h2>
           </div>
          <div className="scrolling-wrapper row">
            <div className="scrollmenu col-sm-12 col-md-12" >
           
              {this.state.categories && this.state.categories.map((categoryData, index) => (
                <a key={index} className={this.state.landing?"a-a ":""} onClick={()=>this.getProductList(categoryData.categoryId,categoryData.categoryName)} href="#home">{categoryData.categoryName}</a>
              ))}

          
            </div>
            {/* <CategoriesHome /> */}
          </div>
        </section>
        {/* <ProductList categories={this.context.categories} /> */}

       <div className="prod-box">
        <div className="container productItems">
                
        {this.state.products ===[] ?<div>...loading</div>:this.state.products.map((productData,index)=>(
          <div key={index} className="col-12 col-sm-3 px-0 pr-md-4 my-md-2 mb-2 box-shadow" style={{backgroundColor:'white'}}>
         <div className="row h-50"  style={{marginTop:'10px'}}
          onClick={()=>this.productDetail(productData.categoryName,productData.categoryId,productData.productId)}
         >
                 <div className="col-4 col-sm-12" >
                     <div style={{marginLeft:"10px"}} className="thumbnail-container thumbnail-padding">
                         <img src={productData.productImage} alt={productData.productName} style={{height:"90px",width:"90px",marginTop:"10px"}} className="thumbnail rounded-xl img-fluid" />
                         <span className="discount-badge">{productData.offer}% off</span>
                     </div>
                 </div>

                 <div className="col-8 col-sm-12 px-0 px-md-3 pr-3 align-bottom my-auto" >
                     <h6 className="mt-1 mt-sm-3 mb-0">{" "+productData.productName}</h6>
                 
                     <div className="mt-1">
                        <span>₹</span> <span style={{fontWeight:"bold"}}>{" "+productData.sellingPrice}</span>
                         <small className="small-text mr-2 pl-1" ><span style={productData.sellingPrice !==null? {textDecoration: 'line-through'}:{display:'none'} }>{" "+productData.mrp !==null ?productData.mrp:""}</span></small>
                         <span className="btn btn-warning float-right py-1" style={{marginRight:'10px',backgroundColor:'#F8462B',color:'white'}}>ADD</span>
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
    </section>   */}
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