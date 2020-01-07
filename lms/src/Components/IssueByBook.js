import React, { useState } from 'react';
import '../App.css';
import Searchbar from './Searchbar'
import { Container, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';
import {IoMdAdd} from "react-icons/io";

function IssueByBook(props) {
  //State
  const [searchString, setSearchString] = useState("");
  const [inputValue, setInputValue] = useState([]);

  console.log(inputValue);
  //Method
  const onSearch = (inputValue) => {
    setSearchString(inputValue)
  }
    return (
      <>
      <Container>
        <Row>
          <Col md={4}>
            <InputGroup className="my-4 w-75 mx-auto">
                <FormControl
                    placeholder="Search By Book ID"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={event => setInputValue(event.target.value)}
                />
            </InputGroup>
          </Col>
          <Col md={6} className="my-4 mx-auto">
            <FormControl
                    placeholder="Book Tittle"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    disabled={true}
                />
          </Col>
          <Col className="my-4 w-75 mx-auto">
            <Button variant="outline-success">
                <IoMdAdd/>
            </Button> 
          </Col>
        </Row>
        <Row>
            <Col md={10}></Col>
            <Col className="mt-2">
                <Button variant="success" className="mr-3">Issue</Button>
                <Button variant="outline-secondary">Cancel</Button>
            </Col>
        </Row>
      </Container>
      
      </>
    );
  }
  
export default IssueByBook;