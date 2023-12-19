import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import MenFashion from "./pages/MenFashion";
import WomenFashion from "./pages/WomenFashion";
import Electronics from "./pages/Electronics";
import ItemDetails from "./pages/ItemDetails";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import PaymentDetails from "./components/cart/PaymentDetails";
import About from "./pages/About";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="container m-auto px-1">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men-fashion" element={<MenFashion />} />
        <Route path="/women-fashion" element={<WomenFashion />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/product/:id" element={<ItemDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />}>
          <Route path="payment" element={<PaymentDetails />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-in" element={<Sign />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
