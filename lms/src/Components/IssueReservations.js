import React, { useEffect, useState } from 'react'; 
import '../App.css';
import {Container, Row, Col, Form, Image } from 'react-bootstrap';
import {IoIosCloseCircleOutline, IoIosCheckmarkCircleOutline} from "react-icons/io";

function IssueReservations(props) {

  const [listStudents, setListStudents] = useState([]);
  const [listReservations, setListReservations] = useState([]);

  var searchStudent = listStudents.filter(student => 
    student.fullName.toLowerCase().includes(props.searchString.toString().toLowerCase())
  )
    //console.log(searchStudent)

  var searchReservations = listReservations.filter(reservation => 
    reservation.studentFullName.toLowerCase().includes(props.searchString.toString().toLowerCase())
  )
    //console.log(searchStudent)
      

  useEffect (() => {
    fetch("https://localhost:44381/api/student")
    .then(res => res.json())
    .then(data => {
      setListStudents(data)
    });
    
    fetch("https://localhost:44381/api/reservation")
    .then(res => res.json())
    .then(data => {
      setListReservations(data)
    });

    fetch("https://localhost:44381/api/reservation")
    .then(res => res.json())
    .then(data => {
      setListReservations(data)
    }); 
  })

  return (
    <>
      <Container>
      {searchStudent.length !== 1 && 
        <Container className="mt-3 mb-4 p-5 shadow rounded my-auto" style={{backgroundColor:"#ededed", height:"150px"}}>
        <p className="text-center mx-auto my-auto" style={{color:"grey", margin:"0"}}>No Students Searched...</p>
        </Container>
      } 
      {searchStudent.length === 1 && 
        <Container className="mt-3 mb-4 p-3 pb-5 shadow rounded my-auto" style={{backgroundColor:"#ededed"}}>
        {searchStudent.map(student => 
          <Col md={4} className="mb-3">
            <Row>
              <Form.Label className="font-weight-bold" column> Student ID: </Form.Label>
              <Col className="my-auto">{`S00${student.studentId}`}</Col>
            </Row>
            <Row>
              <Form.Label className="font-weight-bold" column> Student ID: </Form.Label>
              <Col className="my-auto">{student.fullName}</Col>
            </Row>
          </Col>
        )}
     
          <Row>
            <p className="font-weight-bold mb-3 ml-4" style={{color:"green", fontSize:"20px"}}>
            Reservations
            </p>
          </Row>
      
          <Row className="ml-4">
            {searchReservations.map(Reservations =>
            <Row className="mt-3 mb-4 ml-4 shadow rounded my-auto" style={{backgroundColor:"#FAFAFA"}}>
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
              <p className="text-center mx-auto my-auto" style={{color:"grey", fontSize:"20px"}}>No Reservations Found...</p>
            }
          </Row>
        </Container>
      }
      </Container>
      <Container>
        <Row>
          <p className="font-weight-bold mb-3 ml-4 mt-4" style={{color:"green", fontSize:"20px"}}>
            OR Add By Book ID
          </p>
        </Row>
      </Container>
    </>
  );
}
  
export default IssueReservations;