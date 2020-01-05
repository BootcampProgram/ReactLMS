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
  const [isbnNumber, setIsbnNumber] = useState("");

  //Methods
  const onSearch = (stringValue) => {
    setsearchString(stringValue);
  }

  const setTableData = (tableData) => {
    setBooksTableList(tableData);
  }

  const setisNumber = (input) => {
    setIsbnNumber(input);
  }
    return (
      <>
        <Searchbar search = {onSearch} placeholder = "Search by Book Details"/>
        <Button variant="primary" className="ml-4 my-3" onClick={() => setModalShow(true)}>Add New Book</Button>
        <Booktable searchString={SearchString} setTableData={setTableData}/>
        <AddNewBookModal show={modalShow} onHide={() => {setModalShow(false); setIsbnNumber("")}} bookstablelist={booksTableList} setisnumber={setisNumber} isbnnumber={isbnNumber}/>
      </>
    );
  }
  
export default Catalog;