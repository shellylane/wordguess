import React from "react";
import "./LetterButton.css";

function LetterButton(props) {
  return (
    <button
      onClick={() => props.handleClick(props.item)}
      className="letterButton btn btn-primary btn-md "
    >
      {props.item}
    </button>
  );
}
export default LetterButton;
