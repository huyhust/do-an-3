import SideBar from "../../Components/SideBar"
import Button from "@mui/material/Button";
import {IoIosMenu} from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import {HiViewGrid} from "react-icons/hi";
import {TfiLayoutGrid4Alt} from "react-icons/tfi";

const Listing = () =>{

    return(

        <>
            <section className="product_Listing_Page">
            <div className="container">
                <div className="productListing d-flex">

                    <SideBar/>

                    <div className="content_right">
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg" className="w-100" style={{borderRadius:'8px'}}/>


                    <div className="showBy mt-3 mb-3 d-flex align-items-center"></div>
                        <div className="d-flex btnWrapper">

                            <Button><IoIosMenu/></Button>
                            <Button><CgMenuGridR/></Button>
                            <Button><HiViewGrid/></Button>
                            <Button><TfiLayoutGrid4Alt/></Button>




                        </div>
                    </div>
                </div>
            </div>
            </section>

 
        </>
    )



}

export default Listing;