import React from 'react';
import { useState } from 'react';
import './SearchBar.css';
import { BsSearch } from "react-icons/bs";

function SearchBar({placeholder, data}) {

  const {filteredData, setFilteredData} = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value
    const newFilter = data.filter((value) => {
      return value.Restaurant.toLowerCase().includes(searchWord.toLowerCase);
    });
    setFilteredData(newFilter);
  }
  return (
    <div className='search'>
        <div className='searchInputs'>
            <input 
              type="text" placeholder={placeholder} onChange={handleFilter}>
            </input>
            <div className='BsSearch'><BsSearch/></div>
        </div>
        {/* {filteredData.length !== 0 && ( */}
        <div className='dataResult'>
          {data.map((value, key) => {
            return <div className='dataItem'> 
                <p>{value.Restaurant}</p> 
              </div>
          })}
        </div>
      {/* )} */}
    </div>
  )
}

export default SearchBar