import React from 'react';
import './ProductDetail.css'
import { Redirect } from 'react-router-dom';
import { AppContext } from 'Context/AppContext';
import Axios from 'axios';


class ProductDetail extends React.Component {
    static contextType = AppContext;
    constructor() {
        super();

        this.state = {
            product: {
                "availableQuantity": null,
                "categoryName": null,
                "mrp": null,
                "productId": null,
                "productImage": null,
                "productName": null,
                "sellingPrice": null
            },
            path: null,
            count: 0,
            bag: null
        }
        //this.submit = this.submit.bind(this)
    }
    componentDidMount() {
        this.setState({ bag: this.context.bag });
        var length = this.context.bag.products.length;
        for (var i = 0; i < length; i++) {
            if (this.context.bag.products[i].productId === this.context.productId) {
                this.setState({ count: this.context.bag.products[i].count })
            }
        }
        this.getProductDetail();
    }

    getProductDetail = () => {
        let url = 'https://35.198.221.218:4200/web/category/product/detail' + this.context.storeCode + '/' + this.context.productId;
        Axios.get(url)
            .then(response => {
                if (response && response.data && response.data) {
                    // this.props.setCategories(response.data.categories);
                    //this.context.updateProduct(response.data);
                    this.setState({ product: response.data });
                }
                else {
                    //failure scenario
                }
            }
            )
    };

    goToBag = () => {
        this.setState({ redirect: true })
    }

    addProduct = () => {
        var count = this.state.count + 1;
        var prod = this.state.product;
        prod.quantity = count;
        this.setState({ product: prod });
        this.setState({ count: count });
        this.context.updateBagCount(this.context.bagCount + 1);
        this.addToBag();
    }

    addToBag = () => {
        var products = this.context.bag.products;
        var found = false;
        var length = this.context.bag.products.length;
        for(var i=0; i< length; i++){
            if (this.context.bag.products[i].productId === this.context.productId) {
                products[i].count = products[i].count+ 1;
                found = true;
            }
        }
        if(!found){
            var newProduct = this.state.product;
            newProduct.count = 1;
            products.push(newProduct);
        }
        var updatedBag = {products:[],address:{}}
        updatedBag.products = products;
        this.context.updateBag(updatedBag); 
    }

    subProduct = (event) => {
        var count = this.state.count - 1;
        var prod = this.state.product;
        prod.quantity = count;
        this.setState({ product: prod });
        this.setState({ count: count });
        this.context.updateBagCount(this.context.bagCount - 1);
        this.subFromBag();
    }

    subFromBag = () => {
        var products = this.context.bag.products;
        var length = this.context.bag.products.length;
        for(var i=0; i< length; i++){
            if (this.context.bag.products[i].productId === this.context.productId) {
                products[i].count = products[i].count - 1;
            }
        }
        var updatedBag = {products:[],address:{}}
        updatedBag.products = products;
        this.context.updateBag(updatedBag); 
    }

    back = (event) => {
        this.setState({ redirect: true })
    }

    render() {
        const { redirectBack } = this.state

        if (redirectBack)
            return (<Redirect to={{
                pathname: `${this.context.AppContext}/products/${this.context.categoryId}`
            }} />)
        const { redirect } = this.state
        if (redirect)
            return (<Redirect to={{
                pathname: `${this.context.storeCode}/bag`
            }} />)
        return (
            <div className="row product-detail">
                <div className="col-12 col-sm-5">
                    <div className="thumbnail-container thumbnail-padding" >
                        <img src={this.state.product.productImage} alt={""} className="thumbnail rounded-xl img-fluid" />
                    </div>
                </div>
                <div className="col-12 col-sm-7">
                    <h4 className="prod-title">{this.state.product.productName}</h4>
                    {/*<h6 className="prod-qty">{"3"} piece</h6>*/}
                    <div className="mt-3">
                        <span className="prod-price">₹ {this.state.product.sellingPrice}</span>
                        {/*<small className="small-text mr-2 pl-1"><strike>₹ {this.state.product.mrp}</strike></small>
                    <span className="discount-badge">{"10"}% off</span>*/}
                    </div>
                    <div className="mt-3">
                        <div className="row">
                            <div className="col pr-0">
                                <p className="btn-group w-100 my-3">
                                    <span className="btn btn-outline-primary btn-lg" onClick={this.subProduct}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#146EB4" d="M15 7c.552 0 1 .448 1 1 0 .513-.386.936-.883.993L15 9H1c-.552 0-1-.448-1-1 0-.513.386-.936.883-.993L1 7h14z"></path></svg></span>
                                    <span className="btn btn-outline-secondary btn-lg">{this.state.count}</span>
                                    <span className="btn btn-outline-primary btn-lg" onClick={this.addProduct}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="#146EB4"><path d="M8 0c.513 0 .936.386.993.883L9 1v14c0 .552-.448 1-1 1-.513 0-.936-.386-.993-.883L7 15V1c0-.552.448-1 1-1z"></path><path d="M15 7c.552 0 1 .448 1 1 0 .513-.386.936-.883.993L15 9H1c-.552 0-1-.448-1-1 0-.513.386-.936.883-.993L1 7h14z"></path></g></svg></span>
                                </p>
                            </div>
                            <div className="col">
                                <button className="btn btn-primary w-100 my-3 btn-lg" onClick={this.goToBag}>Go to Bag</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductDetail;