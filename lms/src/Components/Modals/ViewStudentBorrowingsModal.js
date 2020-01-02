import React, { useEffect, useState } from 'react'; 
import '../../App.css';
import { Modal, Button, Container, Row, Table, Form} from 'react-bootstrap';

function ViewStudentBorrowingsModal(props){
    //States
    const [studentBorrowings, setStudentBorrowings] = useState([])

    var presentBorrowings = [];
    var pastBorrowings = [];

    useEffect(() => {

        fetch(`https://localhost:44381/api/borrowing/student/${props.studentid}`)
        .then(res => res.json())
        .then(data =>{
          setStudentBorrowings(data)
        })
    }, [props.studentid])

    presentBorrowings = studentBorrowings.filter(B => B.status === "B");

    pastBorrowings = studentBorrowings.filter(B => B.status === "R");

    return(
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg" centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Borrowings of Student {`S00${props.studentid}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="show-grid">
            <Form.Label className="font-weight-bold" column>Current Borrowings</Form.Label>
            <Table striped bordered hover size="sm" className="mt-2 mx-auto" style={{width:"97%"}}> 
              <thead>
                  <tr>
                    <th>Borrowing ID</th>
                    <th>Book Detail</th>
                    <th>Borrowed Date</th>
                    <th>Return Date</th>
                  </tr>
              </thead>
              <tbody>
              {presentBorrowings.map(borrowing =>
                  <tr key={borrowing.borrowingId}>
                    <td>{`BR0${borrowing.borrowingId}`}</td>
                    <td>{`BD0${borrowing.bookDetailID}`}: {borrowing.title}</td>
                    <td>{borrowing.borrowDate === undefined ? borrowing.borrowDate : borrowing.borrowDate.substring(0,10)}</td>
                    <td style={{color:"red"}}>{borrowing.returnDate === undefined ?  borrowing.returnDate : borrowing.returnDate.substring(0,10)}</td>
                  </tr>
              )}
              </tbody>
          </Table>
          </Row>
          {presentBorrowings.length===0 && <h6 className= "text-center" style={{color:"grey"}}>No Current Borrowings</h6>}
        </Container>
        

        <Container >
          <Row className="show-grid">
            <Form.Label className="font-weight-bold" column>Borrowings History</Form.Label>
            <Table striped bordered hover size="sm" className="mt-2 mx-auto" style={{width:"97%"}}> 
              <thead>
                  <tr>
                    <th>Borrowing ID</th>
                    <th>Book Detail</th>
                    <th>Borrowed Date</th>
                    <th>Return Date</th>
                  </tr>
              </thead>
              <tbody>
              {pastBorrowings.map(borrowing =>
                  <tr key={borrowing.borrowingId}>
                    <td>{`BR0${borrowing.borrowingId}`}</td>
                    <td>{`BD0${borrowing.bookDetailID}`}: {borrowing.title}</td>
                    <td>{borrowing.borrowDate === undefined ? borrowing.borrowDate : borrowing.borrowDate.substring(0,10)}</td>
                    <td>{borrowing.returnDate === undefined ?  borrowing.returnDate : borrowing.returnDate.substring(0,10)}</td>
                  </tr>
              )}
              </tbody>
          </Table>
          </Row>
          {pastBorrowings.length===0 && <h6 className= "text-center" style={{color:"grey"}}>No Borrowings History</h6>}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default ViewStudentBorrowingsModal;