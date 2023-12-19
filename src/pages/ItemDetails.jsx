import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Details from "../components/details/Details";

function ItemDetails() {
  const params = useParams();

  const { loading, data, error } = useFetch(`/products/${params?.id}`);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  return <Details item={data?.data} />;
}

export default ItemDetails;
