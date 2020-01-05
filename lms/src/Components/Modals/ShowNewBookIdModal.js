import React from 'react';
import '../../App.css';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

function ShowNewBookIdModal({generatedbookid, ...props}) {

    return(
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="sm">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className="h6">
                New Generated Book ID
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                <Row className="show-grid">
                    <Col xs={12} md={12} className="h1 text-center">
                    {`B00${generatedbookid}`}
                    </Col>
                </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} size="sm">Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ShowNewBookIdModal;