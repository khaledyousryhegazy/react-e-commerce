import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import LazyImg from "../LazyImg";

function Logo() {
  return (
    <Link to="/">
      <LazyImg style="w-24" src={logo} alt="logo/png" />
    </Link>
  );
}

export default Logo;
