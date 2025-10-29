import React from "react";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.png";
import Button from "@mui/material/Button";
import { IoMdArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductItem from "../../Components/ProductItem";

const Home = () => {
  return (
    <>
      <HomeBanner />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={banner1} className="cursor w-100" alt="banner" />
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

              <div className="product_rom w-100 mt-6">
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

              <div className="product_rom w-100 mt-6">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
