import React, { useState } from 'react';
import '../App.css';
import Searchbar from './Searchbar';
import Booktable from './Booktable';
import { Button } from 'react-bootstrap';

function Catalog() {
  //States
  const [SearchString, setsearchString] = useState("");

  //Methods
  const onSearch = (stringValue) => {
    setsearchString(stringValue);
  }
    return (
      <>
        <Searchbar search = {onSearch}/>
        <Button variant="primary" className="ml-4 my-3">Add New Book</Button>
        <Booktable searchString = {SearchString}/>
      </>
    );
  }
  
export default Catalog;