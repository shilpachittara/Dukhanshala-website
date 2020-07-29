import React, { Component } from 'react';
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/Footer.css'


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

                <div className="bo-wrap clr3">
                    <div className="bo-footer">
                        <div className="bo-footer-smap">
                            <a href="/">Contact Us</a> | <a href="/">Blog</a> | <a href="/">Privacy Policy</a> 
                        </div>

                        <div className="bo-footer-power">
                            
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="bo-wrap clr4">
                    <div className="bo-footer">
                        <div className="bo-footer-copyright">&copy;2020 dukaanshala.com</div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Navbar;