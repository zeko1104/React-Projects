import React, { useState } from "react";
import Menulist from "./menu-list";
import {FaMinus,FaPlus} from 'react-icons/fa'

export default function Menuitem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }

  console.log(displayCurrentChildren);

  return (
    <li>
      <div className="flex items-center gap-5 cursor-pointer text-white">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span
            onClick={() => handleToggleChildren(item.label)}
            className="cursor-pointer"
          >
            {
                displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25}/> : <FaPlus color="#fff" size={25}/>
            }
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <Menulist list={item.children} />
      ) : null}
    </li>
  );
}
