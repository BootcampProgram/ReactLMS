import React, { useEffect, useState } from 'react'; 
import '../App.css';
import {Button, Container, Row, Col, Form, Image } from 'react-bootstrap';

function IssueReservations(props) {

  const [listStudents, setListStudents] = useState([]);
  const [listReservations, setListReservations] = useState([]);
  const [refresh, setRefresh] = useState(0);

  
  //const StudentSearch = (props) => (
      //   <Typeahead
      //     labelKey={(option) => `${option.fullName}`}
      //     options={listStudents}
      //     placeholder="Search By Student Attributes"
      //   />
      // );
      // var searchs = StudentSearch;
      // var Typeahead = require('react-bootstrap-typeahead').Typeahead; 
      //   console.log(searchs)
      //   var search = listStudents.filter(student => 
      //     student.fullName.toLowerCase().includes(searchs)
      //     )

    var searchStudent = listStudents.filter(student => 
      student.fullName.toLowerCase().includes(props.searchString.toString().toLowerCase())
    )
      console.log(searchStudent)

    var searchReservations = listReservations.filter(reservation => 
      reservation.studentFullName.toLowerCase().includes(props.searchString.toString().toLowerCase())
    )
      console.log(searchStudent)
      

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
      })    
  },[refresh])

    return (
      <>
      
        <Container>
        {searchStudent.length === 1 && 
          <Row>
            <Form.Label className="font-weight-bold" column> Student ID: </Form.Label>
            <Col className="my-auto">{`S00${searchStudent.studentId}`}</Col>
          </Row>
        }
        {searchStudent.length === 1 && 
        <Row>
            {searchReservations.map(Reservations =>
            <Row className="mt-3 mb-4 shadow rounded" style={{backgroundColor:"#ededed"}}>
            {/* Image section */}
            <Col md={2}  className="my-auto">
              <Image src={require(`../Coverimages/${Reservations.coverImage === undefined || Reservations.coverImage === null? 'Default.jpg' : Reservations.coverImage}`)} thumbnail style={{width:"100px"}}/>
            </Col>
           
          </Row>
          

          )}
        </Row>
       }
        </Container>
      </>
    );
  }
  
export default IssueReservations;