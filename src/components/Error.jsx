import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Error({ error }) {
  return (
    <div className="flex justify-center min-h-[20vh]">
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faTriangleExclamation} />
        <h1>Error : {error}</h1>
      </div>
    </div>
  );
}

export default Error;
