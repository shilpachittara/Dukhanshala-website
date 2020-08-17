import React, { Component } from 'react';
// import Navbar from '../../components/comman/Navbar'
import '../../assets/css/bootstrap.min.css'
import Logo from '../../assets/image/logo1.jpg'
import '../../assets/css/navbar.css'
import Photo1 from '../../assets/image/photos/man-113723_1920.jpg'
import Photo2 from '../../assets/image/photos/india-4071840_1920.jpg'
import Photo5 from '../../assets/image/photos/person-holding-.jpg'
import Photo6 from '../../assets/image/photos/report.jpg'
import Photo7 from '../../assets/image/photos/business-3079910_1920.jpg'
import Photo8 from '../../assets/image/photos/img-mobile.png'
import Banner from "../../assets/image/banner-homepage.png"
import Footer from "../../components/comman/Footer"
import Icon1 from "../../assets/icons/icon1.svg"
import Icon2 from "../../assets/icons/icon2.svg"
import Icon3 from "../../assets/icons/icon3.svg"
import Icon4 from "../../assets/icons/icon4.svg"
import Icon5 from "../../assets/icons/icon5.svg"
import Icon6 from "../../assets/icons/icon6.svg"
import Mst1 from "../../assets/image/MST1.jpg"
import Mst2 from "../../assets/image/MST2.jpg"
import Mst3 from "../../assets/image/MST3.jpg"
import CaseStudy1 from "../../assets/image/caseStudy1.jpeg"
import CaseStudy2 from "../../assets/image/caseStudy2.png"
import CaseStudy3 from "../../assets/image/caseStudy3.png"
import VisionImage from "../../assets/image/vision_image.png"
import WebGif from "../../assets/image/web_gif.gif"





class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "Default Content",
        renderData:[{"icon":Icon3,"header":"Manage Stock Inventory","subHdr":"This free Stock manager app lets you organize products inside your store with an easy Transaction interface. You can inward and outward your stock from the store."}],
        featureData: [
        {"buttonName":"Manage Stock Inventory","icon":Icon3,"header":"Manage Stock Inventory","id":"3","subHeader":"This free Stock manager app lets you organize products inside your store with an easy Transaction interface. You can inward and outward your stock from the store."},
        {"buttonName":"Manage Suppliers","icon":Icon4,"header":"Manage Suppliers","id":"4","subHeader":"Create suppliers easily from your phone contacts and maintain their credit ledger (Udhar khata). This Purchase management app records inventory transactions against suppliers and maintains a record of purchases."},
        {"buttonName":"Manage Multiple Stores","icon":Icon2,"header":"Manage Multiple Stores","id":"2","subHeader":"Store owners can navigate between multiple shops/stores and manage them. They can assign managers and share store access with them as well."},
        {"buttonName":"Multi Language Support","icon":Icon1,"header":"Multi Language Support","id":"1","subHeader":"English and Hindi language selection option."},
        {"buttonName":"Share Live Inventory with Customers","icon":Icon5,"header":"Share Live Inventory with Customers","id":"5","subHeader":"Share live store inventory with your customers on whatsapp and take orders online. Keep your customer happy and increase business volume."},
        {"buttonName":"Business Analytics","icon":Icon6,"header":"Business Analytics","id":"6","subHeader":"You can generate following reports for your Dukan, Kirana shop, Provision store, Hardware, Stationary, Pharmacy, Sporting goods, Electronics, Furniture, and Apparel & Garments Shops: On-demand Live Inventory report, On-demand Total Inventory worth, Category wise classification of stock, Record keeping and view of all past transactions"}
      ],
      selectedIndex:"",
      multipleStoreTypeData: [
          {"image":Mst1, "text":"Kirana Stores"},
          {"image":Mst2, "text":"Restaurants"},
          {"image":Mst3, "text":"Hardware Stores"},
      ],
      caseStudyData: [
        {"image":CaseStudy1, "para":"Making store operations efficient. Changing consumption patterns resulting in business inefficiencies — Utilising power of data with dukaanshala.com"},
        // {"image":CaseStudy2, "para":"If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough"},
        // {"image":CaseStudy3, "para":"If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough"}
      ]
    }
  }
 
  renderThis=(x,y,z,w)=>{
    let render=[{"icon":x,"header":y,"subHdr":z}]
    this.setState({
      renderData:render,
      selectedIndex: w
    })
  }

  render() {
    return (
      <div className="">

<div className="box-shadow" style={{width: "", margin: "0 auto"}}>
        <nav className="navbar navbar-expand-lg bg-white" >
          <a className="navbar-brand" href="/"><img alt="logo" src={Logo} style={{width:"180px", height:"30px",
           marginTop:"40px", marginLeft:"115px"}}></img></a>

          <ul className="navbar-nav ml-auto">
          <li className="nav-item p-v-8" style={{fontFamily:"Poppins-Light"}}>
            <a  href="#" className="nav-link cu-ptr">Home</a>
            </li>
            <li className="nav-item p-v-8" style={{fontFamily:"Poppins-Light"}}>
            <a  href="#ourFeatures" className="nav-link cu-ptr">Features</a>
            </li>
            <li className="nav-item p-v-8" style={{fontFamily:"Poppins-Light"}}>
            <a  href="#ourVision" className="nav-link cu-ptr">Our Vision</a>
            </li>
            <li className="nav-item p-v-14 " style={{fontFamily:"Poppins-Light"}}>
              <a href="https://play.google.com/store/apps/details?id=com.dukaanshala.retailapp"><button type="button" style={{color:'red'}} className="btn btn-outline-danger btn-zoom">Get The App</button></a>
            </li>
            <li className="nav-item p-v-8" style={{marginRight:'100px',fontFamily:"Poppins-Light"}}>
              <a  href="#footer" className="nav-link cu-ptr">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>

        <div className="container-fluid" style={{ paddingTop:"40px", zIndex: 0, 
          backgroundColor:"white", overflowX:"hidden",  width: "1100px", margin: "0 auto",  }}>
          {/* 1st section */}
          <div className="row" style={{width:"1100px"}}>
              <div className="col-md-6" style={{fontFamily:"Poppins-Light", paddingLeft:"50px"}}>
                <h5 style={{color:"#FF4500"}}>DUKAANSHALA FOR EVERY BUSINESS</h5>
                <br></br>
              
             <h1><strong>Digital India ka Digital <span style={{color:"#FF4500"}}>Store Bahi Khata</span> App</strong></h1>
                <p style={{marginTop:"30px"}}>Manage Purchases and Supplier’s Credit. Manage Stock Inventory and share it with your customer. Available in English and हिन्दी</p>
              <a href="https://play.google.com/store/apps/details?id=com.dukaanshala.retailapp">
              <button style={{backgroundColor:"#FF4500", color:"white", marginTop:"10px",
                padding:"10px 10px 10px 10px", borderRadius:"5px", border:"none"}}>Get Dukaanshala</button>
              </a>
              </div>
              <div className="col-md-6">
                <img src={WebGif} style={{width:"820px", height:"500px", marginLeft:"-170px", marginTop:"-50px"}}></img>
              </div>
          </div>

          {/* 2nd section */}
          <div style={{ textAlign: 'center', marginTop: '30px' }} id="ourFeatures">
            <h2 className="title" style={{ fontSize: "45px", fontFamily:'Poppins-Light' }}><strong>Features</strong></h2>
          </div>
          <div className="row" style={{marginTop:"20px", fontFamily:"Poppins-Light"}}>
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-6">
               {this.state.featureData.map((data, index) => {
                return (
                  <div className="button_div" key={index} style = { this.state.selectedIndex === data.id ? 
                  {backgroundColor:'#FF4500', color:"white", border:"1px solid grey", borderRadius:"7px",
                  marginTop:'20px', width:"80%", textAlign:"center", marginLeft:"50px",
                     height:'50px', paddingTop:'10px',fontFamily:"Poppins-Medium"}:{backgroundColor:'white', color:"black", border:"1px solid grey", borderRadius:"7px",
                  marginTop:'20px', width:"80%", textAlign:"center", marginLeft:"50px",
                     height:'50px', paddingTop:'10px', fontFamily:"Poppins-Medium"}}>
                    <img src={data.icon} alt="multilanguagesupport" style={{width:'30px', height:'30px'}}></img>
                      <button className="active" onClick={()=>this.renderThis(data.icon,data.header,data.subHeader,data.id)}
                      style={ this.state.selectedIndex === data.id ? { color: "white", textAlign:'center', border:"none", borderColor:'#FF4500',marginLeft:'10px', background:"none"}: 
                      { color: "black", textAlign:'center',marginLeft:'10px', border:"none", background:"none"}}>
                      {data.buttonName}
                      </button>
                  </div>
                    )
                  })
                 }
              </div>
            <div className="col-md-6" style={{marginTop:'20px'}}>
              {this.state.renderData.map((data, index) => {
                  return (
                  <div className="card" style={{height:'400px', 
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', 
                  borderRadius:"10px", marginLeft:"10px", width:"90%"}}>
                  <img className="card-img-top" src={data.icon} alt="multilanguagesupport" 
                  style={{width:'60px', height:'60px', marginTop:'20px', marginLeft:'20px'}}></img>
                      <div className="card-body">
                        <h5 className="card-title" style={{fontSize:"20px", fontFamily:"Poppins-Medium"}}>{data.header}</h5>
                        <p className="card-text" style={{fontSize:"15px", fontFamily:"Poppins-Light"}}>{data.subHdr}</p>
                        <a href="https://play.google.com/store/apps/details?id=com.dukaanshala.retailapp" className="btn" style={{backgroundColor:"#FF4500", color:"white"}}>Learn more...</a>
                      </div>
                  </div>
                  )
                })
              }
            </div>
          </div>
          <br></br>
          <br></br>
          
          {/* 3rd section */}
          <div style={{ textAlign: 'center', marginTop: '30px'}}>
            <h5 style={{color:"#FF4500", fontFamily:"Poppins-Light"}}>
              SERVING VARIOUS BUSINESS TYPES
             </h5>
            <h2 className="title" style={{ fontSize: "40px",  fontFamily:"Poppins-Light" }}><strong>
            An application for wide range of stores/shops</strong></h2>
          </div>
          <div className="row" style={{ marginTop: '50px', textAlign:"center", paddingBottom: '60px'}}>
            {this.state.multipleStoreTypeData.map((data, index) => 
                {
                  return(
                    <div className="col-md-4 zoom">
                      <img src={data.image} alt="detail" style={{ width: '300px', height: '300px' }}></img>
                      <div className="sub-title" style={{float: 'right', width:"150px", fontSize:"14px", fontWeight:"bold", 
                      padding:"5px", borderRadius:"5px", marginTop:"-35px", marginLeft:"18px", zIndex:"1000",
                      position:"absolute",
                      backgroundColor:"#FF4500", color:"white", fontFamily:"Poppins-Light"}}>{data.text}</div>
                    </div>
                  )
                })
            }
          </div>
          {/* 4th section */}
          <div style={{ textAlign: 'center', marginTop: '10px'  }}>
            <h5 style={{color:"#FF4500", fontFamily:"Poppins-Light"}}>BLOGS AND CASE STUDIES</h5>
            <h2 className="title" style={{ fontSize: "40px",fontFamily:"Poppins-Light" }}><strong>
            Our learning and Knowledge center</strong></h2>
          </div>
          <div className="row" style={{ marginTop: '30px', paddingBottom: '60px' }}>
              {this.state.caseStudyData.map((data, index) => 
              {
                return(
                  <div className="col-md-4" style={{fontFamily:"Poppins-Light"}}>
                    <div className="card" style={{marginLeft:"20px", marginRight:"20px",
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius:"0px"}}>
                      <img className="card-img-top" style={{padding:"10px 10px 10px 10px"}} src={data.image} alt="Card image cap"></img>
                      <div className="card-body">
                        <p class="card-text">{data.para}</p>
                        <a href="https://medium.com/@info_28655/small-businesses-tales-making-store-operations-efficient-98df98ac7679" className="btn" style={{backgroundColor:"white", color:"#FF4500"}}>Read Story</a>
                      </div>
                  </div>
                </div>
                )
              })
              }
            </div>

          {/* 5th section */}
          <div style={{ textAlign: 'center', marginTop: "10px", marginBottom:"40px" }} id="ourVision"> 
            <h3 style={{ fontSize: "40px",textAlign: 'center', }}><strong>Our Vision</strong></h3>
          </div>
          <div className="row" style={{backgroundImage: `url(${VisionImage})`, height:"350px"}}>
            <div className="col-md-6" style={{color:"white", paddingTop:"20px"}}>
            We aim to improve store operations of 85% unorganized stores by providing digital solutions with no dependencies on hardwares. Dukaanshala is a one-stop store management solution primarily for Mom & Pop and Speciality Stores across India. This ‘Made in India’ app is designed to help retailers optimize their store operations as efficient as super stores and take their shops digital.

            </div>
            <div className="col-md-6" style={{color:"white", paddingTop:"150px"}}>
              
            Digital penetration has deepened in Bharat and a new generation of consumers are getting comfortable ordering goods online. Announcement of taking local stores digital by major e-tailers like Amazon, Flipkart, and Jiomart has validated the need to make inventory accessible to sell on all the marketplaces. Our current version has features which supports book-keeping of Inventory category wise, manage supplier credits, share current inventory details with customers. 


            </div>
          </div>

          </div>
        <div id="footer"></div>
        <Footer ></Footer>
      </div>
    );
  }
}

export default HomePage;