import Rating from "@mui/material/Rating";
import { TfiFullscreen } from "react-icons/tfi";
import Button from "@mui/material/Button";
import { LuHeart } from "react-icons/lu";
import ProductModal from "../ProductModal";
import { useState, useContext } from "react";
import { MyContext } from "../../App";


const ProductItem = () => {

  const context = useContext(MyContext);


  const [isOpenProductModal, setisOpenProductModal] = useState();
  
  const viewProductDetails=(id)=>{

    context.setisOpenProductModal(true);
  }


  const closeProductModal=()=>{

    context.setisOpenProductModal(false);
  }



    return(
      <>
        <div className="item productItem">
        <div className="imgWrapper">
          <img
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg"
            className="w-100"
            alt="Product 1"
            
          />

          <span className="badge badge-primary">28%</span>

          <div className="actions">

            <Button onClick={()=> viewProductDetails()}>

              <TfiFullscreen/>
            </Button>

              <Button>

              <LuHeart style={{fontSize:'20px'}}/>
            </Button>
          </div>
        </div>

       <div className="info"> 

         <h4>Werther's Original Caramel hard candies</h4>
        <span className="text-success  d-block">In Stock</span>

        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>




        <div className="d-flex">

          <span className="oldPrice">$20.00</span> 
           <span className="netPrice">$16.00</span> 




        </div>

       </div>
        </div>


        {

          isOpenProductModal === true && <ProductModal closeProductModal={closeProductModal}/>
        }


        {/* {<ProductModal/>} */}
        


            
 
      
      </>

    )
}


export default ProductItem;