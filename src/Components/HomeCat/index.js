import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";



const HomeCat = () => {
  const [itemBg] = useState([

    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4"
  ]);

  return (
    <section className="homeCat">
      <div className="container">

        
          <h3 class="mb-4 hd">Feature categories</h3>
        <Swiper
       
          slidesPerView={10}
          spaceBetween={8}
          navigation={true}
          slidesPerGroup={3}
             modules={[Navigation]}
        //   pagination={{ clickable: true }}
        //   autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="mySwiper"
        >
          {itemBg.map((item, index) => {

            return(
            <SwiperSlide >
              <div className="item text-center cursor" style={{ background: item }}>
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
                <h6>Red Apple</h6>
              </div>
            </SwiperSlide>

            )
        })

    }
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
