import React, { useState } from "react";

const SearchSelect = ({ options, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const calculateDistance = (option) => {
    const optionLower = option.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();
    let distance = 0;
    for (let i = 0; i < Math.min(optionLower.length, searchTermLower.length); i++) {
      if (optionLower[i] !== searchTermLower[i]) {
        distance++;
      }
    }
    return distance;
  };

  const filteredOptions = options
    .filter((option) => option.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => calculateDistance(a) - calculateDistance(b));

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
      />

      <select className="form-select">
        <option value="">Sélectionner un produit</option>
        {filteredOptions.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchSelect;
