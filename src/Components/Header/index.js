
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import  Button  from '@mui/material/Button';
import CountryDropdown from '../CountryDropdown';
import SearchBox  from "./SearchBox";
import { FiUser } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoBagOutline } from "react-icons/io5";
import Navigation from "./Navigation";


const Header = () =>{
    return(
     
        <div className="headerWrapper"> 
            <div className="top-strip bg-blue">
                <div className="container">

                    <p className="mb-0 mt-0 text-center">Due to the <b>Covid 19</b> epidemic, orders my be processed with a slight delay    </p>

                </div>
                
                
            </div>
            
            <header className="header ">

                <div className= "container">
                    <div className="row">

                        <div className="logoWrapper d-flex align-items-center col-sm-2">

                            <Link to={'/'}><img src={Logo} alt="Logo"/></Link>
                        </div>

                        <div className="col-sm-10 d-flex align-items-center part2">

                          <CountryDropdown/>
           
                        <SearchBox/>

                          <div className="part3 d-flex align-items-center ml-auto justify-content-between">

                            <Button className="circle mr-3"> <FiUser/> </Button>
                            <div className='ml-auto cartTab d-flex align-items-center justify-content-between'>

                                <span className='price'> $3.19</span>
                                <div className="position-relative ml-2">
                                     <Button className='circle ml-3'><IoBagOutline /></Button>

                                     <span className="count d-flex align-items-center justify-content-center">1</span>

                                </div>
                               
                                
                            </div>
                          
                          </div>

                        </div>
                    </div>
                </div>

            </header>


            <Navigation/>
           
            </div>
        
        
        
    )
}

export default Header;