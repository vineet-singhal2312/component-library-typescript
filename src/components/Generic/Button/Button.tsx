import React from "react";
import "./Button.css";

const Button = () => {
  return (
    <div className="contentDiv">
      <div className="contentSubDiv">
        <button className="button btn1 primary">Primary 1</button>
        <button className="button btn2 primary">Primary 2</button>
        <button className="button btn3 primary">Primary 3</button>
      </div>

      <div className="contentSubDiv">
        <button className="button btn1 secondary">Secondary 1</button>
        <button className="button btn2 secondary">Secondary 2</button>
        <button className="button btn3 secondary">Secondary 3</button>
      </div>
      <div className="contentSubDiv">
        <button className="button btn1 danger1">Danger 1</button>
        <button className="button btn2 danger1">Danger 2</button>
        <button className="button btn3 danger1">Danger 3</button>
      </div>
      <div className="contentSubDiv">
        <button className="button btn1 danger2">Danger 1</button>
        <button className="button btn2 danger2">Danger 2</button>
        <button className="button btn3 danger2">Danger 3</button>
      </div>
      <div className="contentSubDiv">
        <button className="button btn1 dark">Dark 1</button>
        <button className="button btn2 dark">Dark 2</button>
        <button className="button btn3 dark">Dark 3</button>
      </div>
      <div className="contentSubDiv">
        <button className="button btn1 light">Light 1</button>
        <button className="button btn2 light">Light 2</button>
        <button className="button btn3 light">Light 3</button>
      </div>
    </div>
  );
};

export default Button;
