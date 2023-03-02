import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      <div className="Modal-body">{children}</div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
