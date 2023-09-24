import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between px-10">

            
            <Logo></Logo>
           


            <ul className="flex justify-between text-xl font-bold gap-7">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-500 underline" : ""
              }
            >
              Home
            </NavLink>

          </li>
          <li>
            <NavLink
              to="/Donate"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-500 underline" : ""
              }
            >
              Donation
            </NavLink>

          </li>
          <li>
            <NavLink
              to="/Stastictics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-orange-500 underline" : ""
              }
            >
              Statictics
            </NavLink>

          </li>
        </ul>
            </nav>
         
        </div>
    );
};

export default Navbar;