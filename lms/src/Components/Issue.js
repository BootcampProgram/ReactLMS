import React, { useState } from 'react';
import '../App.css';
import Searchbar from './Searchbar'
import IssueByReservations  from './IssueByReservations'
import IssueByBook  from './IssueByBook'
import { Container, Row, Col } from 'react-bootstrap';

function Issue(props) {
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
        
      <IssueByReservations searchString={searchString}/>
      <IssueByBook searchString={searchString}/>
      
      </>
    );
  }
  
export default Issue;