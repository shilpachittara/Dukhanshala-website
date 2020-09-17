import React from 'react';
import './CompanyInfo.css';
import { AppContext } from 'Context/AppContext';
import axios from 'axios';
import https from 'https';

class CompanyInfo extends React.Component{
    static contextType = AppContext;
    constructor(){
        super();
        this.state = {
            storeName: null,
            storeAddressName: null,
            storeAddress: null,
        }
    }
    componentDidMount() {

        if(this.context.storeCode == null){
        this.context.updateAppContext(window.location.pathname); 
      }
          this.getStoreDetail();
      }
      getStoreDetail = () => {
    var path = null; 
    if(this.context.storeCode != null){
    path = this.context.storeCode
    }
    else{
        path = window.location.pathname;
    }
    let url = 'https://api.dukaanshala.com/web/store/detail'+ path;
    const agent = new https.Agent({
        rejectUnauthorized: false,
    });
    axios.get(url,{httpsAgent: agent})
        .then(response => {
            if(response && response.data && response.data){
                //this.context.updateCategories(response.data);
                this.setState({storeName: response.data.storeName, storeAddressName: response.data.storeAddressName,
                storeAddress: response.data.storeAddress});
            }
            else{
                //failure scenario
            }
            }
        )
        
  };
  render(){
    return(
    <div className="company-info row bg-light mb-5 mx-0">
        <div className="container">
            <div className="col-12 col-sm-6 px-0">
                <div className="py-4">
                    <small className="text-secondary">STORE DETAILS</small>
                    <p className="mt-2 mb-0"><b>{this.state.storeName}</b></p>
                    <p className="mb-0 mt-1 mb-2">{this.state.storeAddress}</p>
                    <p className="mb-0 mt-1 mb-2">{this.state.storeAddressName}</p>
                </div>
            </div>
        </div>
    </div>
)
    }}
export default CompanyInfo;