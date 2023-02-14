import React, { useContext } from "react";
import { AppState, ObjState } from "../App";

const ComC = () => {
  const appData = useContext(AppState);
  const objData = useContext(ObjState);

  return (
    <div className="compc">
      <div>ComC</div>
      <h1>{appData}</h1>
      <h1>name: {objData.obj.name}</h1>
      <h1>age: {objData.obj.age}</h1>
    </div>
  );
};

export default ComC;
