import React, { Component } from 'react';
import backArror from '../assets/images/icon_back.svg';
import { Link, Redirect } from 'react-router-dom';
import { AppContext } from 'Context/AppContext';


class BagPage extends Component {
  static contextType = AppContext;
    constructor(){
        super();

        this.state = {
          bag: null
        }
        this.address = this.address.bind(this)
    }

    componentDidMount() {}

    address(){
      if(this.context.mobile != null){
        this.setState({redirectCheckOut: true})
      }
      else{
        this.setState({redirectLogin: true})
      }
    }
    render(){

      const { redirectLogin } = this.state
      const { redirectCheckOut } = this.state
        if (redirectCheckOut)
            return (<Redirect to={{
                pathname: `${this.context.storeCode}/checkout`
            }} />)
        if(redirectLogin)
            return(
              <Redirect to={{
                pathname: `${this.context.storeCode}/otp`
            }} />)
      return(
        <div className="container">
          <h1 className="heading"><Link to={`${this.context.storeCode}`}><img src={backArror} style={{marginRight:"15px"}} alt="bag"/></Link> Bag {this.context.bagCount}</h1>

          <div className="row pr-0 mr-0 my-0">

            <div className="col-12 col-sm-8 px-0">
                
                <div className="container pr-0">
                  <div className="row">
                    <div className="col-3 col-sm-2">
                      <div className="thumbnail-container thumbnail-padding">
                        <img src="https://dukaan-api.1kg.me/static/images/category-def.jpg" alt="Heroine" className="thumbnail rounded-xl" />
                      </div>
                    </div>
                    <div className="col-9 col-sm-10 px-0 pr-3 pt-1">
                      <h6 className="mb-0">Heroine</h6>
                      <div className="mb-0"></div>
                      <small>1 piece</small>
                      <div className="mt-1 mb-0">
                        <div>
                          ₹ 400.00
                          <p className="btn-group float-right mb-0">
                            <span className="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2"><line x2="10" y1="1" y2="1" fill="none" stroke="#146EB4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" transform="translate(1)"></line></svg></span>
                            <span className="btn btn-outline-secondary">2</span>
                            <span className="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><g fill="#146EB4"><path d="M6 0c.385 0 .702.29.745.663L6.75.75v10.5c0 .414-.336.75-.75.75-.385 0-.702-.29-.745-.663l-.005-.087V.75C5.25.336 5.586 0 6 0z"></path><path d="M11.25 5.25c.414 0 .75.336.75.75 0 .385-.29.702-.663.745l-.087.005H.75C.336 6.75 0 6.414 0 6c0-.385.29-.702.663-.745L.75 5.25h10.5z"></path></g></svg></span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mx-0 mt-3" />
                </div>
                <div className="container pr-0">
                  <div className="row">
                    <div className="col-3 col-sm-2">
                      <div className="thumbnail-container thumbnail-padding">
                        <img src="https://dukaan-api.1kg.me/static/images/category-def.jpg" alt="Heroine" className="thumbnail rounded-xl" />
                      </div>
                    </div>
                    <div className="col-9 col-sm-10 px-0 pr-3 pt-1">
                      <h6 className="mb-0">Dummy Test</h6>
                      <div className="mb-0"></div>
                      <small>1 piece</small>
                      <div className="mt-1 mb-0">
                        <div>
                          ₹ 400.00
                          <p className="btn-group float-right mb-0">
                            <span className="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2"><line x2="10" y1="1" y2="1" fill="none" stroke="#146EB4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" transform="translate(1)"></line></svg></span>
                            <span className="btn btn-outline-secondary">2</span>
                            <span className="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><g fill="#146EB4"><path d="M6 0c.385 0 .702.29.745.663L6.75.75v10.5c0 .414-.336.75-.75.75-.385 0-.702-.29-.745-.663l-.005-.087V.75C5.25.336 5.586 0 6 0z"></path><path d="M11.25 5.25c.414 0 .75.336.75.75 0 .385-.29.702-.663.745l-.087.005H.75C.336 6.75 0 6.414 0 6c0-.385.29-.702.663-.745L.75 5.25h10.5z"></path></g></svg></span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mx-0 mt-3" />
                </div>

            </div>


            <div className="col-12 col-sm-4 pr-0 pt-2">
              <section>
                <div className="d-md-block d-lg-block">
                  <div className="p-3 bg-light">
                    <p className="mb-0">Item Total: <span className="float-right">₹890.00</span></p>
                    <div className="mb-3">Delivery:<span className="float-right text-success">Free</span></div>
                    <p><b>Grand Total: <span className="float-right">₹890.00</span></b></p>
                  </div>
                </div>
                <div className="text-center mt-5 pb-5 mb-5">
                  <div className="m-0">
                    <div className="btn btn-primary btn-lg btn-block text-white" onClick={this.address}>Select Address</div>
                  </div>
                </div>
              </section>
            </div>
          </div>

        </div>
      )
    }
  }
  
  export default BagPage