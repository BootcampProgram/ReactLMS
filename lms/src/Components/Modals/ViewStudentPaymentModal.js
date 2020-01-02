import React, { useState ,useEffect} from 'react';
import '../../App.css';
import { Button, Modal,Table } from 'react-bootstrap';

function ViewStudentPaymentModal(props){

  const [studentPayment, setStudentPayment] = useState([])
  

  useEffect(() => {

    fetch(`https://localhost:44381/api/payment/${props.studentid}`)
    .then(res => res.json())
    .then(data =>{
      setStudentPayment(data)
    })
    }, [props.studentid])


    return(
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Payment of students {`S00${props.studentid}`} 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Table striped bordered hover size="sm">
              <thead>
                <th>Borrowing ID</th>
                <th>Return Date</th>
                <th>Overdue Payment</th>
              </thead>
              <tbody>
                {studentPayment.map(payment =>
                  <tr key={payment.borrowingId}>
                    <td>{`BR0${payment.borrowingId}`}</td>
                    <td>{`${payment.returnDate === undefined ? payment.returnDate : payment.returnDate.substring(0,10) }`} </td>
                    <td>{`${payment.duePayment}/=`}</td>
                  </tr>
                  )}
                
              </tbody>
              
            </Table>
            {studentPayment.length === 0 && <h6 className= "text-center" style={{color:"grey"}}>Not any Payments Found</h6>}
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}
export default ViewStudentPaymentModal;