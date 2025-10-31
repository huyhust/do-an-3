import React from "react";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.png";

import banner2 from "../../assets/images/banner2.png"
import Button from "@mui/material/Button";
import { IoMdArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HomeCat from "../../Components/HomeCat"
import banner3 from "../../assets/images/banner3.png";
import banner4 from "../../assets/images/banner4.png";
import ProductItem from "../../Components/ProductItem";
import newsLetterImg from "../../assets/images/coupon.png"
import { IoMailOutline } from "react-icons/io5";




const Home = () => {
  return (
    <>


      <HomeBanner/>
      <HomeCat/>



      <section className="homeProducts">
        <div className="container">

          <div className="row">
            <div className="col-md-3">



              <div className="sticky">

                 <div className="banner">
              <img src={banner1} className="cursor w-100" alt="banner" />

              </div>


              
               <div className="banner mt-4">
              <img src={banner2} className="cursor w-100" alt="banner" />

              </div>


              </div>

              


            </div>


            

            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center justify-content-between">
                <div className="info w-75">
                  <h3 className="mb-0 hd">Best sellers</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of March
                  </p>
                </div>
                <Button className="viewAllBtn">
                  View All <IoMdArrowForward className="ml-2" />
                </Button>
              </div>

              <div className="product_row w-100 mt-3">
                <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={4}
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
    >
      <SwiperSlide >


        <ProductItem/>
      </SwiperSlide>

            <SwiperSlide >


        <ProductItem/>
      </SwiperSlide>

            <SwiperSlide >


        <ProductItem/>
      </SwiperSlide>

            <SwiperSlide >


        <ProductItem/>
      </SwiperSlide>

            <SwiperSlide >


        <ProductItem/>
      </SwiperSlide>

            <SwiperSlide >


        <ProductItem/>
      </SwiperSlide>






     


    </Swiper>
              </div>


                            <div className="d-flex align-items-center justify-content-between">
                <div className="info w-75">
                  <h3 className="mb-0 hd">Best sellers</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of March
                  </p>
                </div>
                <Button className="viewAllBtn">
                  View All <IoMdArrowForward className="ml-2" />
                </Button>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex">
                  <ProductItem/>
                   <ProductItem/>
                    <ProductItem/>
                     <ProductItem/>
                      <ProductItem/>
                       <ProductItem/>
                        <ProductItem/>
                         <ProductItem/>
              </div>

              <div className="d-flex mt-4 mb-5 bannerSec">

                               <div className="banner">
              <img src={banner3} className="cursor w-100" alt="banner" />

              </div>

                <div className="banner">
              <img src={banner4} className="cursor w-100" alt="banner" />

              </div>


              

              </div>


            </div>

            

            


            

          </div>
        </div>
      </section>

      <section className="newsLetterSection  mt-3 mb-3 d-flex align-items-center">
          <div className="container">

            <div className="row">

        <div className="col-md-6">

          <p className="text-white mb-1">$20 discount for your first order</p>
          <h3 className="text-white">Join our newsletter and get..</h3>
          <p className="text-light"> Join our email subscription 
            
            
            <br/>now to get updates on promotions and coupons</p>


            <form>

              <IoMailOutline/>
              <input type="text" placeholder="Your email address"/>

              <Button> Subscribe   </Button>






            </form>

          
        </div>

               <div className="col-md-6">
                <img src={newsLetterImg}/>

          
        </div>


                </div>

          </div>
        </section>

      
    </>
  );
};

export default Home;
