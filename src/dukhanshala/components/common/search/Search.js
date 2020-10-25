import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import * as SearchServices from '../../../../services/SearchServices'
import MenuItem from '@material-ui/core/MenuItem';

export default class Search extends PureComponent {
    constructor() {
        super();
        this.state = {
            options: [],
            storeId: ""
        }
    }




    componentDidMount = () => {
        this.getStoreCode()
    }
    getStoreCode = () => {
        var path;
        let url = window.location.pathname;

        let index = url.search("/")
        let lastIndexOf = url.indexOf("/", url.indexOf("/") + 1);

        if (index !== -1) {
            let urlLength;
            if (lastIndexOf === -1) {
                let token = url;
                this.setState({ storeId: token })

            }
            else {
                urlLength = lastIndexOf;
                let token = url.slice(index, urlLength);
                this.setState({ storeId: token })


            }

        }
        else {
            alert("try again")
        }


    }
    searchProduct = async (e) => {
        let data = {}
        data.storeCode = this.context.storeCode
        data.val = e.target.value
        if (e.target.value.length > 1) {
            try {
                let response = await SearchServices.getProductListBySearch(data)

                if (response.data.products) {


                    this.setState({ options: response.data.products })
                    console.log(response.data.products)
                }
            }
            catch (e) { alert(e) }
        }



    }

    productDetail = (catName, catId, prodId) => {
        console.log(catName, catId, prodId, "ccc")
        this.context.updateCategoryName(catName);
        this.context.updateCategoryId(catId);
        this.context.updateProductId(prodId);
        console.log("xx", this.state.storeId, prodId)
        this.props.history.push(`${this.context.storeCode + "/product/detail/" + prodId}`);
    }

    render() {
        return (
            <div>
                <TextField
                    label="Search Product"
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    style={{ width: '100%' }}
                    onChange={this.searchProduct}
                />
                {this.state.options.length > 0 &&
                    <div className="option-search">
                        {
                            this.state.options.map((option, index) =>
                               
                               <div>
                                    <MenuItem onClick={() => { this.productDetail(option.categoryName, option.categoryId, option.productId) }} key={index} style={{ zIndex: 10, fontWeight: 'bold' }}>{option.productName}</MenuItem>
                                   
                                </div>)
                        }
                    </div>
                }
            </div>
        )
    }
}
