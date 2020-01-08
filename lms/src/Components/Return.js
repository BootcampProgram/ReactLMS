import React, { useState } from 'react';
import '../App.css';
import Searchbar from './Searchbar'
import ReturnByBorrowings  from './ReturnByBorrowings'
//import IssueByBook  from './IssueByBook'
import { Container, Row, Col } from 'react-bootstrap';

function Return(props) {
  //State
  const [searchString, setSearchString] = useState("");

  //Method
  const onSearch = (inputValue) => {
    setSearchString(inputValue)
  }
    return (
      <>
      <Container>
        <Row>
          <Col>
            <Searchbar search = {onSearch} placeholder = "Search By Student ID"/>
          </Col>
        </Row>
      </Container>
        
      <ReturnByBorrowings searchString={searchString}/>
      {/* <IssueByBook searchString={searchString}/> */}
      
      </>
    );
  }
  
export default Return;