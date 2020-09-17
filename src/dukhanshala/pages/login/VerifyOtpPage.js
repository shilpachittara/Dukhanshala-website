import React, { Component } from 'react';
import VerifyOtp from 'dukhanshala/components/login/VerifyOtp';
import Footer from 'dukhanshala/components/common/footer/Footer';
import Header from 'dukhanshala/components/common/header/Header';

class VerifyOtpPage extends Component{
    
    render(){
        return(
          <div>
            <Header />
          <section className="container CategoriesPage">
            <h2 className="heading">Login</h2>          
              <VerifyOtp/>
          </section>  
          <Footer/> 
        </div>
        )
    }

}

export default VerifyOtpPage;