class ObjectCreation {


    orderObject(input) {
        let order = {
            products: [],
            orderQuantity: null,
            orderValue: null,
            deliveryFee: null,
            grandTotal: null,
            customerName: null,
            customerMobile: window.localStorage.getItem('userMobile'),
            pincode: null,
            address: null,
            city: null,
            paymentMode: null,
            deliveryMode: null,
            storeCode: null
        }
        if (input.totalItem) {
            order.orderQuantity = input.totalItem;
        }
        if (input.total) {
            order.orderValue = input.total;
        }
        if (input.deliveryCharge) {
            order.deliveryFee = input.deliveryCharge;
        }
        if (input.grandTotal) {
            order.grandTotal = input.grandTotal;
        }
        if (input.pincode) {
            order.pincode = input.pincode;
        }
        if (input.address) {
            order.address = input.address;
        }
        if (input.name) {
            order.customerName = input.name;
        }
       
            
     
        if (input.storeCode) {
            order.storeCode = input.storeCode.slice(1);
        }
        order.paymentMode = "COD";
        if (input.city) {
            order.city = input.city;
        }
        let productList = this.productObject(input.bag.products);
        order.products = productList;
        return order;
    }

    productObject(input) {
        let productList = [];
        input.forEach((item) => {
            let data = {
                'itemQuantity': item.count,
                'productId': item.productId,
                'itemCost': item.sellingPrice,
            }
            productList.push(data);
        })
        return productList;
    }
}

export default ObjectCreation;