import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import { Slide } from '@mui/material';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
}
);
const CountryDropdown= () => {

    const [isOpenModal,setisOpenModal]=useState(false);


    return(
       
        <>
         <Button className="countryDrop" onClick={()=>setisOpenModal(true)}>
             
            <div className="info d-flex flex-column">
                <span className='lable'>Your location</span>
                <span className='name'>India</span>
            </div>
            <span className='ml-auto'><FaAngleDown /></span>
        </Button>

        <Dialog open={isOpenModal}onClose={() => setisOpenModal(false)} className='locationModal' slots={{
          transition: Transition,
        }}>
            <h4 className='mb-0'>Choose your delivery Location</h4>
            <p>Enter your address and we will specify the offer for your area</p>
            <Button className='close_' onClick={()=>setisOpenModal(false)}><MdClose/></Button>
           

            

            <div className="headerSearch w-100">
                            
            <input type="text" placeholder="Search for products..."/>

            <Button> <IoIosSearch /> </Button>

             </div>

             <ul className='countryList mt-3'>

                    <li><Button onClick={()=> setisOpenModal(false)}>Delhi</Button></li>
                    <li><Button onClick={()=> setisOpenModal(false)}>Sri lanka</Button></li>
                    <li><Button onClick={()=> setisOpenModal(false)}>Viet Nam</Button></li> 
                    <li><Button onClick={()=> setisOpenModal(false)}>Javan</Button></li>
                    <li><Button onClick={()=> setisOpenModal(false)}>Delhi</Button></li>
                    <li><Button onClick={()=> setisOpenModal(false)}>Sri lanka</Button></li>
                    <li><Button onClick={()=> setisOpenModal(false)}>Viet Nam</Button></li>
                    <li><Button onClick={()=> setisOpenModal(false)}>Javan</Button></li>
                    <li><Button onClick={()=> setisOpenModal(false)}>Delhi</Button></li>
                    <li><Button onClick={()=> setisOpenModal(false)}>Sri lanka</Button></li>
                    <li><Button onClick={()=> setisOpenModal(false)}>Viet Nam</Button></li>
                    <li><Button onClick={()=> setisOpenModal(false)}>Javan</Button></li>
                    
             </ul>

        </Dialog>

        </>

    )

}

export default CountryDropdown;