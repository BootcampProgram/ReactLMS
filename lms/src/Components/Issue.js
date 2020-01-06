import React, { useState } from 'react';
import '../App.css';
import Searchbar from './Searchbar'
import IssueReservations  from './IssueReservations'
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
            <Searchbar search = {onSearch} placeholder = "Search For Student Reservations (By Student)"/>
          </Col>
        </Row>
      </Container>
        
        <IssueReservations searchString={searchString}/>
      </>
    );
  }
  
export default Issue;