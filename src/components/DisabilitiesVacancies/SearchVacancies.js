import React from "react";

const SearchVacancies = ({ searchValue, setSearchValue }) => {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <>
      <div className="flex justify-center">
        <label
          className="flex flex-col my-5 gap-5 justify-center items-center md:flex-row"
          htmlFor=""
        >
          <span>Buscar:</span>
          <input
            className="w-80 focus:outline-none focus:ring focus:border-blue-300 bg-gray-200 px-2 py-1 font-sena border-1 rounded-md"
            onChange={onSearchValueChange}
            placeholder="Búsqueda por cargo"
            type="text"
            value={searchValue}
          />
        </label>
      </div>
    </>
  );
};

export default SearchVacancies;
