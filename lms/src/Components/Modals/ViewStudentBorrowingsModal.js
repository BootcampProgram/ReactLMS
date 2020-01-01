import React, { useEffect, useState } from 'react'; 
import '../../App.css';
import { Modal, Button, Container, Row, Table, Form} from 'react-bootstrap';

function ViewStudentBorrowingsModal(props){
    //States
    const [studentBorrowings, setStudentBorrowings] = useState([])

    // var presentBorrowings = [];
    // var pastBorrowings = [];

    useEffect(() => {

        fetch(`https://localhost:44381/api/Borrowing/Student/${props.studentId}`)
        .then(res => res.json())
        .then(data =>{
          setStudentBorrowings(data)
        })
    }, [props.studentId])

    console.log(studentBorrowings);

    // var Sstring = "B";

    // var presentBorrowings = studentBorrowings.filter((b) => b.status.includes(Sstring));

    // pastBorrowings = studentBorrowings.filter(B => B.status === "R");

    return(
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg" centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Borrowings of Student {`S00${props.studentId}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="show-grid">
            <Form.Label className="font-weight-bold" column>Current Borrowings</Form.Label>
            <Table striped bordered hover size="sm" className="mt-2 mx-auto" style={{width:"97%"}}> 
              <thead>
                  <tr>
                    <th>Book Detail</th>
                    <th>Borrowed Date</th>
                    <th>Return Date</th>
                  </tr>
              </thead>
              <tbody>
              {/* {studentBorrowings.map(borrowing =>
                  <tr>
                    <td>{`S00${borrowing.bookDetailID}`}: {borrowing.title}</td>
                    <td>{borrowing.borrowDate}</td>
                    <td style={{color:"red"}}>{borrowing.returnDate}</td>
                  </tr>
              )} */}
              </tbody>
          </Table>
          </Row>
          {studentBorrowings.length===0 && <h6 className= "text-center" style={{color:"grey"}}>No Current Borrowings</h6>}
        </Container>
        

        <Container >
          <Row className="show-grid">
            <Form.Label className="font-weight-bold" column>Borrowings History</Form.Label>
            <Table striped bordered hover size="sm" className="mt-2 mx-auto" style={{width:"97%"}}> 
              <thead>
                  <tr>
                    <th>Book Detail</th>
                    <th>Borrowed Date</th>
                    <th>Return Date</th>
                  </tr>
              </thead>
              <tbody>
              {/* {studentBorrowings.map(borrowing =>
                  <tr>
                    <td>{`S00${borrowing.bookDetailID}`}: {borrowing.title}</td>
                    <td>{borrowing.borrowDate}</td>
                    <td>{borrowing.returnDate}</td>
                  </tr>
              )} */}
              </tbody>
          </Table>
          </Row>
          {studentBorrowings.length===0 && <h6 className= "text-center" style={{color:"grey"}}>No Borrowings History</h6>}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default ViewStudentBorrowingsModal;