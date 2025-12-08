import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import InnerImageZoom from 'react-inner-image-zoom';
import { useRef, useState } from 'react';

const ProductZoom = (props) => {

    // Lấy trước 3 ảnh (bạn có thể tăng lên 4, 5…)
    const img1 = props?.images?.[0];
    const img2 = props?.images?.[1];
    const img3 = props?.images?.[2];

    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    };

    return (
        <div className="productZoom">

            {/* SLIDER LỚN */}
            <div className='productZoomBig position-relative mb-3'>
                <div className='badge badge-primary'>{props?.discount}%</div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={false}
                    slidesPerGroup={1}
                    modules={[Navigation]}
                    className="zoomSliderBig"
                    ref={zoomSliderBig}
                >

                    {/* Slide 1 */}
                    {img1 && (
                        <SwiperSlide>
                            <div className='item'>
                                <InnerImageZoom zoomType="hover" zoomScale={1} src={img1} />
                            </div>
                        </SwiperSlide>
                    )}

                    {/* Slide 2 */}
                    {img2 && (
                        <SwiperSlide>
                            <div className='item'>
                                <InnerImageZoom zoomType="hover" zoomScale={1} src={img2} />
                            </div>
                        </SwiperSlide>
                    )}

                    {/* Slide 3 */}
                    {img3 && (
                        <SwiperSlide>
                            <div className='item'>
                                <InnerImageZoom zoomType="hover" zoomScale={1} src={img3} />
                            </div>
                        </SwiperSlide>
                    )}

                </Swiper>
            </div>

            {/* SLIDER THUMBNAIL */}
            <Swiper
                slidesPerView={5}
                spaceBetween={0}
                navigation={true}
                slidesPerGroup={1}
                modules={[Navigation]}
                className="zoomSlider"
                ref={zoomSlider}
            >

                {/* Thumb 1 */}
                {img1 && (
                    <SwiperSlide>
                        <div
                            className={`item ${slideIndex === 0 ? 'item_active' : ''}`}
                            onClick={() => goto(0)}
                        >
                            <img src={img1} className='w-100' />
                        </div>
                    </SwiperSlide>
                )}

                {/* Thumb 2 */}
                {img2 && (
                    <SwiperSlide>
                        <div
                            className={`item ${slideIndex === 1 ? 'item_active' : ''}`}
                            onClick={() => goto(1)}
                        >
                            <img src={img2} className='w-100' />
                        </div>
                    </SwiperSlide>
                )}

                {/* Thumb 3 */}
                {img3 && (
                    <SwiperSlide>
                        <div
                            className={`item ${slideIndex === 2 ? 'item_active' : ''}`}
                            onClick={() => goto(2)}
                        >
                            <img src={img3} className='w-100' />
                        </div>
                    </SwiperSlide>
                )}

            </Swiper>
        </div>
    );
};

export default ProductZoom;
