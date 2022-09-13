import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListContainer from "./Components/ListContainer";

const App = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setText(e.currentTarget.value);
  };

  const handleClick = () => {
    if (text != "") {
      const data = {
        id: uuidv4(),
        text,
      };
      setList((pre) => [...pre, data]);
      setText("");
    } else {
      alert("Error");
    }
  };

  const handleDelete = (e) => {
    setList((preState) => preState.filter((i) => i.id !== e));
  };

  const handleEdit = (id, text) => {
    const value = prompt("are you sure you want to edit", text);
    if (value !== "") {
      setList((pre) =>
        pre.map((i) => (i.id === id ? { id: uuidv4(), text: value } : i))
      );
    }
  };

  return (
    <div>
      <h1 className="header">CRUD Todo</h1>
      <div className="inputContainer">
        <input
          value={text}
          onChange={handleChange}
          className="input"
          type="text"
        />
        <button onClick={handleClick}>Add Goal</button>
      </div>
      <div>
        {list.map((i) => (
          <ListContainer
            key={i.id}
            data={i}
            drop={handleDelete}
            edit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
