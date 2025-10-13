import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";

import Header from "./Components/Header";
import { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  const value = { countryList, setCountryList };
  return (

    <BrowserRouter>
    <MyContext.Provider>
      <Header/>

      <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/" exact={true} element={<Header/>}/>

      </Routes>
      </MyContext.Provider>
    </BrowserRouter>
   
  );
}

export default App;
