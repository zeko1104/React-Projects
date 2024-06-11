import React from "react";
import Menulist from "./menu-list";

export default function TreeView({ menus = [] }) {
  return (
    <div className="list-none mt-0 mb-0 flex h-[100vh] w-[100vw] justify-center items-center">
      <Menulist list={menus} />
    </div>
  );
}
