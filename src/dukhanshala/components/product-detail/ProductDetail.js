import React from 'react';
import './ProductDetail.css'
import { Redirect, Link } from 'react-router-dom';
import { AppContext } from 'Context/AppContext';
import * as ProductdetailServices from '../../../services/ProductdetailServices'

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
            bag: {
                products: []
            }
        }

    }
    componentDidMount() {
        this.getProductDetail();
        var bag = null;
        if (this.context.bag.products[0]) {
            this.setState({ bag: this.context.bag });
        }
        if (!this.context.bag.products[0] && localStorage.getItem("bagProductsBagPage") !== null) {
            bag = JSON.parse(localStorage.getItem("bagProductsBagPage"));
            this.context.updateBag(bag)
            this.setState({ bag: bag });
        }
        var productId = null;
        if(localStorage.getItem('prodId') !== null){
         productId =  parseInt(localStorage.getItem('prodId'));
        }
        if(bag){
            var bagLength = bag.products.length;
            for (var j = 0; j < bagLength; j++) {
                if (bag.products[j]) {
                    if (bag.products[j].productId === productId) {
                        this.setState({ count: bag.products[j].count })
                    }
                }
            }
        }
        if (this.context.bag.products[0]) {
            var length = this.context.bag.products.length;
            for (var i = 0; i < length; i++) {
                if (this.context.bag.products[i]) {
                    if (this.context.bag.products[i].productId === this.context.productId) {
                        this.setState({ count: this.context.bag.products[i].count })
                    }
                }
            }
        }
       
    }

    getProductDetail = async () => {
        if (this.context.storeCode !== null && this.context.productId !== null) {
            localStorage.setItem('storeCode', this.context.storeCode)
            localStorage.setItem('prodId', this.context.productId)
        }
        let requestUrl = {}
        requestUrl.storeCode = this.context.storeCode === null ? localStorage.getItem('storeCode') : this.context.storeCode
        requestUrl.prodId = this.context.productId === null ? localStorage.getItem('prodId') : this.context.productId

        let response = await ProductdetailServices.getProductDetail(requestUrl)
        try {
            if (response && response.status === 200 && response.data) {
                // this.props.setCategories(response.data.categories);
                //this.context.updateProduct(response.data);
                this.setState({ product: response.data });
            }
            else {
                //failure scenario
            }
        }
        catch (err) {

        }
    };




    addProduct = () => {
        var count = this.state.count + 1;
        var prod = this.state.product;
        prod.quantity = count;
        this.setState({ product: prod });
        this.setState({ count: count });
        this.context.updateBagCount(this.context.bagCount + 1);
        localStorage.setItem("bagCountBagPage", this.context.bagCount + 1);
        this.addToBag();
    }

    addToBag = () => {
        var products = this.context.bag.products;
        var found = false;
        var length = this.context.bag.products.length;
        for (var i = 0; i < length; i++) {
            if (this.context.bag.products[i]) {
                if (this.context.bag.products[i].productId === this.context.productId) {
                    products[i].count = products[i].count + 1;
                    found = true;
                }
            }
        }
        if (!found) {
            var newProduct = this.state.product;
            newProduct.count = 1;
            products.push(newProduct);
        }
        var updatedBag = { products: [], address: {} }
        updatedBag.products = products;
        this.context.updateBag(updatedBag);
        localStorage.setItem("bagProductsBagPage", JSON.stringify(updatedBag))
    }

    subProduct = (event) => {
        if (this.state.count !== 0) {
            var count = this.state.count - 1;
            var prod = this.state.product;
            prod.quantity = count;
            this.setState({ product: prod });
            this.setState({ count: count });
            this.context.updateBagCount(this.context.bagCount - 1);
            this.subFromBag();
            localStorage.setItem("bagCountBagPage", this.context.bagCount - 1);
        }
    }

    subFromBag = () => {
        var products = this.context.bag.products;
        var length = this.context.bag.products.length;
        for (var i = 0; i < length; i++) {
            if (this.context.bag.products[i]) {
                if (this.context.bag.products[i].productId === this.context.productId) {
                    products[i].count = products[i].count - 1;
                }
                if (products[i].count === 0) {
                    products.splice(i, 1);
                    if (length === 1) {
                        products = [];
                    }
                }
            }
        }
        var updatedBag = { products: [], address: {} }
        updatedBag.products = products;
        this.context.updateBag(updatedBag);
        localStorage.setItem("bagProductsBagPage", JSON.stringify(updatedBag))
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

            <div className="row m-q-height " style={{ backgroundColor: '#bff9f347' }}>

                <div className="col-12 col-sm-5">
                    <div><h4 className="prod-detail-name" style={{ marginBottom: '10px', marginTop: '10px' }}>{this.state.product.productName}</h4></div>

                    <div className="thumbnail-container img-padding-product" >

                        <img src={this.state.product.productImage} alt={""} style={{ height: 'calc(40vh - 50px)' }} className="thumbnail rounded-xl img-fluid fit-img" />
                    </div>
                </div>
                <div className="col-12 col-sm-7">


                    <div className="mt-3">
                        <span>Price: ₹</span> <span style={{ fontWeight: "bold", fontSize: '18px' }}>{" " + this.state.product.sellingPrice}</span>
                        <small className="small-text mr-2 pl-1" style={{ color: 'black', fontSize: '14px' }} >{this.state.product.mrp !== null ? "MRP: ₹" : ""}<span style={this.state.product.sellingPrice !== null ? { textDecoration: 'line-through' } : { display: 'none' }}>{" " + this.state.product.mrp !== null ? this.state.product.mrp : ""}</span></small>

                    </div>
                    <div className="mt-3">
                        <div style={{ fontSize: '16px' }}>{this.state.product.productDescription}</div>
                    </div>
                    <div className="mt-3">
                        <div className="row" style={{ paddingBottom: '15%' }}>
                            <div className="col pr-0">
                                <p className="btn-group w-100 my-3">
                                    <span className="btn btn-outline-info btn-lg" style={{ borderColor: ' #3BB3A6' }} onClick={this.subProduct}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill='black' d="M15 7c.552 0 1 .448 1 1 0 .513-.386.936-.883.993L15 9H1c-.552 0-1-.448-1-1 0-.513.386-.936.883-.993L1 7h14z"></path></svg></span>
                                    <span className="btn btn-outline-secondary btn-lg" style={{ borderColor: ' #3BB3A6', color: 'black' }}>{this.state.count}</span>
                                    <span className="btn btn-outline-info btn-lg" style={{ borderColor: ' #3BB3A6' }} onClick={this.addProduct}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill='black'><path d="M8 0c.513 0 .936.386.993.883L9 1v14c0 .552-.448 1-1 1-.513 0-.936-.386-.993-.883L7 15V1c0-.552.448-1 1-1z"></path><path d="M15 7c.552 0 1 .448 1 1 0 .513-.386.936-.883.993L15 9H1c-.552 0-1-.448-1-1 0-.513.386-.936.883-.993L1 7h14z"></path></g></svg></span>
                                </p>
                            </div>
                            <div className="col">
                                <Link to={this.context.storeCode + "/bag"}>
                                    <button className="btn btn-primary w-100 my-3 btn-lg add-button" style={{ backgroundColor: ' #3BB3A6', borderColor: ' #3BB3A6', fontWeight: 'bold' }}>Go to Bag</button>
                                </Link>  </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductDetail;