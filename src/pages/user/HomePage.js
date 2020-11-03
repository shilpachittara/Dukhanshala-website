import React, { Component } from 'react';
// import Navbar from '../../components/comman/Navbar'
import '../../assets/css/bootstrap.min.css'
import Logo from '../../assets/image/logo02.png'
import '../../assets/css/navbar.css'
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
      <div>
        <div className="box-shadow"  >
          <div style={{width:"90%",margin: "0 auto",}}> 
            <nav className="navbar navbar-expand-md navbar-light " style={{ backgroundColor:"white"}}>
              <a className="navbar-brand pt-4 pl-2 web-view-paddind" href="#home" style={{}}><img className="logo-dukaan-shala" alt="logo" src={Logo} style={{width:"250px", height:"40px"}}></img></a>
              <button className="navbar-toggler" type="button"  style={{backgroundColor:"",}}data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{color:"black", }}>
                <i className="fa fa-navicon" style={{color:"black", width:"20%"}}></i>
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#ourFeatures">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"  href="#ourVision">Our Vision</a>
                  </li>
                  <li className="nav-item">
                  <a href="https://play.google.com/store/apps/details?id=com.dukaanshala.retailapp"><button type="button" style={{color:'#3BB3A6'}} className="btn btn-outline-info btn-zoom">Get The App</button></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"   href="#footer">Contact Us</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        
       

        <div className="container-fluid mt-3 pl-5 pr-5 web-view-body" style={{ width:"90%", zIndex: 0, 
          backgroundColor:"white", overflowX:"hidden", margin: "0 auto",}}>
          {/* 1st section */}
          <div className="row">
              <div className="col-md-6 col-12" style={{fontFamily:"Poppins-Light"}}>
                <h5 className="mt-4" style={{color:"#3BB3A6"}}>DUKAANSHALA FOR EVERY BUSINESS</h5>
                <br></br>
             <h1><strong>Digital India ka Digital <span style={{color:"#3BB3A6"}}>Store Bahi Khata</span> App</strong></h1>
                <p className="mt-4">Manage Purchases and Supplier’s Credit. Manage Stock Inventory and share it with your customer. Available in English and हिन्दी</p>
              <a href="https://play.google.com/store/apps/details?id=com.dukaanshala.retailapp">
              <button className="p-2 mt-5" style={{backgroundColor:"#3BB3A6", color:"white", borderRadius:"5px", border:"none"}}>Get Dukaanshala</button>
              </a>
              </div>
              <div className="col-md-6 col-12 pl-5 pt-3">
                <img className ="" alt="gif" src={WebGif} style={{width:"90%"}}></img>
              </div>
          </div>

          {/* 2nd section */}
          <div className="mt-5" style={{ textAlign:'center'}} id="ourFeatures">
            <h2 className="title" style={{fontSize:"45px", fontFamily:"Poppins-Medium"}}>Features</h2>
          </div>
          <div className="row mt-2">
            <div className="col-md-6 col-12" style={{textAlign:"center"}}>
               {this.state.featureData.map((data, index) => {
                return (
                  <div className="button_div mt-3 p-2" key={index} style = { this.state.selectedIndex === data.id ? 
                  {backgroundColor:'#3BB3A6', color:"white", border:"1px solid grey", borderRadius:"7px",
                  textAlign:"center",fontFamily:"Poppins-Medium"}:{backgroundColor:'white', color:"black", border:"1px solid grey", borderRadius:"7px",
                   textAlign:"center", fontFamily:"Poppins-Medium"}} onClick={()=>this.renderThis(data.icon,data.header,data.subHeader,data.id)}>
                    <img src={data.icon} alt="multilanguagesupport" style={{width:'8%', height:'8%'}}></img>
                      <button className="active pl-2" onClick={()=>this.renderThis(data.icon,data.header,data.subHeader,data.id)}
                      style={ this.state.selectedIndex === data.id ? { color: "white", textAlign:'center', border:"none", borderColor:'#3BB3A6',background:"none"}: 
                      { color: "black", textAlign:'center',border:"none", background:"none"}}>
                      {data.buttonName}
                      </button>
                  </div>
                    )
                  })
                 }
              </div>
            <div className="col-md-6 col-12 mt-2" style={{}}>
              {this.state.renderData.map((data, index) => {
                  return (
                  <div className="card" key={index} style={{height:'100%', 
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', 
                  }}>
                  <img className="card-img-top" src={data.icon} alt="multilanguagesupport" 
                  style={{width:'60px', height:'60px', marginTop:'30px', marginLeft:'30px'}}></img>
                      <div className="card-body">
                        <h5 className="card-title" style={{fontSize:"20px", fontFamily:"Poppins-Medium"}}>{data.header}</h5>
                        <p className="card-text" style={{fontSize:"15px", fontFamily:"Poppins-Light"}}>{data.subHdr}</p>
                        <a href="https://play.google.com/store/apps/details?id=com.dukaanshala.retailapp" className="btn" style={{backgroundColor:"#3BB3A6", color:"white"}}>Learn more...</a>
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
            <h5 style={{color:"#3BB3A6", fontFamily:"Poppins-Light"}}>
              SERVING VARIOUS BUSINESS TYPES
             </h5>
            <h2 className="title" style={{ fontSize: "40px",  fontFamily:"Poppins-Light" }}><strong>
            An application for wide range of stores/shops</strong></h2>
          </div>
          <div className="row" style={{ marginTop: '50px', textAlign:"center", paddingBottom: '60px'}}>
            {this.state.multipleStoreTypeData.map((data, index) => 
                {
                  return( 
                    <div className="col-md-4 zoom" key={index}>
                      <img className="mt-3 mob-view-img" src={data.image} alt="detail" style={{ width: '370px', height: '300px' }}></img>
                      <div className="sub-title" style={{float: 'right', width:"40%", fontSize:"14px", fontWeight:"bold", 
                      padding:"5px", borderRadius:"5px", zIndex:"1000",
                      position:"absolute", marginTop:"-40px", marginLeft:"3px",
                      backgroundColor:"#3BB3A6", color:"white", fontFamily:"Poppins-Light"}}>{data.text}</div>
                    </div>
                  )
                })
            }
          </div>
          {/* 4th section */}
          <div style={{ textAlign: 'center'}}>
            <h5 style={{color:"#3BB3A6", fontFamily:"Poppins-Light"}}>BLOGS AND CASE STUDIES</h5>
            <h2 className="title" style={{ fontSize: "40px",fontFamily:"Poppins-Light" }}><strong>
            Our learning and Knowledge center</strong></h2>
          </div>
          <div className="row" style={{paddingBottom: '60px' }}>
              {this.state.caseStudyData.map((data, index) => 
              {
                return(
                  <div className="col-md-4" key={index} style={{fontFamily:"Poppins-Light"}}>
                    <div className="card" style={{marginLeft:"20px", marginRight:"20px",
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius:"0px"}}>
                      <img className="card-img-top" style={{padding:"10px 10px 10px 10px"}} src={data.image} alt="Card cap"></img>
                      <div className="card-body">
                        <p className="card-text">{data.para}</p>
                        <a href="https://medium.com/@info_28655/small-businesses-tales-making-store-operations-efficient-98df98ac7679" className="btn" style={{backgroundColor:"white", color:"#3BB3A6"}}>Read Story</a>
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
          {/* <div className="row vision mb-5" style={{backgroundImage: `url(${VisionImage})`, width:"100%", height:"400px"}}> */}
          <div className="row mb-2" >
            <div className="col-md-6 col-12 mt-4 ml-4" style={{}}>
            We aim to improve store operations of 85% unorganized stores by providing digital solutions with no dependencies on hardwares. Dukaanshala is a one-stop store management solution primarily for Mom & Pop and Speciality Stores across India. This ‘Made in India’ app is designed to help retailers optimize their store operations as efficient as super stores and take their shops digital.

            </div>
            <div className="col-md-6 col-12"></div>
            </div>
            <div className="row">
            <div className="col-md-6 col-12"></div>
              <div className="col-md-6 col-12" style={{marginTop:"10px",marginBottom:'40px'}}>
                
                Digital penetration has deepened in Bharat and a new generation of consumers are getting comfortable ordering goods online. Announcement of taking local stores digital by major e-tailers like Amazon, Flipkart, and Jiomart has validated the need to make inventory accessible to sell on all the marketplaces. Our current version has features which supports book-keeping of Inventory category wise, manage supplier credits, share current inventory details with customers. 
    
    
                </div>
                
            </div>
          {/* </div> */}
          </div>
          
        <div id="footer"></div>
        <Footer ></Footer>
      </div>
    );
  }
}

export default HomePage;