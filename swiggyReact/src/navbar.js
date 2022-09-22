import {NavLink, Link } from "react-router-dom";
import {FaHome,FaUser} from "react-icons/fa"
import {BsListCheck} from "react-icons/bs";

const Layout = () => {
    const navStyles=({isActive})=>
    {
        console.log(isActive);
        return{
            fontWeight :isActive? "bold":"normal",
        }
    }
  return (
    <>
      <nav>
            <NavLink to="/"  style={navStyles}><FaHome/> Home</NavLink>
            <NavLink to="/profile"  style={navStyles}><FaUser/> Profile</NavLink>
            <NavLink to="/logout" style={navStyles}> LogOut</NavLink>
      
      </nav>
    </>
  )
};

export default Layout;