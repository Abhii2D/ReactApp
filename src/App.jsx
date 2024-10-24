import { Fragment } from "react";
import { Cardss } from "./Cardss";
import './App.css';
import { Eve } from "./component/Eve";
export const App = () => {
  return (
    <>
        <h1 className="headdd">NetFlex App</h1>
      <div className="classeName">
        {/* <Cardss/> */}
        {/* <Pra /> */}
        <Eve></Eve>
      </div>
    </>
  );
};
