import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { useState } from "react";
import {Link} from 'react-router-dom';
const SideBar = () => {
  const [value, setValue] = useState([100, 60000]);

  return (
    <>
      <div className="sidebar">
        <div className="filterBox">
          <h6>Product Categories</h6>

          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Men" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Women" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Men" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Women" />
              </li>
            </ul>
          </div>
        </div>

        <div className="filterBox">
          <h6>Filter by price</h6>

          <Slider
            range
            min={100}
            max={60000}
            step={5}
            value={value}
            onChange={(val) => setValue(val)}
          />

          <div className="d-flex pt-2 pb-2 priceRange">
            <span>
              From: <strong className="text-success">Rs: {value[0]}</strong>
            </span>
            <span className="ml-auto">
              To: <strong className="text-success">Rs: {value[1]}</strong>
            </span>
          </div>
        </div>


                <div className="filterBox">
          <h6>Product Categories</h6>

          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Men" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Women" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Men" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Women" />
              </li>
            </ul>
          </div>

        </div>

        <br/>

        <Link to="#"><img src="http://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" className="w-100"/> </Link>


      </div>
    </>
  );
};

export default SideBar;
