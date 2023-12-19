import { NavLink } from "react-router-dom";
import { headerLinks } from "../../data/data";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBasketShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";
import { useRef } from "react";
import Toggle from "../toggle/Toggle";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  const ref = useRef();

  const show_hide = () => {
    ref.current.classList.toggle(styles.show_hide);
  };

  return (
    <div className="bg-colorWhite text-colorDark fixed top-0 left-0 w-full z-10">
      <div className="p-3 container m-auto flex items-center justify-between">
        <div className="flex items-center flex-row-reverse gap-5">
          <Logo />

          <FontAwesomeIcon
            icon={faBars}
            className={`${styles.open_btn} md:hidden text-xl cursor-pointer`}
            onClick={show_hide}
          />
        </div>
        {/* Links */}
        <div>
          <ul
            ref={ref}
            className={`${styles.mobile_nav} flex gap-3 capitalize text-[15px] items-center max-[768px]:shadow-lg shadow-gray-200`}
          >
            {headerLinks?.map((link) => {
              return (
                <li
                  key={link.id}
                  className="hover:text-colorBlue max-[768px]:w-full max-[768px]:hover:pl-2 transition-[0.3s]"
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "text-colorBlue underline" : ""
                    }
                    onClick={show_hide}
                  >
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 cursor-pointer">
          <NavLink
            to="/log-in"
            className={({ isActive }) =>
              isActive ? "text-colorBlue underline" : ""
            }
          >
            <FontAwesomeIcon
              className="hover:text-colorBlue transition duration-200"
              icon={faUser}
            />
          </NavLink>

          <NavLink
            to="/wishlist"
            className={`${({ isActive }) =>
              isActive ? "text-colorBlue underline " : ""} relative`}
          >
            <FontAwesomeIcon
              className="hover:text-colorBlue transition duration-200"
              icon={faHeart}
            />

            {wishlist?.length > 0 && (
              <span className="w-2 h-2 bg-colorBlue rounded-full absolute top-[-3px] right-[-3px]"></span>
            )}
          </NavLink>

          <NavLink
            to="/cart"
            className={`${({ isActive }) =>
              isActive ? "text-colorBlue underline " : ""} relative`}
          >
            <FontAwesomeIcon
              className="hover:text-colorBlue transition duration-200"
              icon={faBasketShopping}
            />
            {cart?.length > 0 && (
              <span className="w-2 h-2 bg-colorBlue rounded-full absolute top-[-3px] right-[-3px]"></span>
            )}
          </NavLink>

          <Toggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
