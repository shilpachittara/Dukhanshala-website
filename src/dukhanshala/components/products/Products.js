import React from 'react';
import './Products.css'
import ProductItems from '../product-items/ProductItems';
import { AppContext } from 'Context/AppContext';
import * as HomepageServices from '../../../services/HomepageServices'

class Products extends React.Component {
    static contextType = AppContext;
    constructor() {
        super();

        this.state = {
            products: null
        }
    }
    componentDidMount() {
        this.getProductList();
    }
    getProductList = async () => {

        let requestPath = {}
        requestPath.storeCode = this.context.storeCode
        requestPath.id = this.context.categoryId

        let response = await HomepageServices.getProducts(requestPath)
        try {
            if (response && response.data && response.data.products) {
                this.setState({ products: response.data.products });
            }
            else {
                //failure scenario
            }
        }
        catch (e) {
            alert(e)
        }

    };

    render() {
        return (
            <div className="container productItems">
                <div className="row">
                    {this.state.products &&
                        this.state.products.map(({ id, ...otherSectionProps }, index) => (
                            <ProductItems key={index} {...otherSectionProps} />
                        ))
                    }
                </div>
            </div>
        )
    }

}

export default Products;