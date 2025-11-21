import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext,  useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer";
import ProductModal from "./Components/ProductModal";

const MyContext = createContext();

function App() {


  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(''); // Tên hàm setter đã được sửa
  const[isOpenProductModal, setisOpenProductModal] = useState(false);



  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");

  },[]);

  const getCountry=async(url)=>{
    const responsive = await axios.get(url).then((res)=>{

      console.log(res.data.data);
      setCountryList(res.data.data);
    })

  }
const values = {
    countryList,
    setSelectedCountry, // <--- Thêm tên mới này
    selectedCountry,
  isOpenProductModal,
 setisOpenProductModal
  };







  return (

    <BrowserRouter>
    <MyContext.Provider value={values}>
      <Header/>

      <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/" exact={true} element={<Header/>}/>

      </Routes>

        <Footer/>
        {
          isOpenProductModal === true && <ProductModal/>
        }
      </MyContext.Provider>
    </BrowserRouter>
   
  );
}

export default App;

export {MyContext};
