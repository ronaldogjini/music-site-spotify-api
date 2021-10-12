import React, { useState } from "react";
import { createBrowserHistory } from "history";

function SearchElement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState('artist')

  const searchFunction = () => {
    let history = createBrowserHistory();
    history.push(`/search/${searchType}/${searchTerm}`);
    history.go(0);
  };

  return (

    <div className="flex items-center max-w-md  bg-white rounded-full h-10 ">

      <select className="border border-gray-400 rounded-full pl-3 pr-2 text-gray-600 h-10 hover:border-gray-400 focus:outline-none appearance-none"
        value={searchType}
        onChange={(e) => {
          setSearchType(e.target.value)
          console.log(e.target.value)
        }}
      >
        <option value='artist'>Artists</option>
        <option value='song'>Songs</option>
        <option value='album'>Albums</option>
      </select>
      <div className="w-32">
        <input
          type="search"
          className="w-full x-2 pl-1 py-1 text-gray-900 rounded-full focus:outline-none"
          placeholder="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>

      <div>
        <button
          type="submit"
          className="flex items-center justify-center w-10 h-10 text-gray-100 bg-green-500 rounded-full "
          onClick={searchTerm !== "" ? searchFunction : null}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>


    </div>
  );
}

export default SearchElement;
