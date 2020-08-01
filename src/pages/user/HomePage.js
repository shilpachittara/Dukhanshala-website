import React, { Component } from 'react';
// import Navbar from '../../components/comman/Navbar'
import '../../assets/css/bootstrap.min.css'
import Logo from '../../assets/image/dukaanshala.png'
import '../../assets/css/navbar.css'
import Photo1 from '../../assets/image/photos/man-113723_1920.jpg'
import Photo2 from '../../assets/image/photos/india-4071840_1920.jpg'
import Photo5 from '../../assets/image/photos/person-holding-.jpg'
import Photo6 from '../../assets/image/photos/report.jpg'
import Photo7 from '../../assets/image/photos/business-3079910_1920.jpg'
import Photo8 from '../../assets/image/photos/img-mobile.png'
import Banner from "../../assets/image/banner-homepage.png"
import Footer from "../../components/comman/Footer"





class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }



  componentDidMount = () => {

  }

  render() {
    return (
      <div className="home-bg-gradient">

<div className="box-shadow">
        <nav className="navbar navbar-expand-lg bg-white" >
          <a className="navbar-brand" href="/"><img alt="logo" src={Logo} style={{ height: 100 }}></img></a>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item p-v-10">
            <a  href="#ourVision" className="nav-link cu-ptr">Our Vision</a>
            </li>
            <li className="nav-item p-v-10">
           
              <a href="#caseStudy" className="nav-link cu-ptr">Case Study</a>
            </li>
          
            <li className="nav-item p-v-20 ">
              <a href="/"><button type="button" style={{color:'red'}} className="btn btn-outline-danger btn-zoom">Get The App</button></a>
            </li>
            <li className="nav-item p-v-10" style={{marginRight:'25px'}}>
              <a  href="#footer" className="nav-link cu-ptr">Contact Us</a>
            </li>
          </ul>
        </nav>

      </div>

        <div className="container-fluid" style={{ marginTop: "-15px", zIndex: 0 }}>
          {/* 1st */}
          <div className="row">
            <div className="col-sm-12 img-fullwidth"  >
              <img src={Banner} style={{ width: '100%', height: '500px' }} alt="banner"></img>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 className="title" style={{ fontSize: "45px" }}>Features</h1>
          </div>
          <div className="row" style={{ paddingTop: '80px', paddingBottom: "80px" }}>
            <div className="col-sm-5" style={{ marginTop: "20px", marginLeft: "50px" }}>
              <ul>
              <h3 className="title" style={{ fontSize: "22px",fontWeight:'bold' }}>Multi Language Support</h3>
              <li>
              <h4 className="sub-title" style={{ fontSize: "18px" }}>English, Hindi</h4>
              </li>
              </ul>
              <ul>
              <h3 className="title" style={{ fontSize: "22px",fontWeight:'bold' }}>Manage Multiple Stores</h3>
              <li>
              <h4 className="sub-title" style={{ fontSize: "18px" }}>Allow multiple store manager to access store</h4>
              </li>
              </ul>
              <ul>
              <h3 className="title" style={{ fontSize: "22px",fontWeight:'bold' }}>Multi Language Support</h3>
              <li>
              <h4 className="sub-title" style={{ fontSize: "18px" }}>Manage multiple stores</h4>
              </li>
              <li>
              <h4 className="sub-title" style={{ fontSize: "18px" }}>Maintain inventory of your stock across stores</h4>
              </li>
              </ul>
              {/* <div className="sub-title">Take your businness to the next level by managing from your phone!</div> */}
            </div>
            <div className="col-sm-1">
              <div></div>
            </div>
            <div className="col-sm-5">
              <img className="img-fluid" alt="detail" src={Photo1} style={{ width: '650px', height: '370px', borderRadius: '6px' }}></img>
            </div>
          </div>

          {/* 2nd */}
          <div className="row" style={{ paddingTop: '80px', paddingBottom: "80px" }}>

            <div className="col-sm-5" style={{ marginLeft: "50px" }}>
              <img className="img-fluid" alt="detail" src={Photo2} style={{ width: '550px', height: '370px', borderRadius: '6px' }}></img>
            </div>
            <div className="col-sm-1">
              <div></div>
            </div>
            <div className="col-sm-5" style={{ marginTop: "-10px", }}>
              <ul>
              
              <h3 className="title" style={{ fontSize: "22px",fontWeight:'bold' }}>Manage Suppliers</h3>
              
              <li>
              <h4 className="sub-title" style={{ fontSize: "18px" }}>Track supplier’s credit</h4>
              </li>
              </ul>
              <ul>
                

              <h3 className="title" style={{ fontSize: "22px",fontWeight:'bold' }}>Maintain Sourcing</h3>
              <li>              <h4 className="sub-title" style={{ fontSize: "18px" }}>Purchase record of your sourcing </h4>
             
              </li>
             </ul>
             <ul>
              
              <h3 className="title" style={{ fontSize: "22px",fontWeight:'bold' }}>Business Analytics</h3>
              <li>
              <h4 className="sub-title" style={{ fontSize: "18px" }}>On-demand Inventory report</h4>
              </li>
              <li>
              <h4 className="sub-title" style={{ fontSize: "18px" }}>Category wise classification of stock</h4>
              </li>
              <li>
              <h4 className="sub-title" style={{ fontSize: "18px" }}>Record keeping and view of all past transactions </h4>
              
              </li>
              </ul>
            </div>
          </div>
          <hr />
          <div style={{ textAlign: 'center', marginTop: "50px" }} id="ourVision"> 
            <h3 className="title" style={{ fontSize: "45px" }}>Our Vision</h3>
          </div>
          <div className="sub-title" style={{ textAlign: 'center',marginLeft:"15%",marginRight:'15%',lineHeight:'27px',fontSize:'18px',marginTop:'15px' }}>
            We aim to improve store operations of 85% unorganized stores by providing digital solutions with no dependencies on hardwares. We are working on solutions which make them as operationally efficient as supermarkets and help them make better profits. Dukaanshala is a one-stop store management solution primarily for Mom & Pop and Speciality Stores across India such as Kiranas, Hardware, Stationary, Pharmacy, Sporting goods, Electronics, Furniture, and Apparel & Garments Shops.
            


          </div>
          <div className="sub-title" style={{ textAlign: 'center',marginLeft:"15%",marginRight:'15%',lineHeight:'27px',fontSize:'18px',marginTop:'25px' }}>
            
            This ‘Made in India’ app is designed to help retailers optimize their store operations to be able to take their shops digital. Digital penetration has deepened in Bharat and a new generation of consumers are getting comfortable ordering goods online. Announcement of taking local stores digital by major e-tailers like Amazon, Flipkart, and Jiomart has validated the need to make inventory accessible to sell on all the marketplaces. Our current version has features which supports book-keeping of Inventory category wise, manage supplier credits, share current inventory details with customers.


          </div>


          <hr style={{marginTop:'60px'}} />
          <div style={{ textAlign: 'center', marginTop: "50px" }}>
            <h3 className="title" style={{ fontSize: "45px" }} id="caseStudy">Case Study </h3>
          </div>
          <div >
            <div className="row" style={{ marginTop: '60px', marginLeft: '50px', paddingBottom: '60px' }}>
              <div className="col-sm-3 zoom">
                <img src={Photo5} alt="detail" style={{ width: '200px', height: '150px' }}></img>
                <div className="sub-title" style={{ width: '200px', textAlign: 'center' }}>Digital Reports and Statements</div>

              </div>
              <div className="col-sm-3 zoom">
                <img src={Photo6} alt="detail" style={{ width: '200px', height: '150px' }}></img>
                <div className="sub-title" style={{ width: '200px', textAlign: 'center' }}> Get your reports on any device, anytime!</div>
              </div>
              <div className="col-sm-3 zoom">
                <img src={Photo7} alt="detail" style={{ width: '200px', height: '150px' }}></img>
                <div className="sub-title" style={{ width: '200px', textAlign: 'center' }}>
                  100% Safe and Secure</div>
              </div>
              <div className="col-sm-3 zoom">
                <img src={Photo8} alt="detail" style={{ width: '200px', height: '150px' }}></img>
                <div className="sub-title" style={{ width: '200px', textAlign: 'center' }}>Backup of data ensures 100% safety</div>

              </div>
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