import React, { Component } from 'react';
import VerifyOtp from 'dukhanshala/components/login/VerifyOtp';

class VerifyOtpPage extends Component{
    
    render(){
        return(
          <div>
          <section className="container CategoriesPage">
            <h2 className="heading">Login</h2>          
              <VerifyOtp/>
          </section>   
        </div>
        )
    }

}

export default VerifyOtpPage;