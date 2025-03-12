const Test = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-ec_blue">Test Page</h1>
      <p className="text-lg text-ec_orange">
        Use this page to test layouts, colors, and components.
      </p>

      {/* Add test components here */}
      <div className="mt-8 p-6 bg-white shadow-md rounded-lg">
        <p className="text-gray-700">
          This section can be used for structural testing.
        </p>
      </div>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white p-10">
        <h1 className="text-3xl font-bold">Dark Mode Debugging</h1>
        <p className="text-lg">
          If this text does not change in dark mode, Tailwind is not applying
          dark mode classes.
        </p>
      </div>
    </div>
  );
};

export default Test;
