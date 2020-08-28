import React, { Component } from 'react';
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/Footer.css'
import InstaIcon from "../../assets/image/instagram-sketched.png"
import FbIcon from "../../assets/image/facebook.png"
import Logo from "../../assets/image/dukaanshala.png"
import WhatsIcon from "../../assets/image/whatsapp.png"
import {Link} from 'react-router-dom'
import HalfLogo from '../../assets/image/white_logo.svg'


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
                <div className="bo-wrap clr4 footer-bg-color" style={{ backgroundColor:"black", color:"white", overflowX:"hidden",  
               margin:"0 auto"}}>
                    <div style={{flexDirection:'column',color:"white",}}>
                        <div className="row mt-4 pl-4" style={{ width:"90%", margin:"0 auto", fontFamily:"Poppins"}}>
                            <div className="col-md-5 col-12" style={{}}>
                                <img src={HalfLogo} alt="logo" style={{height:'40px',width:'200px'}}/>
                                <p style={{fontSize:"15px",color:"white", fontFamily:"Poppins-Light"}}>
                                    Bharat ka apna Store Bahi Khata App for Businesses and Mom & Pop Stores. Available in English and हिन्दी</p> 
                            </div>
                    
                            <div className="col-md-4 col-12 pt-2 pl-4 " style={{}}> 
                                        <Link to="/TermsCondition">
                                        <h5 className="cu-ptr" style={{fontSize:"15px"}}><strong style={{color:"white",fontFamily:"Poppins-Light"}}>Terms and Condition</strong></h5></Link>
                                        <Link to="/PrivacyPolicy">
                                        <h5 className="cu-ptr" style={{fontSize:"15px"}}><strong style={{color:"white", fontFamily:"Poppins-Light"}}>Privacy Policy</strong></h5></Link>
                                        {/* <h5 className="cu-ptr" style={{fontSize:"15px"}}><strong style={{color:"white",fontFamily:"Poppins-Light"}}>Blogs</strong></h5>
                                        <h5 className="cu-ptr" style={{fontSize:"15px"}}><strong style={{color:"white",fontFamily:"Poppins-Light"}}>About Us</strong></h5> */}
                            </div>
                            <div className="col-md-2 col-12 pl-4" style={{}}>
                                    <p style={{fontSize:"15px",color:"white", fontFamily:"Poppins-Light"}}>info@dukaanshala.com</p>
                                    <p style={{marginTop:"-5px", fontSize:"14px",color:"white",fontFamily:"Poppins-Light"}}>+91-8876058043</p>
                                    <a href="https://www.facebook.com/Dukaanshala-102099868271468/">
                                    <img className="cu-ptr" src={FbIcon} alt="insta" style={{height:'25px',width:'25px', marginTop:"-5px"}}/>
                                    </a>
                                    <a href="https://instagram.com/dukaanshala?igshid=17mw0eflv9jxp">
                                    <img className="cu-ptr" src={InstaIcon} alt="insta" style={{height:'25px',width:'25px',marginLeft:"14px",marginTop:"-5px"}}/>
                                    </a> 
                                    {/* <img className="cu-ptr" src={WhatsIcon} alt="insta" style={{height:'25px',width:'25px', marginLeft:"14px",marginTop:"-5px"}}/> */}
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