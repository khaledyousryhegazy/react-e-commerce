import { useSelector } from "react-redux";
import CartItems from "../components/cart/CartItems";
import Checkout from "../components/cart/Checkout";
import { Outlet } from "react-router-dom";
import DataEmpty from "../components/DataEmpty";

function Cart() {
  const data = useSelector((state) => state.cart);

  return (
    <div className="min-h-screen">
      <h1 className="main_title mt-5">My Cart : {`(${data?.length})`}</h1>
      {data?.length > 0 ? (
        <div className="flex gap-5 max-[1024px]:flex-col">
          {/* Cart items */}
          <div className="flex-[2]">
            <CartItems data={data} />
          </div>
          {/* Checkout Section */}
          <div className="flex-[.6]">
            <Checkout data={data} />
          </div>
        </div>
      ) : (
        <DataEmpty pageName="Cart" />
      )}
      <Outlet />
    </div>
  );
}

export default Cart;
