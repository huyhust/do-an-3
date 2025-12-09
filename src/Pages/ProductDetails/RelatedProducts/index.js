import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import ProductItem from "../../../Components/ProductItem";
import { MyContext } from "../../../App";

const RelatedProducts = (props) => {
    const context = useContext(MyContext);

    return (
        <div>
            <div className="d-flex align-items-center">
                <div className="info w-75">
                    <h3 className="mb-0 hd">Best sellers</h3>
                </div>
            </div>

            <div className="product_row w-100 mt-2">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={6}
                    spaceBetween={10}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                >
                    {[...Array(6)].map((_, i) => (
                        <SwiperSlide key={i}>
                            <ProductItem />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default RelatedProducts;
