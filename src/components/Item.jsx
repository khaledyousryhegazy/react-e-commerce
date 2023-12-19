import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LazyImg from "./LazyImg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWishlist } from "../toolkit/slices/wishlistSlice";
import { addCart } from "../toolkit/slices/cartSlice";

function Item({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="rounded-md  border-[2px] border-colorBlurBlue hover:border-colorBlue transition-[.5s] p-2">
      {/* image */}
      <Link className="z-[8]" to={`/product/${item?.id}`}>
        <LazyImg
          src={item?.imageCover}
          style="w-48 h-48 object-cover m-auto "
          alt={item?.title}
        />
      </Link>
      {/* title */}
      <h3
        title={item?.title}
        className="px-3 text-colorDark my-3 whitespace-nowrap overflow-hidden text-ellipsis"
      >
        {item?.title}
      </h3>
      {/* Price and rating */}
      <div className="flex  text-colorDark  justify-between items-center px-3">
        <span>{item?.price} EG</span>
        <span>
          {item?.ratingsAverage}
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 ml-2" />
        </span>
      </div>
      {/* Add to cart */}
      <div className="flex items-center gap-5 mt-5 cursor-default">
        <button
          onClick={() => {
            dispatch(addCart(item));
          }}
          className="bg-colorBlurBlue rounded-md text-colorBlue capitalize hover:text-colorWhite hover:bg-colorBlue transition-[.3s] py-2 px-5 w-full"
        >
          add to cart
        </button>
        <FontAwesomeIcon
          icon={faHeart}
          className="text-3xl z-[5] cursor-pointer text-colorBlurBlue hover:text-colorBlue transition-[.3s]"
          onClick={() => {
            dispatch(addWishlist(item));
          }}
        />
      </div>
    </div>
  );
}

export default Item;
