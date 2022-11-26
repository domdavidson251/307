import React, { useState } from 'react';
import './SearchBar.css';
//import { BsSearch } from "react-icons/bs";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
//import { BsX } from "react-icons/bs";
import Data from './data.json';

function SearchBar({placeholder,data}) {
  //const restaurantData = props.restaurantData;
  const [filteredData, setFilteredData] = useState([]);
  const [searchEntery, setSearchEntery] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setSearchEntery(searchWord)
    const newFilter = data.filter((value) => {
      return value.Restaurant.toLowerCase().includes(searchWord.toLowerCase);
    });

    if(searchWord === ""){
      setFilteredData([]);
    }else{
    setFilteredData(newFilter);
    }
  }

  const clearInput = () => {
    setFilteredData([]);
    setSearchEntery("");
  }

  return (
    <div className='search'>
        <div className='searchInputs'>
            <input 
              type="text"
              placeholder={placeholder}
              value={searchEntery}
              onChange={handleFilter}
              >
            </input>
            <div className='searchIcon'>
              {filteredData.length === 0 ? 
                (<SearchIcon/>) 
                : 
                (<CloseIcon id="clearBtn" onClick={clearInput} />)}
              </div>
        </div>
        {filteredData.length != 0 && (
        <div className='dataResult'>
          {filteredData.slice(0,3).map((value, key) => {
            return <a className='dataItem'> 
              <p>{value.Restaurant}</p> 
              </a>
          })}
        </div>
      )}
    </div>
  )
}

export default SearchBar