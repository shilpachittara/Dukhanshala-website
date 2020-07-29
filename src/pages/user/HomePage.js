import React, { Component } from 'react';
import Navbar from '../../components/comman/Navbar'
import '../../assets/css/bootstrap.min.css'
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

        <Navbar></Navbar>

        <div className="container-fluid" style={{ marginTop: "-15px", zIndex: 0 }}>
          {/* 1st */}
          <div className="row">
            <div className="col-sm-12 img-fullwidth"  >
              <img src={Banner} style={{ width: '100%', height: '500px' }}></img>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 className="title" style={{ fontSize: "45px" }}>Features</h1>
          </div>
          <div className="row" style={{ paddingTop: '80px', paddingBottom: "80px" }}>
            <div className="col-sm-5" style={{ marginTop: "20px", marginLeft: "50px" }}>
              <h2 className="title" style={{ fontSize: "24px" }}>Multi Language Support</h2>
              <h2 className="title" style={{ fontSize: "24px" }}>Manage Multiple Stores</h2>
              <h3 className="sub-title" style={{ fontSize: "20px" }}>Allow multiple store manager to access store</h3>
              <h2 className="title" style={{ fontSize: "24px" }}>Multi Language Support</h2>
              <h3 className="sub-title" style={{ fontSize: "20px" }}>Manage multiple stores</h3>
              <h3 className="sub-title" style={{ fontSize: "20px" }}>Maintain inventory of your stock across stores</h3>
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
              <h2 className="title" style={{ fontSize: "24px" }}>Manage Suppliers</h2>
              <h3 className="sub-title" style={{ fontSize: "20px" }}>Track supplier’s credit</h3>

              <h2 className="title" style={{ fontSize: "24px" }}>Maintain Sourcing</h2>
              <h3 className="sub-title" style={{ fontSize: "20px" }}>Purchase record of your sourcing </h3>

              <h2 className="title" style={{ fontSize: "24px" }}>Business Analytics</h2>
              <h3 className="sub-title" style={{ fontSize: "20px" }}>On-demand Inventory report</h3>
              <h3 className="sub-title" style={{ fontSize: "20px" }}>Category wise classification of stock</h3>
              <h3 className="sub-title" style={{ fontSize: "20px" }}>Record keeping and view of all past transactions </h3>

            </div>
          </div>
          <hr />
          <div style={{ textAlign: 'center', marginTop: "50px" }}>
            <h2 className="title" style={{ fontSize: "45px" }}>Our Vision</h2>
          </div>
          <div className="sub-title" style={{ textAlign: 'center',marginLeft:"15%",marginRight:'15%',lineHeight:'27px',fontSize:'16px',marginTop:'15px' }}>
            We aim to improve store operations of 85% unorganized stores by providing digital solutions with no dependencies on hardwares. We are working on solutions which make them as operationally efficient as supermarkets and help them make better profits. Dukaanshala is a one-stop store management solution primarily for Mom & Pop and Speciality Stores across India such as Kiranas, Hardware, Stationary, Pharmacy, Sporting goods, Electronics, Furniture, and Apparel & Garments Shops.
            


          </div>
          <div className="sub-title" style={{ textAlign: 'center',marginLeft:"15%",marginRight:'15%',lineHeight:'27px',fontSize:'16px',marginTop:'25px' }}>
            
            This ‘Made in India’ app is designed to help retailers optimize their store operations to be able to take their shops digital. Digital penetration has deepened in Bharat and a new generation of consumers are getting comfortable ordering goods online. Announcement of taking local stores digital by major e-tailers like Amazon, Flipkart, and Jiomart has validated the need to make inventory accessible to sell on all the marketplaces. Our current version has features which supports book-keeping of Inventory category wise, manage supplier credits, share current inventory details with customers.


          </div>


          <hr style={{marginTop:'60px'}} />
          <div style={{ textAlign: 'center', marginTop: "50px" }}>
            <h2 className="title" style={{ fontSize: "45px" }}>Case Study </h2>
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
        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;