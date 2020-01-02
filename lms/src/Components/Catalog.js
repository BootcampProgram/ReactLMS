import React, { useState } from 'react';
import '../App.css';
import Searchbar from './Searchbar';
import Booktable from './Booktable';
import { Button } from 'react-bootstrap';
import AddNewBookModal from './Modals/AddNewBookModal'

function Catalog() {
  //States
  const [SearchString, setsearchString] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [booksTableList, setBooksTableList] = useState([]);

  //Methods
  const onSearch = (stringValue) => {
    setsearchString(stringValue);
  }

  const setTabledata = (tableData) => {
    setBooksTableList(tableData);
    console.log(booksTableList);
  }
    return (
      <>
        <Searchbar search = {onSearch} placeholder = "Search by Book Details"/>
        <Button variant="primary" className="ml-4 my-3" onClick={() => setModalShow(true)}>Add New Book</Button>
        <Booktable searchString={SearchString} setTabledata={setTabledata}/>
        <AddNewBookModal show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
  }
  
export default Catalog;