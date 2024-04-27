import React, { useState } from "react";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="bg-blue-900 text-m rounded-lg border-white visible">
      <div className="flex items-center">
        <input
          className="bg-blue-900 text-white text-10 border-none"
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ fontSize: "1.5rem", padding: "0.5rem", color: "white", fontStyle: "italic" }}
        />
        <Search className="text-white mr-2 ml-2 cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchBar;