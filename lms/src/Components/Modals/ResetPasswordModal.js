import React, {useState } from 'react'; 
import '../../App.css';
import { Modal, Button, Container, Row, Col} from 'react-bootstrap';
import ResetPasswordSuccessfulModal from './ResetPasswordSuccessfulModal'

function ResetPasswordModal(props){
  
  const [ResetPasswordSuccessfulModalShow, setResetPasswordSuccessfulModalShow] = useState(false);
  const [studentId,setstudentId]= useState(props);
  const [respondMessage, setRespondMessage] = useState("");

const successModal = () => {
  props.onHide();
  setResetPasswordSuccessfulModalShow(true);
};

const resetPassword = () => {
    fetch(`https://localhost:44381/api/student/reset/${props.studentid}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
         },
         body: JSON.stringify()
    })
        .then(res => {
          if(res.status === 200){
            setRespondMessage("Successful");
            return [];
          }else{
            setRespondMessage("Unsuccessful");
            res.json();
          }})
        .catch(error => {
            console.log(error)
        })
}

  return(
    <>
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" style={{fontSize: "18px"}} className="p-1">
        Are you sure you want to reset the password of  student {`S00${props.studentid}`}? 
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Container>
        <Row className="show-grid, text-right mt-3">
          <Col>
            <Button variant="primary" className="mr-3" size="md" 
              onClick={() => {successModal(true); resetPassword() ; setstudentId(props.studentid)}}>Yes
            </Button>
            <Button variant="secondary" size="md" onClick={props.onHide}>No</Button>
          </Col>
        </Row>
      </Container>
    </Modal.Body>
  </Modal>
  <ResetPasswordSuccessfulModal show={ResetPasswordSuccessfulModalShow} onHide={() => setResetPasswordSuccessfulModalShow(false)} studentidd = {studentId} respondmessage={respondMessage}/>
  </>
  );
}

export default ResetPasswordModal;