import  Button  from '@mui/material/Button';
import {IoIosMenu} from "react-icons/io"
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiHome } from 'react-icons/ci';

const Navigation = () => {
    return (

        <nav>
  <div className="container">
    <div className="row align-items-center">  {/* thêm dòng này để căn giữa dọc */}
      
      <div className='col-sm-2 navPart1 d-flex align-items-center'>
        <Button className="allCatTab d-flex align-items-center">
          <span className='icon1 mr-2'><IoIosMenu/></span>
          <span className="text">All categories</span>
          <span className='icon2 ml-2'><FaAngleDown/></span>
        </Button>
      </div>

      <div className="col-sm-10 navPart2 d-flex align-items-center">
        <ul className='list list-inline mb-0 d-flex align-items-center ml-auto'>
          <li className='list-inline-item'><Link to="/"><Button> Home</Button></Link></li>
          <li className='list-inline-item'><Link to="/"><Button>Fashion</Button></Link></li>
          <li className='list-inline-item'><Link to="/"><Button>Electronic</Button></Link></li> 
          <li className='list-inline-item'><Link to="/"><Button>Bakery</Button></Link></li>
          <li className='list-inline-item'><Link to="/"><Button>grocery</Button></Link></li>
          <li className='list-inline-item'><Link to="/"><Button>Blog</Button></Link></li>
          <li className='list-inline-item'><Link to="/"><Button>Contact</Button></Link></li>
          <li className='list-inline-item'><Link to="/"><Button>Contact</Button></Link></li>
          
        </ul>
      </div>

    </div>
  </div>
</nav>




    )

}

export default Navigation;