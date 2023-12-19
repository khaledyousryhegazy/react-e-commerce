import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DataEmpty({ pageName }) {
  return (
    <div className="flex items-center justify-center h-[50vh] gap-2">
      <h1>Your {pageName} is empty</h1>
      <FontAwesomeIcon icon={faFaceSadTear} />
    </div>
  );
}

export default DataEmpty;
