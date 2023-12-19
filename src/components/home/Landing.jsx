import LazyImg from "../LazyImg";
import banner from "../../assets/banner.png";
import user from "../../assets/Avatar.png";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className=" overflow-hidden flex gap-5 max-[1024px]:flex-col">
      <div className="flex-[1.3] relative">
        <LazyImg
          src={banner}
          style=" w-full object-cover rounded-md"
          alt="e-commerce/jpg"
        />
        <Link
          to="/shop"
          className="absolute max-[768px]:bottom-7 max-[768px]:left-7 bottom-14 left-14  block text-colorBlue bg-white py-2 px-5 w-fit rounded-md hover:bg-colorBlue hover:text-white transition-[0.3s]"
        >
          Shop Now
        </Link>
      </div>

      <div className="bg-colorBlurBlue rounded-md flex flex-col justify-center flex-[.5] p-5">
        <div className="flex flex-col gap-5 mb-5">
          <LazyImg src={user} alt="avatar" style="w-16 m-auto" />
          <h4 className="text-center">
            Hi <br /> Let's get started
          </h4>
        </div>
        <div className="flex flex-col gap-5">
          <Link
            to="/sign-in"
            className="block text-center text-white bg-colorBlue py-2 px-5 w-full rounded-md"
          >
            Join Now
          </Link>
          <Link
            to="log-in"
            className="block text-center text-colorBlue bg-white py-2 px-5 w-full rounded-md hover:bg-colorBlue hover:text-white transition-[0.3s]"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
