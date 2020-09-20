import React from 'react';
import './Header.css';
import logoImg from '../../../assets/images/logo.webp'
//import fbIcon from '../../../assets/images/facebook.svg'
//import twIcon from '../../../assets/images/twitter.svg'
import Search from '../search/Search';
import { Link } from 'react-router-dom';
import { AppContext } from 'Context/AppContext';
import axios from 'axios';
import https from 'https';

class Header extends React.Component{
static contextType = AppContext;
    constructor(){
        super();
        this.state = {
            storeName: null,
            globalPath:''
        }
    }

    componentDidMount() {

        var path;


        if(this.context.storeCode != null){
          path= this.context.storeCode;
          this.setState({
            globalPath:path   
          })
          this.getStoreDetail();
       
        }
        else{ 
          let url = window.location.pathname;
         
            let index = url.search("/")
            let lastIndexOf=url.indexOf("/", url.indexOf("/") + 1);
    
      if (index !== -1) {
          let urlLength;
          if(lastIndexOf==-1){
              let token = url;
              this.context.updateAppContext(token)
              this.setState({
                globalPath:token  
              })
              this.getStoreDetail();
           
          }
          else{
               urlLength = lastIndexOf;
               let token = url.slice(index , urlLength);
               this.context.updateAppContext(token)
               this.setState({
                globalPath:token  
              })
              this.getStoreDetail();
    
          }
      
      }
      else {
        alert("try again")
      }
    
        }
 
          
    }

    getStoreDetail = () => {
    var path = null; 
    if(this.context.storeCode != null){
    path = this.context.storeCode
    }
    else{
        path = this.state.globalPath;
    }
    let url = 'https://api.dukaanshala.com/web/store/detail'+ path;
    const agent = new https.Agent({
        rejectUnauthorized: false,
    });
    axios.get(url,{httpsAgent: agent})
        .then(response => {
            if(response && response.data && response.data){
                //this.context.updateCategories(response.data);
                this.setState({storeName: response.data.storeName});
                this.context.updateMinFreeDelivery(response.data.minFreeDelivery);
                this.context.updateDeliveryCharge(response.data.deliveryCharge);
            }
            else{
                //failure scenario
            }
            }
        )
        
  };
  render(){
    return(
    <div className="sticky-top headerPanel">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-auto">
                    <Link to="/"><img className="logo" src={logoImg} alt="Dukhan Shala" /></Link>
                </div>
                <div className="col">
                    <div className="store-title">
                        <h3 className="logo-title">{this.state.storeName}</h3>
                        <p className="made-title">Store made with Dukaanshala</p>
                    </div>
                </div>
                {/*<div className="col-auto">
                    <img className="socialIcon" src={fbIcon} alt="Facebook" />
                    <img className="socialIcon" src={twIcon} alt="Twitter" />
    </div>*/}
            </div>
            <Search/>
        </div>
    </div>
)
    }
}

export default Header;
