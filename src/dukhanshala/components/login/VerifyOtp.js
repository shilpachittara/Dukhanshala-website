import React from 'react';
import { Link } from 'react-router-dom';
import backArror from '../../assets/images/icon_back.svg';
class VerifyOtp extends React.Component{
    
    constructor(){
        super();

        this.state ={
        }
    }
    componentDidMount() {
    }

    render(){
        return(
            <div className="container">
            <h1 className="heading"><Link to="/"><img src={backArror} style={{marginRight:"15px"}} alt="" /></Link> OTP Verification</h1>
            <p className="small-text text-secondary">Please enter the 6 digit OTP sent to your number - 1234567890.</p>
            <button className="btn btn-outline-info btn-sm">Resend OTP</button>
            <div className="field">
              <input type="text" id="otp" name="otp" placeholder=" " maxLength="6" required="" />
              <p id="api-error" className="text-danger p-3"></p>
              <div>
                <button className="mb-5 btn btn-primary btn-lg" disabled="">Verify OTP</button>
              </div>
            </div>
            </div>
        )
    }

}

export default VerifyOtp;