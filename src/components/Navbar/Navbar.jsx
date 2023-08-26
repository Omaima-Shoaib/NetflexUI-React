import React from "react";
import Logo from "../../assets/images/deleteme.png";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Navbar() {
  return (
    <div className="flex  justify-between items-center px-6 py-1 bg-custom-black text-custom-white   w-full fixed">
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
                <button onClick={displayList}>
                  <ArrowDropDownIcon></ArrowDropDownIcon>
                </button>
              </div>

              <div
                className="options group-hover:block hidden p-1 rounded-sm bg-custom-black absolute     "
                id="list"
              >
                <div className="py-3  text-sm  ">
                  
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
const displayList = () => {
  let options = document.getElementById("list");
  console.log(options);
};
