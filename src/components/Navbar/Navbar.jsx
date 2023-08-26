import React, { useState } from "react";
import Logo from "../../assets/images/deleteme.png";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Navbar() {

  const [color,setColor]=useState(false);
  const changeColor=()=>{
    if(window.scrollY>=90){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener('scroll',changeColor)
  return (
    <div className={`${color?"bg-custom-black " : "bg-transparent"} flex  justify-between items-center px-6 py-1 text-custom-white   w-full fixed  transition duration-300`} >
      <div>
        <img className="h-10" src={Logo} alt="" />
      </div>
      <div className="flex  flex-row ">
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/">
          Home
        </Link>
        <span className="links  ">
          <SearchIcon></SearchIcon>
        </span>
        <span className="links">
          <NotificationsIcon></NotificationsIcon>
        </span>
        <div className="links ">
          <div className="dropdown ">
            <div className=" group">
              <div className="flex items-center justify-center ">
                <button>
                  <ArrowDropDownIcon></ArrowDropDownIcon>
                </button>
              </div>

              <div
                className="options group-hover:block hidden p-1 rounded-sm bg-custom-black absolute     "
                id="list"
              >
                <div className="py-3  text-sm  ">
                  <Link to="/">Home</Link>
               <div>   <Link to="/">Home</Link> </div>
               <div>   <Link to="/">Home</Link> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
