import React, { useState } from "react";

const FilterForm = ({ onSubmit }) => {
  const [dateRange, setDateRange] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ dateRange, language });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex gap-5 border border-black   dark:border-white justify-around p-4 "
    >
      <div className="flex items-center">
        <label
          htmlFor="dateRange"
          className="mr-2 font-semibold dark:text-white"
        >
          Date Range:
        </label>
        <input
          id="dateRange"
          type="date"
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="border border-gray-400 rounded px-2 py-1"
        />
      </div>
      <div className="flex items-center">
        <label
          htmlFor="language"
          className="mr-2 font-semibold dark:text-white"
        >
          Language:
        </label>
        <input
          id="language"
          type="text"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border border-gray-400 rounded px-2 py-1"
        />
      </div>
      <button
        type="submit"
        className=" bg-blue-500 text-white rounded px-4 py-2"
      >
        Filter
      </button>
    </form>
  );
};

export default FilterForm;
