import Dialog from '@mui/material/Dialog';
import {MdClose} from "react-icons/md";
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import {useContext, useRef} from "react";
import InnerImageZoom from 'react-inner-image-zoom';
import '../../assets/css/styles.css';

import QuantityBox  from '../QuantityBox';

import {IoIosHeartEmpty} from "react-icons/io";
import { FaCodeCompare } from "react-icons/fa6";
import { MyContext } from '../../App';



const ProductModal = (props) =>{

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();
    const context = useContext(MyContext);

    var settings ={

        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true

    }

    var settings2 = {

        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    }

    const goto = (index) => {


        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }

    return (

        <>
            <Dialog open={true} className='productModal' onClose={()=> context.setisOpenProductModal(false)}>



                    <Button className='close_' onClick={()=> context.setisOpenProductModal(false)}><MdClose/></Button>
                    <h4 className="mb-1 font-weight-bold">All Natural Italia</h4> 
                    <div className='d-flex align-items-center'>
                        <div className='d-flex align-items-center mr-4'>
                            <span>Brands:</span>
                             <span className='ml-2'>Wech's</span>

                        </div>

                        <Rating name='read-only' value={5} size='small' precision={0.5} readOnly/>

                       

                    </div>

                     <hr/>
                    <div className='row mt-2 productDetailModal mt-2'>

                        <div className='col-md-5'>

                            <div className='productZoom position-relative'>

                                <div className='badge badge-primary'>23%</div>

                                <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}

                                    />

                                </div>

                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}

                                    />

                                </div>

                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}

                                    />

                                </div>
                                
                                </Slider>



                            </div>

                            <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                                
                                     <div className='item'>
                                                <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className='w-100' onClick={() => goto (0)}/>
                                                
                                                

                                            </div>

                                     <div className='item'>
                                                <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className='w-100' onClick={() => goto (1)}/>
                                                
                                                

                                            </div>


                                     <div className='item'>
                                                <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className='w-100' onClick={() => goto (2)}/>
                                                
                                                

                                            </div>

                                        


                                
                                            
                                
                            </Slider>

                        </div>

                        
                        <div className='col-md-7'>
                            <div className='d-flex info align-items-center mb-4'>

                                <span className='oldPrice lg mr-2'>$9.4</span>
                                <span className='netPrice text-danger lg'>$9.5</span>
                            </div>


                            <span className='badge bg-success'>In stock</span>

                            <p className='mt-3'>asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasd</p>
                        
                            <div className='d-flex align-items-center'>
                               <QuantityBox/>
                               <Button className='btn-blue btn-lg btn-big btn-round'>Addto Cart</Button>

                            </div>

                            <div className='d-flex align-items-center mt-4 actions'>

                                <Button className='btn-round btn-sml' variant='outlined'><IoIosHeartEmpty/>djt me em</Button>
                                 <Button className='btn-round btn-sml' variant='outlined'><FaCodeCompare />compare</Button>


                            </div>

                            
                        </div>

                    </div>




            </Dialog>
        
        
        
        </>


    )
}

export default ProductModal