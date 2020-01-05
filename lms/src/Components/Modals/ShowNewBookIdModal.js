import React, { useEffect } from 'react';
import '../../App.css';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

function ShowNewBookIdModal({detailid, ...props}) {

    var newBookId = 0;

    return(
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                New Generated Book ID
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                    {`B00${newBookId}`}
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

export default ShowNewBookIdModal;