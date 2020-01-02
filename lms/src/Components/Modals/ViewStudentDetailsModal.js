import React, {useState, useEffect} from 'react';
import '../../App.css';
import { Button, Modal, Container, Row, Col, Form } from 'react-bootstrap';

function ViewStudentDetailsModal(props){

    const [studentDetail, setStudentDetail] = useState([])

    useEffect(() => {

        fetch(`https://localhost:44381/api/student/${props.studentid}`)
        .then(res => { 
            if(res.status === 204){
                return [];
            }else{
                return res.json();
            }
            })
        .then(data =>{
            setStudentDetail(data)
        })

    }, [props.studentid])

    return(
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg" centered> 
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Details of Students {`S00${props.studentid}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="show-grid">
              <Col md={6}>
                 <Row>
                     <Form.Label className="font-weight-bold" column>First Name</Form.Label>
                     <Col className="my-auto">{studentDetail.firstName}</Col>
                 </Row>
                 <Row>
                     <Form.Label className="font-weight-bold" column>Last Name</Form.Label>
                     <Col className="my-auto">{studentDetail.lastName}</Col>
                 </Row>
                 <Row>
                     <Form.Label className="font-weight-bold" column>DOB</Form.Label>
                     <Col className="my-auto">{studentDetail.dateOfBirth === undefined ? studentDetail.dateOfBirth : studentDetail.dateOfBirth.substring(0,10)}</Col>
                 </Row>
                 <Row>
                     <Form.Label className="font-weight-bold" column>Gender</Form.Label>
                     <Col className="my-auto">{studentDetail.gender}</Col>
                 </Row>
                 <Row>
                     <Form.Label className="font-weight-bold" column>Address</Form.Label>
                     <Col className="my-auto">{studentDetail.address}</Col>
                 </Row>
                 <Row>
                     <Form.Label className="font-weight-bold" column>Contact Home</Form.Label>
                     <Col className="my-auto">{studentDetail.landNo}</Col>
                 </Row>
              </Col>
              <Col md={6}>
                 <Row>
                     <Form.Label className="font-weight-bold" column>Contact Parent</Form.Label>
                     <Col className="my-auto">{studentDetail.parentMobileNo}</Col>
                 </Row>
                 <Row>
                     <Form.Label className="font-weight-bold" column>Grade</Form.Label>
                     <Col className="my-auto">{studentDetail.grade}</Col>
                 </Row>
                 <Row>
                     <Form.Label className="font-weight-bold" column>Section</Form.Label>
                     <Col className="my-auto">{studentDetail.section}</Col>
                 </Row>
                 <Row>
                     <Form.Label className="font-weight-bold" column>Medium</Form.Label>
                     <Col className="my-auto">{studentDetail.medium}</Col>
                 </Row>
                 <Row>
                     <Form.Label className="font-weight-bold" column>Year Enrolled</Form.Label>
                     <Col className="my-auto">{studentDetail.yearEnrolled}</Col>
                 </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ViewStudentDetailsModal;