import React, { useState } from 'react';
import '../App.css';
import Searchbar from './Searchbar'
import Studenttable from './Studenttable'

function Students() {

  //State
  const [searchString, setSearchString] = useState("");

  //Method
  const onSearch = (inputValue) => {
    setSearchString(inputValue)
  }
    return (
      <>
        <Searchbar search = {onSearch} placeholder = "Search By Student Attributes"/>
        <Studenttable searchString={searchString}/>
      </>
    );
  }
  
export default Students;