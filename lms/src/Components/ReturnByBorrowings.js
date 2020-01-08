import React, { useEffect, useState } from 'react'; 
import '../App.css';
import {Container, Row, Col, Form, Image, Alert, Button} from 'react-bootstrap';

function ReturnByBorrowings(props) {

  const [listStudents, setListStudents] = useState([]);
  const [listBorrowings, setListBorrowings] = useState([]);

  var searchStudent = listStudents.filter(student => `S00${student.studentId}`.toLowerCase() === props.searchString.toString().toLowerCase()
  )

  var searchBorrowings = listBorrowings.filter(borrowing =>  `S00${borrowing.studentId}`.toLowerCase() === props.searchString.toString().toLowerCase()
  )

      
console.log(searchBorrowings);
  useEffect (() => {
    fetch("https://localhost:44381/api/student")
    .then(res => res.json())
    .then(data => {
      setListStudents(data);
    });

    fetch("https://localhost:44381/api/borrowing/all")
    .then(res => res.json())
    .then(data => {
      setListBorrowings(data)
    });
  },[])

  return (
    <>
      <Container>
      {searchStudent.length !== 1 && 
        <Alert variant="success" className="text-center">
          Search For Student Borrowings By Student ID
        </Alert>
      } 
      {searchStudent.length === 1 && 
        <Container className="mt-3 mb-4 p-3 pb-5 shadow rounded my-auto" style={{backgroundColor:"#ededed"}}>
        {searchStudent.map(student => 
          <Col md={4} className="mb-3" key={student.studentId}>
            <Row>
              <Form.Label className="font-weight-bold" column> Student ID: </Form.Label>
              <Col className="my-auto">{`S00${student.studentId}`}</Col>
            </Row>
            <Row>
              <Form.Label className="font-weight-bold" column> Name: </Form.Label>
              <Col className="my-auto">{student.fullName}</Col>
            </Row>
          </Col>
        )}
     
          <Row>
            <p className="font-weight-bold mb-3 ml-4" style={{color:"green", fontSize:"20px"}}>
            Borrowings
            </p>
          </Row>
      
          <Row>
            {searchBorrowings.map(borrowing =>
            <Row className={"mt-3 mb-4 ml-4 shadow rounded my-auto " + (searchBorrowings.length === 2? 'mx-auto' : '')} key={borrowing.bookID} style={{backgroundColor:"#FAFAFA"}}>
            {/* Image section */}
              <Col md={4}  className="my-auto">
                <Image src={require(`../Coverimages/${borrowing.coverImage === undefined || borrowing.coverImage === null? 'Default.jpg' : borrowing.coverImage}`)} thumbnail style={{width:"100px"}}/>
              </Col>

              <Col md={6} >
                <Row>
                  <Form.Label className="font-weight-bold text-left" column>{`B00${borrowing.bookID}`}: {borrowing.title}</Form.Label>
                </Row>
                <Row>
                  <Col className="text-left" md={3}><small>Author:</small></Col>
                  <Col className="text-left"><small>{borrowing.author}</small></Col>
                </Row>
                <Row>
                  <Col className="text-left" md={3}><small>ISBN:</small></Col>
                  <Col className="text-left"><small>{borrowing.isbn}</small></Col>
                </Row>
                <Row>
                  <Col className="text-left" md={3}><small>Genre:</small></Col>
                  <Col className="text-left"><small>{borrowing.genre}</small></Col>
                </Row>
                <Row>
                  <Col className="text-left" md={3}><small>Language:</small></Col>
                  <Col className="text-left"><small>{borrowing.language}</small></Col>
                </Row>
                <Row className="pb-2">
                  <Col className="text-left" md={3}><small>Publisher:</small></Col>
                  <Col className="text-left"><small>{borrowing.publisher}</small></Col>
                </Row>        
                       
              </Col>
                    
              <Col md={2}>
                <Row style={{margin:"60px 0 60px 0"}}></Row>
                <Row className="mr-5">
                  <Button variant="danger">Recieved</Button>
                </Row>
              </Col>
                    
              <Col className="mr-5"></Col>
          </Row>
            )}
            {searchBorrowings.length===0 && 
              <p className="text-center mx-auto my-auto" style={{color:"grey", fontSize:"20px"}}>No Reservations Found...</p>
            }
          </Row>
        </Container>
      }
      </Container>

      
    </>
  );
}
  
export default ReturnByBorrowings;