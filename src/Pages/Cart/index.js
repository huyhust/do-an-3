import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";

import {IoIosClose} from "react-icons/io";
const Cart = () => {
    return (
        <>
            <section className="section cartPage">
                <div className="container">

                    <div className="row">

                        <div className="col-md-8">

                            <h2 className="hd mb-0">Your cart </h2>
                            <p>There are <b>3</b> products in your cart</p>

                            <div className="table-responsive">

                                <table className="table table-striped">

                                    <thead>
                                        <tr>
                                            <th width="45%">Product</th>
                                            <th width="15%">Unit Price</th>
                                            <th width="20%">Quantity</th>
                                            <th width="15%">Subtotal</th>
                                            <th width="10%">Remove</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        <tr>
                                            {/* PRODUCT */}
                                            <td width="45%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center CartItemimgWrapper">

                                                        <div className="imgWrapper">
                                                            <img
                                                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                                                                className="w-100"
                                                                alt="Product"
                                                            />
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>Sample Product</h6>

                                                            <Rating name="read-only" value={4.5}
                                                            readOnly precision={0.5} size="small"
                                                            ></Rating>
                                                        </div>

                                                    </div>
                                                </Link>
                                            </td>

                                            <td width="10%">$7.25</td>


                                            <td width="20%"> <QuantityBox/></td>

                                            {/* SUBTOTAL */}
                                            <td width="10%">$7.25</td>

                                            {/* REMOVE */}
                                            <td width="10%"> <span className="remove"><IoIosClose/> </span>  </td>
                                              
                                           

                                        </tr>
                                                                                <tr>
                                            {/* PRODUCT */}
                                            <td width="45%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center CartItemimgWrapper">

                                                        <div className="imgWrapper">
                                                            <img
                                                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                                                                className="w-100"
                                                                alt="Product"
                                                            />
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>Sample Product</h6>

                                                            <Rating name="read-only" value={4.5}
                                                            readOnly precision={0.5} size="small"
                                                            ></Rating>
                                                        </div>

                                                    </div>
                                                </Link>
                                            </td>

                                            <td width="10%">$7.25</td>


                                            <td width="20%"> <QuantityBox/></td>

                                            {/* SUBTOTAL */}
                                            <td width="10%">$7.25</td>

                                            {/* REMOVE */}
                                            <td width="10%"> <span className="remove"><IoIosClose/> </span>  </td>
                                              
                                           

                                        </tr>
                                                                                <tr>
                                            {/* PRODUCT */}
                                            <td width="45%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center CartItemimgWrapper">

                                                        <div className="imgWrapper">
                                                            <img
                                                                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                                                                className="w-100"
                                                                alt="Product"
                                                            />
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>Sample Product</h6>

                                                            <Rating name="read-only" value={4.5}
                                                            readOnly precision={0.5} size="small"
                                                            ></Rating>
                                                        </div>

                                                    </div>
                                                </Link>
                                            </td>

                                            <td width="10%">$7.25</td>


                                            <td width="20%"> <QuantityBox/></td>

                                            {/* SUBTOTAL */}
                                            <td width="10%">$7.25</td>

                                            {/* REMOVE */}
                                            <td width="10%"> <span className="remove"><IoIosClose/> </span>  </td>
                                              
                                           

                                        </tr>

                                    </tbody>

                                </table>

                            </div>
                        </div>

                        <div className="col-md-4">
                          <div className="card border p-3 cartDetails"></div>
                          <h4>Cart toltals</h4>

                          <div className="d-flex align-items-center">
                             <span>subtotal</span>
                            <span className="ml-auto text-red">$12.31</span>
                          </div>

                            <div className="d-flex align-items-center">
                             <span>subtotal</span>
                            <span className="ml-auto text-red">$12.31</span>
                          </div>

                                   <div className="d-flex align-items-center">
                             <span>subtotal</span>
                            <span className="ml-auto text-red">$12.31</span>
                          </div>

                                   <div className="d-flex align-items-center">
                             <span>subtotal</span>
                            <span className="ml-auto text-red">$12.31</span>
                          </div>

                        </div>


                    </div>

                </div>
            </section>
        </>
    );
};

export default Cart;
