import React, {useState } from 'react'; 
import '../../App.css';
import { Modal, Button, Container, Row, Col} from 'react-bootstrap';

function DeleteBookConfirmationModal({selecteddeletebookid, setrefreshtable, refreshtable, ...props}) {

    const deleteStudent = () => {
        fetch(`https://localhost:44381/api/book/${selecteddeletebookid}`, {
            method: 'DELETE'
        }).then(() => {
            setrefreshtable(refreshtable===0? 1 : 0);
        })
    }
    return(
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" style={{fontSize: "18px"}} className="p-1">
    Do you want to delete book {`B00${selecteddeletebookid}`}? 
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
            <Row className="show-grid, text-right">
                <Col>
                <Button 
                    variant="primary" className="mr-3" size="md" 
                    onClick={() => {deleteStudent(); props.onHide();}}
                    >Yes
                </Button>
                <Button variant="secondary" size="md" onClick={props.onHide}>No</Button>
                </Col>
            </Row>
            </Container>
        </Modal.Body>
        </Modal>
    )
}

export default DeleteBookConfirmationModal;