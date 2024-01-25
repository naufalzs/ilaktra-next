import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const EmptyProductState = ({ toggleShowForm }) => (
  <div className="w-full h-full flex flex-col p-10">
    <p className="font-montserrat text-2xl text-[#030303] leading-[31px]">
      Products - 0/10
    </p>
    <div className="flex-1 flex flex-col items-center justify-center space-y-3">
      <p className="text-xl"> You don&#39;t have any products</p>
      <button
        className="flex items-center justify-center space-x-3 bg-primary rounded px-3 py-2"
        onClick={toggleShowForm}
      >
        <FontAwesomeIcon icon={faPlusSquare} />
        <p> Add Product</p>
      </button>
    </div>
  </div>
);

export default EmptyProductState;
