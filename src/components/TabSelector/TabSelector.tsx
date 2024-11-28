import { ReactNode, useState } from 'react';

type TabSelectorProps = {
  tabs: Array<{ name: string; content: ReactNode }>;
  defaultTab?: number;
  className?: string;
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl';
};

const TabSelector = ({
  tabs,
  defaultTab = 0,
  className = 'w-full',
}: TabSelectorProps) => {
  const [activeTab, setActiveTab] = useState(
    defaultTab < tabs.length ? defaultTab : 0,
  );

  const onTabClick = (event: any) => {
    const intValue = parseInt(event.target.value);
    if (intValue !== activeTab) {
      setActiveTab(intValue);
    }
  };

  return (
    <div className={className}>
      <div className="text-center">
        <ul className="hidden lg:inline-flex bg-white rounded-2xl p-1.5 drop-shadow-lg">
          {tabs.map((item, index) => {
            return (
              <li
                key={index}
                value={index}
                className={`px-6 py-2 mr-1.5 rounded-xl last:mr-0 hover:cursor-pointer hover:bg-black/10 ${
                  index === activeTab && 'text-white bg-ec_orange'
                }`}
                onClick={onTabClick}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        <select
          className="inline-block lg:hidden w-full rounded-xl p-1.5 drop-shadow-lg"
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
      <div className="mt-6">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabSelector;
