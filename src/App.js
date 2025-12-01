import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductModal from "./Components/ProductModal";

import { createContext, useEffect, useState } from "react";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpenProductModal, setisOpenProductModal] = useState(false);

  // Fetch API
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      const res = await axios.get(url);
      setCountryList(res.data.data);
    } catch (error) {
      console.error("Lỗi khi fetch country:", error);
    }
  };

  const values = {
    countryList,
    selectedCountry,
    setSelectedCountry,
    isOpenProductModal,
    setisOpenProductModal,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat/:id" element={<Listing />} />
        </Routes>

        <Footer />

        {isOpenProductModal && <ProductModal />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
