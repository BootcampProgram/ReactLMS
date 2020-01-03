import React, { useEffect, useState } from 'react'; 
import '../../App.css';
import { Modal, Button, Container, Row, Col, Table, Form} from 'react-bootstrap';
import ResetPasswordSuccessfulModal from './ResetPasswordSuccessfulModal'

function ResetPasswordModal(props){
  
  //const [ResetPassword, setResetPassword] = useState([])
  const [ResetPasswordSuccessfulModalShow, setResetPasswordSuccessfulModalShow] = useState(false);

//   useEffect(() => {

//     fetch(`https://localhost:44381/api/borrowing/student/${props.studentid}`)
//     .then(res => res.json())
//     .then(data =>{
//       setResetPassword(data)
//     })
// }, [props.studentid])

const successModal = () => {
  setResetPasswordSuccessfulModalShow(true);
  //ResetPasswordModal(false)
};

  return(
    <>
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" style={{fontSize: "18px"}}>
        Are you sure you want to reset the password? {`S00${props.studentid}`}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Container>
        <Row className="show-grid, text-right mt-3">
          <Col>
            <Button variant="primary" className="mr-3" size="md" onClick={successModal}>Yes</Button>
            <Button variant="secondary" size="md" onClick={props.onHide}>No</Button>
          </Col>
        </Row>
      </Container>
    </Modal.Body>
  </Modal>
  <ResetPasswordSuccessfulModal show={ResetPasswordSuccessfulModalShow} onHide={() => setResetPasswordSuccessfulModalShow(false)}/>
  </>
  );
}

export default ResetPasswordModal;