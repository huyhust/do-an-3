import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from 'react';

import { FaAngleRight } from "react-icons/fa";

const Navigation = () => {
  const [isopenSidebarVal, setisopenSidebarVal] = useState(true);

  return (
    <nav>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Cột trái - nút mở danh mục */}
          <div className="col-sm-2 navPart1 d-flex align-items-center">

            <div className='catWrapper'>
                <Button  className="allCatTab d-flex align-items-center"  onClick={() => setisopenSidebarVal(!isopenSidebarVal)}>  
               
                  <span className="icon1 mr-2"><IoIosMenu /></span>
                  <span className="text">All categories</span>
                  <span className="icon2 ml-2"><FaAngleDown /></span>
                    
                    
              
                </Button>
             

                      <div className={`sidebarNav ${isopenSidebarVal === true ? 'open': ' '}`}>


                          <ul>
                              <li><Link to="/"><Button>Fashion  <FaAngleRight className='ml-auto'/></Button>
                               
                              </Link>
                                  <div className="submenu shadow">
                                    <Link to="/"><Button>Heheh</Button></Link>
                                    <Link to="/"><Button>Accessories</Button></Link>
                                    <Link to="/"><Button>Men</Button></Link>
                                    <Link to="/"><Button>Women</Button></Link>
                                  </div>
                              
                              
                              
                              
                              
                              </li>
                              <li><Link to="/"><Button>Accessories</Button></Link>
                                  <div className="submenu shadow">
                                    <Link to="/"><Button>Heheh</Button></Link>
                                    <Link to="/"><Button>Accessories</Button></Link>
                                    <Link to="/"><Button>Men</Button></Link>
                                    <Link to="/"><Button>Women</Button></Link>
                                  </div>
                              
                              
                              </li>
                              <li><Link to="/"><Button>Fashion</Button></Link>
                                                                <div className="submenu shadow">
                                    <Link to="/"><Button>Heheh</Button></Link>
                                    <Link to="/"><Button>Accessories</Button></Link>
                                    <Link to="/"><Button>Men</Button></Link>
                                    <Link to="/"><Button>Women</Button></Link>
                                  </div>
                              
                              
                              
                              
                              </li>
                              <li><Link to="/"><Button>Fashion</Button></Link>
                                                                <div className="submenu shadow">
                                    <Link to="/"><Button>Heheh</Button></Link>
                                    <Link to="/"><Button>Accessories</Button></Link>
                                    <Link to="/"><Button>Men</Button></Link>
                                    <Link to="/"><Button>Women</Button></Link>
                                  </div>
                              </li>
                              <li><Link to="/"><Button>Accessories</Button></Link>
                              
                                                                  <div className="submenu shadow">
                                    <Link to="/"><Button>Heheh</Button></Link>
                                    <Link to="/"><Button>Accessories</Button></Link>
                                    <Link to="/"><Button>Men</Button></Link>
                                    <Link to="/"><Button>Women</Button></Link>
                                  </div>
                              </li>
                              <li><Link to="/"><Button>Fashion</Button></Link>
                                                                  <div className="submenu shadow">
                                    <Link to="/"><Button>Heheh</Button></Link>
                                    <Link to="/"><Button>Accessories</Button></Link>
                                    <Link to="/"><Button>Men</Button></Link>
                                    <Link to="/"><Button>Women</Button></Link>
                                  </div>
                              
                              </li>
                              <li><Link to="/"><Button>Fashion</Button></Link>
                              
                                                                    <div className="submenu shadow">
                                    <Link to="/"><Button>Heheh</Button></Link>
                                    <Link to="/"><Button>Accessories</Button></Link>
                                    <Link to="/"><Button>Men</Button></Link>
                                    <Link to="/"><Button>Women</Button></Link>
                                  </div>
                              
                              </li>
                              <li><Link to="/"><Button>Accessories</Button></Link>
                              
                                                                    <div className="submenu shadow">
                                    <Link to="/"><Button>Heheh</Button></Link>
                                    <Link to="/"><Button>Accessories</Button></Link>
                                    <Link to="/"><Button>Men</Button></Link>
                                    <Link to="/"><Button>Women</Button></Link>
                                  </div>
                              
                              </li>
                              <li><Link to="/"><Button>Fashion</Button></Link>
                              
                                                                    <div className="submenu shadow">
                                    <Link to="/"><Button>Heheh</Button></Link>
                                    <Link to="/"><Button>Accessories</Button></Link>
                                    <Link to="/"><Button>Men</Button></Link>
                                    <Link to="/"><Button>Women</Button></Link>
                                  </div>
                              
                              
                              </li>


                          </ul>


                      </div>

            </div>
          
          </div>

          {/* Cột phải - menu */}
          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline mb-0 d-flex align-items-center ml-auto">
              <li className="list-inline-item"><Link to="/"><Button>Home</Button></Link> 
                
              </li>
              <li className="list-inline-item"><Link to="/"><Button>Fashion</Button></Link>
              
                <div className="submenu shadow">
                  <Link to="/"><Button>Fashion</Button></Link>
                  <Link to="/"><Button>Accessories</Button></Link>
                  <Link to="/"><Button>Men</Button></Link>
                  <Link to="/"><Button>Women</Button></Link>
                </div>

              </li>
              <li className="list-inline-item"><Link to="/"><Button>Electronic</Button></Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Fashion</Button></Link>
                  <Link to="/"><Button>Accessories</Button></Link>
                  <Link to="/"><Button>Men</Button></Link>
                  <Link to="/"><Button>Women</Button></Link>
                </div>
              </li>
              <li className="list-inline-item"><Link to="/"><Button>Bakery</Button></Link>
                  <div className="submenu shadow">
                  <Link to="/"><Button>Fashion</Button></Link>
                  <Link to="/"><Button>Accessories</Button></Link>
                  <Link to="/"><Button>Men</Button></Link>
                  <Link to="/"><Button>Women</Button></Link>
                </div>
              
              </li>
              <li className="list-inline-item"><Link to="/"><Button>Grocery</Button></Link>
                  <div className="submenu shadow">
                  <Link to="/"><Button>Fashion</Button></Link>
                  <Link to="/"><Button>Accessories</Button></Link>
                  <Link to="/"><Button>Men</Button></Link>
                  <Link to="/"><Button>Women</Button></Link>
                </div>
              
              
              </li>
              <li className="list-inline-item"><Link to="/"><Button>Blog</Button></Link>
              
                              <div className="submenu shadow">
                  <Link to="/"><Button>Fashion</Button></Link>
                  <Link to="/"><Button>Accessories</Button></Link>
                  <Link to="/"><Button>Men</Button></Link>
                  <Link to="/"><Button>Women</Button></Link>
                </div>
              
              </li>
              <li className="list-inline-item"><Link to="/"><Button>Contact</Button></Link>
              
                              <div className="submenu shadow">
                  <Link to="/"><Button>Fashion</Button></Link>
                  <Link to="/"><Button>Accessories</Button></Link>
                  <Link to="/"><Button>Men</Button></Link>
                  <Link to="/"><Button>Women</Button></Link>
                </div>
              
              </li>
            </ul>
          </div>

        </div>


      </div>
    </nav>
  );
};

export default Navigation;
