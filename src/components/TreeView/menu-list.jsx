import React from "react";
import Menuitem from "./menu-item";

export default function Menulist({ list = [] }) {
  return (
    <ul className="min-h-96 w-[350px] bg-[#00476e]">
      {list && list.length
        ? list.map((listItem) => <Menuitem item={listItem} />)
        : null}
    </ul>
  );
}
