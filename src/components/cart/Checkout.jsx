import { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ data }) {
  // Get total
  // if there a discount on the product or not

  const total = data.reduce((acc, product) => {
    acc +=
      (product?.priceAfterDiscount || product?.price) * product.productQuantity;
    return acc;
  }, 0);

  const [discount, setDiscount] = useState();
  const couponInput = document.getElementById("coupon");

  const handleDiscount = () => {
    if (couponInput.value === "M10") {
      setDiscount(20);
    }
  };

  const handleInput = () => {
    if (couponInput.value !== "M10") {
      setDiscount(0);
    }
  };

  const getTotal = total - (discount || 0);

  return (
    <>
      {data?.length > 0 && (
        <div className="flex flex-col gap-5  text-colorDark">
          <div className="p-3 border rounded-md">
            <h1 className="mb-3">Have a coupon? </h1>
            <div className="rounded-lg">
              <div className="flex">
                <input
                  id="coupon"
                  type="text"
                  className="w-full bg-white pl-2 text-sm outline-0 border border-gray-200 rounded-bl-lg rounded-tl-lg"
                  placeholder="Add Coupon"
                  onChange={handleInput}
                />
                <button
                  onClick={handleDiscount}
                  className="border border-gray-200 p-2 bg-white rounded-tr-lg rounded-br-lg text-colorBlue transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          <div className="border p-3 rounded-md">
            <div className="pb-3 border-b">
              <div className="flex justify-between mb-3">
                <span>Subtotal :</span> <span>{total} LE</span>
              </div>
              <div className="flex justify-between">
                <span>Discount :</span>{" "}
                <span className="text-red-500">{` ${discount || 0} LE`}</span>
              </div>
            </div>

            <div className="pt-3">
              <div className="flex justify-between font-semibold">
                <span>Total :</span>
                <span>{getTotal} LE</span>
              </div>

              <Link
                to="payment"
                className="bg-green-600 block text-center mt-5 rounded-md text-colorWhite opacity-80 capitalize hover:opacity-100 py-2 px-5 w-full"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Checkout;
