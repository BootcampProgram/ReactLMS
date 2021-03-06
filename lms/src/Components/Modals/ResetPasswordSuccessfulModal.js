import React from 'react'; 
import '../../App.css';
import { Modal, Button, Container, Row, Col} from 'react-bootstrap';

function ResetPasswordSuccessfulModal(props){
    return(
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" style={{fontSize: "18px"}} className="p-1">
      Password reset is {props.respondmessage}!
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Container>
        <Row className="show-grid, text-right mt-3">
          <Col>
          <Button variant="primary" size="md" onClick={props.onHide}>Ok</Button>
          </Col>
        </Row>
      </Container>
    </Modal.Body>
  </Modal>
    )
}

export default ResetPasswordSuccessfulModal;