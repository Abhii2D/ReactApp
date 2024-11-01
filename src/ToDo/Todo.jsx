import { useState } from "react";
import { MdDelete } from "react-icons/md";

export const Todo = () => {
  const [inputdata, setInputdata] = useState("");
  const [list, setList] = useState([]);
const[date,setDate] = useState("");
  const handleInput = (value) => {
    setInputdata(value);
  };
  const formhandling = (e) => {
    e.preventDefault();
    setList((e) => [...e, inputdata]);
    setInputdata("");
  };

  setInterval(() => {
    const now = new Date();
    const currentdate = now.toLocaleDateString();
    const nowtime = now.toLocaleTimeString();
    setDate(`${currentdate} - ${nowtime}`);
  }, 1000);
// deleting the selected todo task

const deleteSpan = (value) => {
  console.log(value);
  const updatedata = list.filter((current) => current !== value);
  setList(updatedata);
}
const ClearBtn = ()=>{
  const up = [];
  setList(up);
}
  return (
    <div>
      <form onSubmit={formhandling}>
        <h1>Todo Application</h1>
        <h3>
          {date}
        </h3>
        <div>
          <input
            type="text"
            className="todo-input"
            autoCapitalize="off"
            value={inputdata}
            onChange={(e) => handleInput(e.target.value)}
          />

          <button type="submit">Click</button>
      <button onClick={ClearBtn}>Clear</button>
        </div>
      </form>
      <section>
        <ul>
          {list.map((e, i) => {
            return (
              <li key={i}>
                <span>{e}</span>
                <button onClick={() => deleteSpan(e)}>
                  <MdDelete />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      
    </div>
  );
};
