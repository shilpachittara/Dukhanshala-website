import React, { Component } from 'react';
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/Footer.css'
import InstaIcon from "../../assets/image/instagram-sketched.png"
import FbIcon from "../../assets/image/facebook.png"
import Logo from "../../assets/image/dukaanshala.png"
import WhatsIcon from "../../assets/image/whatsapp.png"
import {Link} from 'react-router-dom'


class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }



    componentDidMount = () => {

    }

    render() {
        return (
            <div>
                <div className="bo-wrap clr4 footer-bg-color">
                    <div style={{flexDirection:'column', padding:'20px'}}>
                        <div className="row" style={{marginTop:'10px'}}>
                            <div className="col-md-4" style={{paddingRight:"20px",marginLeft:'40px'}}>
                                <h5  className="cu-ptr" style={{fontFamily:"Roboto-Light", fontSize:"18px",fontWeight:'bolder'}}><strong>About Us</strong></h5>
                                <p style={{fontFamily:"Roboto-Light", fontSize:"14px"}}>One stop store management software solution provider for Small 
                                    Businesses and Mom & Pop Stores</p>
                                
                            </div>
                            <div className="col-md-3" style={{textAlign:"center"}}>
                                <img src={Logo} alt="logo" style={{height:'150px',width:'300px', marginLeft:"5px",marginTop:"-5px"}}/>
                            </div>
                            <div className="col-md-4" style={{marginLeft:'40px',marginTop:'10px'}}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Link to="/PrivacyPolicy">
                                        <h5 className="cu-ptr" style={{fontFamily:"Roboto-Light", fontSize:"18px"}}><strong>Privacy Policy</strong></h5></Link>
                                        <Link to="/TermsCondition">
                                        <h5 className="cu-ptr" style={{fontFamily:"Roboto-Light", fontSize:"18px"}}><strong>Terms and Condition</strong></h5></Link>
                                        {/* <h5 className="cu-ptr" style={{fontFamily:"Roboto-Light", fontSize:"18px"}}><strong>Blogs</strong></h5> */}
                                    </div>
                                    <div className="col-md-6">
                                    <h5  style={{fontFamily:"Roboto-Light", fontSize:"18px",fontWeight:'bolder'}}><strong>Connect with us</strong></h5>
                                    <p style={{fontFamily:"Roboto-Light", fontSize:"14px"}}>info@dukaanshala.com</p>
                                    <p style={{marginTop:"-5px",fontFamily:"Roboto-Light", fontSize:"14px"}}>+91-8876058043</p>
                                    <img className="cu-ptr" src={InstaIcon} alt="insta" style={{height:'30px',width:'30px',marginTop:"-5px"}}/>
                                    <img className="cu-ptr" src={FbIcon} alt="insta" style={{height:'30px',width:'30px', marginLeft:"10px",marginTop:"-5px"}}/>
                                    <img className="cu-ptr" src={WhatsIcon} alt="insta" style={{height:'30px',width:'30px', marginLeft:"10px",marginTop:"-5px"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
              
                 
                    </div>
                    <div className="bo-footer">
                     
                    </div>
                </div>


            </div>
        );
    }
}

export default Navbar;