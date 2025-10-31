
import { IoShirtOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { IoIosPricetag } from "react-icons/io";

import { FaFacebook } from "react-icons/fa";

import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () =>{


    return(


        <footer>

                <div className="container">
                    
                    <div className="topInfo row">

                        <div className="col d-flex align-items-center">

                            <span className="ml-2"><IoShirtOutline />Every fresh products</span>


                        </div>

                         <div className="col d-flex align-items-center">

                            <span className="ml-2"><CiDeliveryTruck />Every fresh products</span>


                        </div>
                         <div className="col d-flex align-items-center">

                            <span className="ml-2"><CiDiscount1 />Every fresh products</span>


                        </div>
                         <div className="col d-flex align-items-center">

                            <span className="ml-2"><IoIosPricetag />Every fresh products</span>


                        </div>


                        
                    </div>

                    <div className="row mt-5 linksWrap">

                       <div className="col">

                        <h5>Fruit and vegetables</h5>
                            <ul>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                 


                            </ul>
                       </div>

                        <div className="col">

                        <h5>Fruit and vegetables</h5>
                            <ul>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>


                            </ul>
                       </div>


 <div className="col">

                        <h5>Fruit and vegetables</h5>
                            <ul>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>


                            </ul>
                       </div>

 <div className="col">

                        <h5>Fruit and vegetables</h5>
                            <ul>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>


                            </ul>
                       </div>


                        <div className="col">

                        <h5>Fruit and vegetables</h5>
                            <ul>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>
                                <li><Link to="#">SDFGSDJKFGHSDKJLFGHSDF</Link></li>


                            </ul>
                       </div>





                    </div>


                    <div className="copyright mt-3 pb-3 d-flex">


                            <p className="mb-0">Copy rightsadfgsadfgasdfasdfasdfds</p>

                            <ul className="list list-inline ml-auto mb-0">

                                <li className="list-inline-item">

                                    <Link to="#"><FaFacebook /></Link>
                                    

                                </li>

                                                                <li className="list-inline-item">

                                    <Link to="#"><FaTwitter /></Link>
                                    

                                </li>
                                                                <li className="list-inline-item">

                                    <Link to="#"><FaInstagramSquare /></Link>
                                    

                                </li>


                            </ul>
                    </div>
                    
                 </div>



        </footer>



    )




}


export default Footer;