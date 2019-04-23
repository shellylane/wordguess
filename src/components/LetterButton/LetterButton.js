import React from "react";
import "./LetterButton.css";

function LetterButton(props) {
  return (
    <button
      onClick={e => props.handleClick(e)}
      className="letterButton btn btn-primary btn-md "
      value={props.item}
    >
      {props.item}
    </button>
  );
}
export default LetterButton;
