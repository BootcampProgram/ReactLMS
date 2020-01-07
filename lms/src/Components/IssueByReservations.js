import React, { useEffect, useState } from 'react'; 
import '../App.css';
import {Container, Row, Col, Form, Image, Alert } from 'react-bootstrap';
import {IoIosCloseCircleOutline, IoIosCheckmarkCircleOutline} from "react-icons/io";

function IssueByReservations(props) {

  const [listStudents, setListStudents] = useState([]);
  const [listReservations, setListReservations] = useState([]);
  const [listBooks, setListBooks] = useState([]);

  var searchStudent = listStudents.filter(student => `S00${student.studentId}`.toLowerCase() === props.searchString.toString().toLowerCase()
    // student.fullName.toLowerCase().includes(props.searchString.toString().toLowerCase())
  )

  var searchReservations = listReservations.filter(reservation =>  `S00${reservation.studentId}`.toLowerCase() === props.searchString.toString().toLowerCase()
    // reservation.studentFullName.toLowerCase().includes(props.searchString.toString().toLowerCase())
  )

  console.log(listReservations);

  // var searchReservations = listReservations.filter(book => 
  //   book.bookID.toLowerCase().includes(props.searchString.toString().toLowerCase())
  // )
      

  useEffect (() => {
    fetch("https://localhost:44381/api/student")
    .then(res => res.json())
    .then(data => {
      setListStudents(data);
    });

    fetch("https://localhost:44381/api/reservation")
    .then(res => res.json())
    .then(data => {
      setListReservations(data)
    });
    
    fetch("https://localhost:44381/api/book")
    .then(res => res.json())
    .then(data => {
      setListBooks(data)
    });
  },[])

  return (
    <>
      <Container>
      {searchStudent.length !== 1 && 
        <Alert variant="success" className="text-center">
          Search Student By ID
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
            Reservations
            </p>
          </Row>
      
          <Row>
            {searchReservations.map(Reservations =>
            <Row className={"mt-3 mb-4 ml-4 shadow rounded my-auto " + (searchReservations.length === 2? 'mx-auto' : '')} key={Reservations.bookID} style={{backgroundColor:"#FAFAFA"}}>
            {/* Image section */}
              <Col md={4}  className="my-auto">
                <Image src={require(`../Coverimages/${Reservations.coverImage === undefined || Reservations.coverImage === null? 'Default.jpg' : Reservations.coverImage}`)} thumbnail style={{width:"100px"}}/>
              </Col>

              <Col md={6} >
                <Row>
                  <Form.Label className="font-weight-bold text-left" column>{`B00${Reservations.bookID}`}: {Reservations.title}</Form.Label>
                </Row>
                <Row>
                  <Col className="text-left" md={3}><small>Author:</small></Col>
                  <Col className="text-left"><small>{Reservations.author}</small></Col>
                </Row>
                <Row>
                  <Col className="text-left" md={3}><small>ISBN:</small></Col>
                  <Col className="text-left"><small>{Reservations.isbn}</small></Col>
                </Row>
                <Row>
                  <Col className="text-left" md={3}><small>Genre:</small></Col>
                  <Col className="text-left"><small>{Reservations.genre}</small></Col>
                </Row>
                <Row>
                  <Col className="text-left" md={3}><small>Language:</small></Col>
                  <Col className="text-left"><small>{Reservations.language}</small></Col>
                </Row>
                <Row className="pb-2">
                  <Col className="text-left" md={3}><small>Publisher:</small></Col>
                  <Col className="text-left"><small>{Reservations.publisher}</small></Col>
                </Row>        
                       
              </Col>
                    
              <Col md={2}>
                <Row style={{margin:"60px 0 60px 0"}}></Row>
                <Row>
                  <IoIosCloseCircleOutline style={{color:"red"}} size={35}/>
                  <IoIosCheckmarkCircleOutline className="p-0" style={{color:"green"}} size={35}/>
                </Row>
              </Col>
                    
              <Col className="mr-5"></Col>
          </Row>
            )}
            {searchReservations.length===0 && 
            //  <Col><Alert variant="danger" className="text-center">No Reservations Found...</Alert></Col>
              <p className="text-center mx-auto my-auto" style={{color:"grey", fontSize:"20px"}}>No Reservations Found...</p>
            }
          </Row>
        </Container>
      }
      </Container>
      <Container>
        <Row>
          <p className="font-weight-bold mb-3 ml-4 mt-4" style={{color:"green", fontSize:"20px"}}>
            Issue By Book ID
          </p>
        </Row>
      </Container>

      
    </>
  );
}
  
export default IssueByReservations;