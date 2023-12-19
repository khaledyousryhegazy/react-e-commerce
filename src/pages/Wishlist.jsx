import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlist } from "../toolkit/slices/wishlistSlice";
import LazyImg from "../components/LazyImg";
import { Link } from "react-router-dom";
import { addCart } from "../toolkit/slices/cartSlice";
import DataEmpty from "../components/DataEmpty";

function Wishlist() {
  const data = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-10 min-h-screen  text-colorDark">
      {/* product */}
      <h1 className="main_title mt-5">My Wishlist : {`(${data?.length})`}</h1>
      {data?.length > 0 ? (
        <div className="border flex flex-col gap-5 p-3 rounded-md">
          {data?.map((pro) => {
            return (
              <div key={pro?.id}>
                <div className="flex gap-3 items-center max-[576px]:flex-col">
                  <Link to={`/product/${pro?.id}`}>
                    <LazyImg
                      src={pro?.imageCover}
                      style="w-32 h-32 object-cover m-auto"
                      alt={pro?.title}
                    />
                  </Link>
                  <div className="flex flex-col gap-5 w-full">
                    <div className="flex justify-between items-center">
                      <h1 className=" w-80 whitespace-nowrap overflow-hidden text-ellipsis">
                        {pro?.title}
                      </h1>
                      {pro?.priceAfterDiscount ? (
                        <div className="flex gap-3  ">
                          Price
                          <span className="line-through ">{pro?.price} LE</span>
                          -
                          <span className="text-colorBlue font-semibold">
                            {pro?.priceAfterDiscount} LE
                          </span>
                        </div>
                      ) : (
                        <span className="text-colorBlue font-semibold">
                          {pro?.price} LE
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => {
                          dispatch(addCart(pro));
                        }}
                        className="bg-colorBlurBlue text-sm rounded-md text-colorBlue capitalize hover:text-colorWhite hover:bg-colorBlue transition-[.3s] py-[7px] px-2 w-fit"
                      >
                        add to cart
                      </button>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="cursor-pointer text-red-600 text-xl"
                        onClick={() => {
                          dispatch(removeWishlist(pro));
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <DataEmpty pageName="Wishlist" />
      )}
    </div>
  );
}

export default Wishlist;
