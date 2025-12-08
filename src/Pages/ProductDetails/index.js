
import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import Button from "@mui/material/Button";
import { BsCartFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { IoCart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
// import RelatedProducts from "./RelatedProducts";
import { MdCompareArrows } from "react-icons/md";

import { useParams } from "react-router-dom";
import { fetchDataFromApi, postData } from "../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import { MyContext } from "../../App";

const ProductDetails = () =>{
    const sizes = ["50g","100g","200g","300g","500g"];

  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(0);
  const [productData, setProductData] = useState([]);
  const [relatedProductData, setRelatedProductData] = useState([]);
  const [recentlyViewdProducts, setRecentlyViewdProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reviewsData, setreviewsData] = useState([]);
  const [isAddedToMyList, setSsAddedToMyList] = useState(false);

  let [cartFields, setCartFields] = useState({});
  let [productQuantity, setProductQuantity] = useState();
  const [tabError, setTabError] = useState(false);

  const { id } = useParams();

  const context = useContext(MyContext);

  const isActive = (index) => {
    setActiveSize(index);

  };

    const demoImages = [
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
    ];
    return(

        

        <>
            <section className="productDetails section">
                <div className="container">

                    <h2 className="hd">All natural Italian-style chicken meatballs</h2>
                    <div className="row">
                        <div className="col-md-4 pl-5 pr-5">

                   <ProductZoom 
                            images={demoImages}
                            discount={23}
                        />
                  
                

                        </div>

                        <div className="col-md-7 pl-5">
                            <h2 className="hd text-capitalize">All natural itaian-style chicken meatballs</h2>

                            <ul className="list-inline">

    <li className="list-inline-item">
        <div className="d-flex align-items-center">
            <span className="text-light mr-2">Brand:</span>
            <span>Welch's</span>
        </div>
    </li>

    <li className="list-inline-item">
        <div className="d-flex align-items-center">
            <Rating
                name="read-only"
                value={4.5}
                precision={0.5}
                readOnly
                size="small"
            />
            <span className="text-light cursor ml-2">1 Review</span>
        </div>
    </li>

    {/* <li className="list-inline-item">
        <div className="d-flex align-items-center">
            <span className="text-light mr-2">Brand:</span>
            <span>Welch's</span>
        </div>
    </li> */}

</ul>

<div classs="d-flex info mb-4">
        <span class="oldPrice">$20.00</span>
        <span class="netPrice text-danger ml-2">$14.00</span>
</div>
<span className="badge badge-success">IN STOCK</span>
<p className="mt-3"> ádfgasdfasdfsadfsdfasdfasdfasdfasdf</p>

<div className=" productSize d-flex align-items-center"> 
    <span>Size/ weight</span>

     <ul className="list-inline-item mb-0 pl-4">
  {sizes.map((size, index) => (
    <li className="list-inline-item" key={index}>
      <a
        className={`tag ${activeSize === index ? 'active' : ''}`}
        onClick={() => isActive(index)}
      >
        {size}
      </a>
    </li>
  ))}
</ul>

</div>
 
<div className="d-flex align-items-center mt-3">
        <QuantityBox/>
        <Button className="btn-blue btn-lg btn-big btn-round">
         <IoCart />&nbsp; Add to cart 
        </Button>
        
        <Tooltip title="Add to wishlist" placement="top">
            <Button className="btn-blue btn-lg btn-big btn-circle ml-4">

                <FaRegHeart/>
            </Button>
        </Tooltip>

                <Tooltip title="Add to compare" placement="top">
            <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
      <MdCompareArrows />
            </Button>
        </Tooltip>

  

</div>



                         
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default ProductDetails;