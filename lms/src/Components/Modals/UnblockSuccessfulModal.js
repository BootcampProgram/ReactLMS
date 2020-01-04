import React from 'react'; 
import '../../App.css';
import { Modal, Button, Container, Row, Col} from 'react-bootstrap';

function UnblockSuccessfulModal(props){
    return(
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" style={{fontSize: "18px"}} className="p-1">
        {props.respondmessage}ly Unblocked! 
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

export default UnblockSuccessfulModal;