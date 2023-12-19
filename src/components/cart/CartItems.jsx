import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LazyImg from "../LazyImg";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  addCart,
  clear,
  decrease,
  removeCart,
} from "../../toolkit/slices/cartSlice";
import { addWishlist } from "../../toolkit/slices/wishlistSlice";
import { useDispatch } from "react-redux";

function CartItems({ data }) {
  const dispatch = useDispatch();
  return (
    <div>
      {data?.length > 0 && (
        //   My Cart
        <div className="border flex flex-col gap-5 p-3 rounded-md  text-colorDark">
          {data?.map((pro) => {
            return (
              <div key={pro?.id} className="flex gap-3 max-[576px]:flex-col">
                <LazyImg
                  src={pro?.imageCover}
                  style="w-28 m-auto h-28 object-cover rounded-md"
                  alt={pro?.title}
                />
                {/* info */}
                <div className="w-full flex  flex-col gap-2 justify-center">
                  <div className="flex gap-3 justify-between max-[1024px]:flex-col">
                    <h1 className="w-80 overflow-hidden text-ellipsis whitespace-nowrap">
                      {pro?.title}
                    </h1>
                    {/* Price */}
                    {pro?.priceAfterDiscount ? (
                      <div className="flex gap-3">
                        <span className="line-through">
                          {+pro?.price * +pro?.productQuantity} LE
                        </span>
                        -
                        <span className="text-colorBlue font-semibold">
                          {+pro?.priceAfterDiscount * +pro?.productQuantity} LE
                        </span>
                      </div>
                    ) : (
                      <span className="text-colorBlue font-semibold">
                        {+pro?.price * +pro?.productQuantity} LE
                      </span>
                    )}
                  </div>
                  {/* Quantity */}
                  <div className="flex justify-between max-[576px]:flex-col gap-3">
                    <div className="flex gap-3 items-center">
                      <span className=" opacity-70 text-sm">
                        Remaining Quantity
                      </span>
                      <span className="text-colorBlue text-md font-semibold">
                        {pro?.quantity - pro?.productQuantity}
                      </span>
                    </div>

                    {/* quantity */}
                    <div className="flex gap-1 items-center">
                      <FontAwesomeIcon
                        className="bg-colorBlurBlue p-1 rounded-full text-colorWhite hover:bg-colorBlue transition-[0.3s] cursor-pointer"
                        icon={faMinus}
                        onClick={() => {
                          dispatch(decrease(pro));
                        }}
                      />
                      <span className="text-lg mx-2">
                        {pro?.productQuantity}
                      </span>
                      <FontAwesomeIcon
                        className="bg-colorBlurBlue p-1 rounded-full text-colorWhite hover:bg-colorBlue transition-[0.3s] cursor-pointer"
                        icon={faPlus}
                        onClick={() => {
                          dispatch(addCart(pro));
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <button
                      onClick={() => dispatch(removeCart(pro))}
                      className="bg-red-500 text-sm rounded-md text-colorWhite opacity-80 capitalize hover:text-colorWhite hover:bg-red-600 hover:opacity-100 transition-[.3s] py-[7px] px-2 w-fit"
                    >
                      remove
                    </button>

                    <button
                      onClick={() => dispatch(addWishlist(pro))}
                      className="bg-colorBlurBlue text-sm rounded-md text-colorBlue capitalize hover:text-colorWhite hover:bg-colorBlue transition-[.3s] py-[7px] px-2 w-fit"
                    >
                      save for later
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <button
            onClick={() => dispatch(clear())}
            className="bg-red-500 my-5 text-md ms-auto rounded-md text-colorWhite opacity-80 capitalize hover:text-colorWhite hover:bg-red-600 hover:opacity-100 transition-[.3s] py-2 px-5 w-fit"
          >
            remove all
          </button>
        </div>
      )}
    </div>
  );
}

export default CartItems;
