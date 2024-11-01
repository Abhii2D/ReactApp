import { useState } from "react";
import "./Todo.css";
import { MdCheck, MdDelete } from "react-icons/md";

const Mydata = "localtodo";
const getLocalStorage = ()=> {
  const rawData = localStorage.getItem(Mydata);
  if(!rawData) return [];
  return JSON.parse(rawData);
}

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState( ()=>
    getLocalStorage());


  const handleInput = (value) => {
    setInputValue(value);
  };

  localStorage.setItem("localtodo",JSON.stringify(task))
  
 
  
  const handleForm = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
    setTask((prev) => [...prev, inputValue]);
    setInputValue("");
  };
   const deletebtn = (data) => {
    const upate = task.filter((e) => e !== data);
    setTask(upate);
    
   }
  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
        </header>
        <section className="form">
          <form onSubmit={handleForm}>
            <div>
              <input
                type="text"
                className="todo-input"
                autoCapitalize="off"
                value={inputValue}
                onChange={(e) => handleInput(e.target.value)}
              />
            </div>
            <div>
              <button className="todo-btn" type="submit">
                Add Task
              </button>
            </div>
          </form>
        </section>
        <section className="myUnOrdList">
          <ul>
            {task.map((cur, index) => (
              <li key={index} className="todo-item">
                <span>{cur}</span>
                <button className="check-btn"><MdCheck /></button>
                <button className="delete-btn" onClick={() => deletebtn(cur)}><MdDelete /></button>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
};
