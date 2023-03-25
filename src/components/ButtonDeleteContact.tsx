import { AiFillDelete } from "react-icons/ai";

function DeleteButton() {
  return (
    <div className="ml-auto">
      <button>
        <AiFillDelete size={24} color={"#ef4444"}  />
      </button>
    </div>
  );
}

export default DeleteButton;