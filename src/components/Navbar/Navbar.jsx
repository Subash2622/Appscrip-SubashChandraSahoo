import "./Navbar.css";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DiscountIcon from "@mui/icons-material/Discount";
import SupportIcon from "@mui/icons-material/Support";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
const Navbar = () => {
  return (
    <>
      <header>
      {/*header top section */}
        <section className="top-header">
          <li className="top-header-content">
            <DeliveryDiningIcon />
            <p>Free Delivery</p>
          </li>
          <li className="top-header-content">
            <DiscountIcon />
            <p>upto 40%off</p>
          </li>
          <li className="top-header-content">
            <SupportIcon />
            <p>7*24 support</p>
          </li>
        </section>

        {/* header middle section */}
        <section className="mid-header">
        <div className="menu-icon">
            <DensityMediumIcon/>
        </div>
            <div className="header-logo">
                <FilterVintageOutlinedIcon fontSize="large"/>
            </div>
            <div className="logo-text">LOGO</div>
            <div className="header-items">
                <ul>
                    <li><SearchIcon/></li>
                    <li><FavoriteBorderIcon/></li>
                    <li><LocalMallOutlinedIcon/></li>
                    <li><PersonOutlineOutlinedIcon/></li>
                    <li><span>ENG</span> <KeyboardArrowDownOutlinedIcon/></li>
                </ul>
            </div>
        </section>
        {/* header tabs */}
        <section className="header-tabs">
            <ul>
                <li>shop</li>
                <li>skills</li>
                <li>stories</li>
                <li>about</li>
                <li>contact us</li>
            </ul>
        </section>
      </header>
    </>
  );
};

export default Navbar;
