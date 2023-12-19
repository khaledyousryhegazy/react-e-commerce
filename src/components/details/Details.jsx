import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../toolkit/slices/cartSlice";
import { addWishlist } from "../../toolkit/slices/wishlistSlice";

function Details({ item }) {
  const [image, setImage] = useState(item?.imageCover);
  const dispatch = useDispatch();

  return (
    <div className=" text-colorDark">
      <h1 className="main_title mt-10">Product Details</h1>
      {/* Container */}
      <div className="flex gap-10 max-[992px]:flex-col">
        {/* image cover */}
        <div className="flex flex-col gap-5 flex-[.75]">
          <img
            src={image}
            className="rounded-md max-w-[450px] max-h-[450px] object-cover"
            alt={item?.title}
          />
          {/* images */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-5 place-items-center">
            {item?.images.map((img) => {
              return (
                <img
                  key={img}
                  className="w-20 h-20 object-cover cursor-pointer rounded-md"
                  src={img}
                  alt={item?.title}
                  onClick={() => {
                    setImage(img);
                  }}
                />
              );
            })}
          </div>
        </div>
        {/* details */}
        <div className="flex-1 flex-col flex gap-5">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold max-[992px]:text-lg">
              {item?.title}{" "}
            </h1>
            <div className="flex items-center gap-2">
              <span>{item?.ratingsAverage}</span>
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            </div>
          </div>
          {item?.priceAfterDiscount ? (
            <div className="flex gap-3">
              Price
              <span className="line-through"> {item?.price} LE</span>-{" "}
              <span className="text-colorBlue font-semibold">
                {item?.priceAfterDiscount} LE
              </span>
            </div>
          ) : (
            <span className="text-colorBlue font-semibold">
              {item?.price} LE
            </span>
          )}
          {/* About product */}
          <p className="text-md opacity-60 "> {item?.description}</p>
          {/* Sold times */}
          <div className="flex justify-between max-[992px]:flex-col">
            <div>
              <span className=" opacity-70">Selling Times </span>
              <span className="text-colorBlue text-md font-semibold">
                {item?.sold}
              </span>
            </div>
            <div>
              <span className=" opacity-70"> Remaining Quantity </span>
              <span className="text-colorBlue text-md font-semibold">
                {item?.quantity}
              </span>
            </div>
          </div>
          {/* Add to cart quantity */}
          <div className="flex gap-5 max-[768px]:flex-col">
            <button
              onClick={() => {
                dispatch(addCart(item));
              }}
              className="bg-colorBlurBlue rounded-md text-colorBlue capitalize hover:text-colorWhite hover:bg-colorBlue transition-[.3s] py-2 px-5 w-full"
            >
              add to cart
            </button>

            <button
              onClick={() => {
                dispatch(addWishlist(item));
              }}
              className="bg-colorBlurBlue rounded-md text-colorBlue capitalize hover:text-colorWhite hover:bg-colorBlue transition-[.3s] py-2 px-5 w-full"
            >
              add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
