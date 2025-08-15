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

  const onTabClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const intValue = parseInt(
      (event.target as HTMLLIElement).getAttribute('data-value') || '0',
    );
    if (intValue !== activeTab) {
      setActiveTab(intValue);
    }
  };

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const intValue = parseInt(event.target.value);
    if (intValue !== activeTab) {
      setActiveTab(intValue);
    }
  };

  return (
    <div className={className}>
      <div className="text-center">
        <ul className="hidden lg:inline-flex bg-ec_grey dark:bg-ec_grey_darkmode transition-colors duration-300 rounded-2xl p-1.5 drop-shadow-lg">
          {tabs.map((item, index) => {
            return (
              <li
                key={index}
                data-value={index}
                className={`px-6 py-2 mr-1.5 rounded-xl last:mr-0 hover:cursor-pointer 
                            hover:bg-black/10 dark:hover:bg-white/10 text-ec_text dark:text-ec_text_darkmode transition-colors duration-300
                            ${
                              index === activeTab &&
                              'text-white bg-ec_orange dark:bg-ec_orange_darkmode transition-colors duration-300'
                            }`}
                onClick={onTabClick}
              >
                {item.name}
              </li>
            );
          })}
        </ul>

        {/* Mobile Select Dropdown */}
        <select
          className="inline-block lg:hidden w-full rounded-xl p-1.5 drop-shadow-lg 
                     bg-ec_background dark:bg-ec_background_darkmode text-ec_text dark:text-ec_text_darkmode transition-colors duration-300"
          value={activeTab}
          onChange={onSelectChange}
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
