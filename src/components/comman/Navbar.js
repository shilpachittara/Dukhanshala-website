import React, { Component } from 'react';
import Logo from '../../assets/image/dukaanshala.png'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/navbar.css'


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
      <div className="box-shadow">
        <nav className="navbar navbar-expand-lg bg-white" >
          <a className="navbar-brand" href="/"><img alt="logo" src={Logo} style={{ height: 100 }}></img></a>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item p-v-10">
              <a href="#" className="nav-link cu-ptr">Case Study</a>
            </li>
            <li className="nav-item p-v-10">
              <a  href="#" className="nav-link cu-ptr">Our Vision</a>
            </li>
          
            <li className="nav-item p-v-20 ">
              <a href="/"><button type="button" style={{color:'red'}} className="btn btn-outline-danger btn-zoom">Get The App</button></a>
            </li>
            <li className="nav-item p-v-10" style={{marginRight:'25px'}}>
              <a  href="#" className="nav-link cu-ptr">Contact Us</a>
            </li>
          </ul>
        </nav>

      </div>
    );
  }
}

export default Navbar;