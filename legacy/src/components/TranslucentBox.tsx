import React from 'react';

interface TranslucentBoxProps {
  children: React.ReactNode;
  className?: string;
}

const TranslucentBox: React.FC<TranslucentBoxProps> = ({
  children,
  className = '',
}) => (
  <div
    className={`rounded-xl px-4 py-4 bg-white bg-opacity-30 dark:bg-black dark:bg-opacity-60 transition-colors duration-300 font-bold ${className}`}
  >
    {children}
  </div>
);

export default TranslucentBox;
