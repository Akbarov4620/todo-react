import React from "react";
import "./Item.css";

export default function Item({ id, children }) {
  return (
    <div className="item">
      <form>
        <input type="checkbox" id={id} />
        <label htmlFor={id}>{children}</label>
      </form>
    </div>
  );
}
