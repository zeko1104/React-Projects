import React, { useState } from "react";
import tab from "./tab-test";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex){
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    // wrapper
    <div className="p-2">
      {/* heading */}
      <div className="flex justify-center mt-3">
        {tabsContent.map((tabItem,index) => (
          <div className={`tab-item ${currentTabIndex === index ? 'active' : ''}`} onClick={()=> handleOnClick(index)} key={tabItem.label}>
            {/* label */}
            <span className="">{tabItem.label}</span>
          </div>
        ))}
      </div>
      {/* content */}
      <div className="text-red-600 p-[20px 10px] h-[300px] overflow-auto bg-white">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
