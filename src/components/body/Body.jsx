import React from 'react';
import Item from '../items/Item';
import "./Body.css";

export default function Body() {
  return (
    <div>
      <form>
        <input type="text" className='body_input' />
      </form>

      <div className="items">
        <Item id="1">First</Item>
        <Item id="2">Second</Item>
        <Item id="3">Third</Item>
      </div>
    </div>
  )
}
