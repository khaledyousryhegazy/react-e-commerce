import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Error from "./Error";
import Item from "./Item";

function ItemsList({ category, title }) {
  const { loading, data, error } = useFetch(`/products?category=${category}`);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <h1 className="main_title mt-10">{title}</h1>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
        {data?.data.length > 0 &&
          data?.data.map((item) => {
            return <Item key={item?.id} item={item} />;
          })}
      </div>
    </div>
  );
}

export default ItemsList;
