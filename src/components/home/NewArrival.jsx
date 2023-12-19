import { useFetch } from "../../hooks/useFetch";
import Error from "../Error";
import Loader from "../Loader";
import ItemsSwiper from "../Swiper";

function NewArrival() {
  const { loading, data, error } = useFetch("/products?page=2");

  if (loading) {
    return <Loader />;
  }

  if (error !== null) {
    return <Error error={error} />;
  }

  return (
    <div className="py-10 mt-10">
      <h1 className="main_title">New Arrival</h1>

      {/* Card */}
      <div>
        {!loading && error === null && data?.data.length > 0 && (
          <ItemsSwiper data={data?.data} />
        )}
      </div>
    </div>
  );
}

export default NewArrival;
