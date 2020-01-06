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
          <Col md={{ span: 5}}>
            <Searchbar search = {onSearch} placeholder = "Search By Student Attributes"/>
          </Col>
        </Row>
      </Container>
        
        <IssueReservations searchString={searchString}/>
      </>
    );
  }
  
export default Issue;