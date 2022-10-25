import { ReactNode, useState } from "react";
import "./TabSelector.css";

type TabSelectorProps = {
  tabs: Array<{ name: string; content: ReactNode }>;
  defaultTab?: number;
  className?: string;
  breakpoint?: "sm" | "md" | "lg" | "xl";
};

const TabSelector = ({
  tabs,
  defaultTab = 0,
  className = "w-full",
  breakpoint = "md",
}: TabSelectorProps) => {
  const [activeTab, setActiveTab] = useState(
    defaultTab < tabs.length ? defaultTab : 0
  );

  const onTabClick = (event: any) => {
    let intValue = parseInt(event.target.value);
    if (intValue !== activeTab) {
      setActiveTab(intValue);
    }
  };

  return (
    <div className={className}>
      <div className="text-center">
        <ul className={`${breakpoint}:tabs-row`}>
          {tabs.map((item, index) => {
            return (
              <li
                key={index}
                value={index}
                className={`tab ${index === activeTab ? "selected" : ""}`}
                onClick={onTabClick}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        <select
          className={`${breakpoint}:tabs-select`}
          value={activeTab}
          onChange={onTabClick}
        >
          {tabs.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabSelector;
