import { BiTrash, BiEdit } from "react-icons/bi";
import "./ListContainer.css";

const ListContainer = ({ data, drop, edit }) => {
  return (
    <div className="listContainer">
      <p> {data.text}</p>
      <div>
        <BiTrash
          onClick={() => {
            drop(data.id);
          }}
        />
        <BiEdit
          onClick={() => {
            edit(data.id, data.text);
          }}
        />
      </div>
    </div>
  );
};

export default ListContainer;
