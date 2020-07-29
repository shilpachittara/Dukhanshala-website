import React, { Component } from 'react';
import Navbar from '../../components/comman/Navbar'
import '../../assets/css/bootstrap.min.css'
import Photo1 from '../../assets/image/photos/man-113723_1920.jpg'
import Photo2 from '../../assets/image/photos/india-4071840_1920.jpg'
import Photo3 from '../../assets/image/photos/photo3.jpg'
import Photo4 from '../../assets/image/photos/alarm-alarm-clock-analog-analogue-280254.jpg'
import Photo5 from '../../assets/image/photos/person-holding-.jpg'
import Photo6 from '../../assets/image/photos/report.jpg'
import Photo7 from '../../assets/image/photos/business-3079910_1920.jpg'
import Photo8 from '../../assets/image/photos/img-mobile.png'
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
        <div className="container-fluid" style={{ marginTop: "20px" }}>
          {/* 1st */}
          <div className="row" style={{ paddingTop: '80px', paddingBottom: "80px" }}>
            <div className="col-sm-5" style={{ marginTop: "50px", marginLeft: "50px" }}>
              <div className="title">Store Management Solution for Digital India</div>
              <div className="sub-title">Take your businness to the next level by managing from your phone!</div>
            </div>
            <div className="col-sm-1">
              <div></div>
            </div>
            <div className="col-sm-4">
              <img className="img-fluid" alt="detail" src={Photo1} style={{ width: '450px', height: '320px', borderRadius: '6px' }}></img>
            </div>
          </div>

          {/* 2nd */}
          <div className="row" style={{ paddingTop: '80px', paddingBottom: "80px" }}>

            <div className="col-sm-5" style={{ marginLeft: "50px" }}>
              <img className="img-fluid" alt="detail" src={Photo2} style={{ width: '450px', height: '330px', borderRadius: '6px' }}></img>
            </div>
            <div className="col-sm-1">
              <div></div>
            </div>
            <div className="col-sm-5" style={{ marginTop: "50px", }}>
              <div className="title">Small businesses are the backbone of India</div>
              <div className="sub-title">Effortlessly grow your business with Dukanshaala and take it the next level</div>
            </div>
          </div>
          {/* 3 */}
          <div className="row" style={{ paddingTop: '80px', paddingBottom: "80px" }}>
            <div className="col-sm-5" style={{ marginTop: "50px", marginLeft: "50px" }}>
              <div className="title">Multiple Indian - Languages Supported</div>
              <div className="sub-title">Choose a local language of your choice to manage your business</div>
            </div>
            <div className="col-sm-1">
              <div></div>
            </div>
            <div className="col-sm-4">
              <img className="img-fluid" alt="detail" src={Photo3} style={{ width: '450px', height: '300px', borderRadius: '6px' }}></img>
            </div>
          </div>
          {/* 4 */}
          <div className="row" style={{ paddingTop: '80px', paddingBottom: "80px" }}>

            <div className="col-sm-5" style={{ marginLeft: "50px" }}>
              <img className="img-fluid" alt="detail" src={Photo4} style={{ width: '450px', height: '330px', borderRadius: '6px' }}></img>
            </div>
            <div className="col-sm-1">
              <div></div>
            </div>
            <div className="col-sm-5" style={{ marginTop: "50px", }}>
              <div className="title">Intelligent Reminders</div>
              <div className="sub-title">Get timely reminders to replenish stock and record daily sales to help manage inventory better</div>
            </div>
          </div>
          <hr />
          <div style={{ textAlign: 'center',marginTop:"50px" }}>
            <h2 className="title" style={{ fontSize: "45px" }}>Features</h2>
          </div>
          <div >
            <div className="row" style={{marginTop:'60px',marginLeft:'50px',paddingBottom:'60px'}}>
              <div className="col-sm-3 zoom">
                <img src={Photo5} alt="detail" style={{width:'200px',height:'150px'}}></img>
                <div className="sub-title" style={{width:'200px',textAlign:'center'}}>Digital Reports and Statements</div>

              </div>
              <div className="col-sm-3 zoom">
                <img src={Photo6} alt="detail" style={{width:'200px',height:'150px'}}></img>
               <div className="sub-title" style={{width:'200px',textAlign:'center'}}> Get your reports on any device, anytime!</div>
              </div>
              <div className="col-sm-3 zoom">
                <img src={Photo7} alt="detail" style={{width:'200px',height:'150px'}}></img>
                <div className="sub-title" style={{width:'200px',textAlign:'center'}}>
                100% Safe and Secure</div> 
                </div>
              <div className="col-sm-3 zoom">
                <img src={Photo8} alt="detail" style={{width:'200px',height:'150px'}}></img>
                <div className="sub-title" style={{width:'200px',textAlign:'center'}}>Backup of data ensures 100% safety</div>

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