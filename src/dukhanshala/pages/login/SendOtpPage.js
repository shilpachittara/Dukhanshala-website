import React, { Component } from 'react';
import SendOtp from 'dukhanshala/components/login/SendOtp';

class SendOtpPage extends Component{
    
    render(){
        return(
          <div>
          <section className="container CategoriesPage">
            <h2 className="heading">Login</h2>          
              <SendOtp/>
          </section>   
        </div>
        )
    }

}

export default SendOtpPage;