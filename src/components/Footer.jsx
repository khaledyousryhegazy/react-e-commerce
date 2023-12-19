import {
  faGithub,
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="my-10 py-5 flex flex-col items-center gap-5">
      <div className="flex gap-3 text-colorDark">
        <a href="https://github.com/khaledyousryhegazy" target="blank">
          <FontAwesomeIcon
            className="text-xl cursor-pointer hover:text-colorBlue transition-[0.3s]"
            icon={faGithub}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/khalid-yousry-a35b15234/"
          target="blank"
        >
          <FontAwesomeIcon
            className="text-xl cursor-pointer hover:text-colorBlue transition-[0.3s]"
            icon={faLinkedin}
          />
        </a>
        <a href="https://www.facebook.com/khalid.usry" target="blank">
          <FontAwesomeIcon
            className="text-xl cursor-pointer hover:text-colorBlue transition-[0.3s]"
            icon={faSquareFacebook}
          />
        </a>
        <a href="https://www.instagram.com/khaledyousry_21/" target="blank">
          <FontAwesomeIcon
            className="text-xl cursor-pointer hover:text-colorBlue transition-[0.3s]"
            icon={faSquareInstagram}
          />
        </a>
      </div>
      <div>
        <h3 className="text-sm font-semibold  text-colorDark">
          &copy; 2023 KHALED YOUSRY , All Rights Reserved
        </h3>
      </div>
    </div>
  );
}

export default Footer;
