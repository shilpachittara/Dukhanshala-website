import React from 'react';
import './ProductDetail.css'

const ProductDetail =()=>(
        <div className="row product-detail">
            <div className="col-12 col-sm-5">
                <div className="thumbnail-container thumbnail-padding">
                    <img src={"https://dukaan-api.1kg.me/static/images/category-def.jpg"} alt={""} className="thumbnail rounded-xl img-fluid" />
                </div>
            </div>
            <div className="col-12 col-sm-7">
                <h4 className="prod-title">{"Dukhan Shala"}</h4>
                <h6 className="prod-qty">{"3"} piece</h6>
                <div className="mt-3">
                    <span className="prod-price">₹ {"300"}</span>
                    <small className="small-text mr-2 pl-1"><strike>₹ {400}</strike></small>
                    <span className="discount-badge">{"10"}% off</span>
                </div>
                <div className="mt-3">
                    <div className="row">
                        <div className="col pr-0">
                            <p className="btn-group w-100 my-3">
                                <span class="btn btn-outline-primary btn-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#146EB4" d="M15 7c.552 0 1 .448 1 1 0 .513-.386.936-.883.993L15 9H1c-.552 0-1-.448-1-1 0-.513.386-.936.883-.993L1 7h14z"></path></svg></span>
                                <span class="btn btn-outline-secondary btn-lg">1</span>
                                <span class="btn btn-outline-primary btn-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="#146EB4"><path d="M8 0c.513 0 .936.386.993.883L9 1v14c0 .552-.448 1-1 1-.513 0-.936-.386-.993-.883L7 15V1c0-.552.448-1 1-1z"></path><path d="M15 7c.552 0 1 .448 1 1 0 .513-.386.936-.883.993L15 9H1c-.552 0-1-.448-1-1 0-.513.386-.936.883-.993L1 7h14z"></path></g></svg></span>
                            </p>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary w-100 my-3 btn-lg">Go to Bag</button>
                        </div>
                    </div>                                    
                </div>
            </div>
        </div>    
)
export default ProductDetail;