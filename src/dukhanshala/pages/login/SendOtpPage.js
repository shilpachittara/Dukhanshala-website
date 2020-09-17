import React, { Component } from 'react';
import SendOtp from 'dukhanshala/components/login/SendOtp';
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';

class SendOtpPage extends Component{
    
    render(){
        return(
          <div>
            <Header />
          <section className="container CategoriesPage">
            <h2 className="heading">Login</h2>          
              <SendOtp/>
          </section>  
          <Footer/>
        </div>
        )
    }

}

export default SendOtpPage;