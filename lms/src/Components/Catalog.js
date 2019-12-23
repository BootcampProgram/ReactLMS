import React from 'react';
import '../App.css';
import Searchbar from './Searchbar';
import Booktable from './Booktable';
import { Button } from 'react-bootstrap';

function Catalog() {
    return (
      <>
        <Searchbar />
        <Button variant="primary" className="ml-4 my-3">Add New Book</Button>
        <Booktable />
      </>
    );
  }
  
export default Catalog;