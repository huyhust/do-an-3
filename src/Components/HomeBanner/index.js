import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {


     var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,

    autoplay: true,
  };

    return (
        <div className="container mt-3">
        <div className="homeBannerSection">
        
            <Slider {...settings}>

                <div className="item">
                    <img src="https://www.fahasa.com/media/wysiwyg/Thang-10-2025/TrangT10_web_1920_2510.png" className="w-100"/>


                </div>

                
                <div className="item">
                    <img src="https://www.fahasa.com/media/wysiwyg/Thang-10-2025/TrangT10_web_1920_2510.png" className="w-100"/>


                </div>

                
                <div className="item">
                    <img src="https://www.fahasa.com/media/wysiwyg/Thang-10-2025/TrangT10_web_1920_2510.png" className="w-100"/>


                </div>
                
                <div className="item">
                    <img src="https://www.fahasa.com/media/wysiwyg/Thang-10-2025/TrangT10_web_1920_2510.png" className="w-100"/>


                </div>
            </Slider>
        
        </div>

        </div>   
    )


}

export default HomeBanner;