import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Item from "../components/Item";

function Shop() {
  const { loading, data, error } = useFetch("/products");

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div className="min-h-screen">
      <h1 className="main_title my-5 text-colorDark">Shop Now !!</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
        {data?.data?.map((item) => {
          return <Item key={item?.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Shop;
