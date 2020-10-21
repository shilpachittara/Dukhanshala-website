import React from 'react';
import { AppContext } from 'Context/AppContext';
import * as HeaderServices from '../../../services/HeaderServices'

class CompanyInfo extends React.Component {
    static contextType = AppContext;
    constructor() {
        super();
        this.state = {
            storeName: null,
            storeAddressName: "Loading..Kindly wait for sometime.",
            storeAddress: null,
            globalPath: ''
        }
    }
    getStoreCode = () => {
        var path;
        if (this.context.storeCode != null) {
            path = this.context.storeCode;

            this.getStoreDetail(path);

        }
        else {
            let url = window.location.pathname;

            let index = url.search("/")
            let lastIndexOf = url.indexOf("/", url.indexOf("/") + 1);

            if (index !== -1) {
                let urlLength;
                if (lastIndexOf == -1) {
                    let token = url;
                    this.context.updateAppContext(token)

                    this.getStoreDetail(token);

                }
                else {
                    urlLength = lastIndexOf;
                    let token = url.slice(index, urlLength);
                    this.context.updateAppContext(token)

                    this.getStoreDetail(token);

                }

            }
            else {
                alert("try again")
            }

        }
    }

    componentDidMount() {
        this.getStoreCode()
    }

    getStoreDetail = async (val) => {
        let response = await HeaderServices.getStoreInfo(val);
        try {
            if (response && response.status===200 && response.data) {
                //this.context.updateCategories(response.data);
                this.setState({
                    storeName: response.data.storeName, storeAddressName: response.data.storeAddressName,
                    storeAddress: response.data.storeAddress
                });
            }
            else {
                //failure scenario
            }
        }
        catch (err) {
            alert(err)
        }

    };
    render() {
        return (
            <div className="company-info row bg-light mb-5 mx-0">
                <div className="container">
                    <div className="col-12 col-sm-6 px-0">
                        <div className="py-4">

                            <p className="mb-0 mt-1 mb-2">{this.state.storeAddress} </p>
                            <p className="mb-0 mt-1 mb-2">{this.state.storeAddressName}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CompanyInfo;