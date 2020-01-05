import React, { useState } from 'react';
import '../../App.css';
import ShowNewBookIdModal from './ShowNewBookIdModal'
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';

function AddNewBookModal({setisnumber, ...props}) {

    const [newBookModalShow, setNewBookModalShow] = useState(false);
    const [generatedBookId, setGeneratedBookId] = useState(0);

    var isBookFound = props.bookstablelist.filter(book => book.isbn === props.isbnnumber);

    var detailId = 0;

    const generateBookId = () => {
        fetch("https://localhost:44381/api/bookIdentification/new", {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "detailId":detailId,
	            "status":"1"
            })
        })
        .then(() => {
            return fetch(`https://localhost:44381/api/bookIdentification/new/${detailId}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                },
                redirect: 'follow'
                });
            
            })
        .then(response => response.text())
        .then(result => setGeneratedBookId(result))
        .catch(error => console.log('error', error));
    }

    // const getNewBookId = (bookDetailid) => {
    //     console.log("I'm in: " + bookDetailid);
        
    // }
    console.log("id: " + generatedBookId)
    return(
        <>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Book
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                <Row className="show-grid">
                    <Form.Label>Enter Book ISBN Number</Form.Label>
                    <Form.Control placeholder="Enter ISBN" onChange={event => setisnumber(event.target.value)}/>
                    <Form.Text className="text-muted">
                        This book may already in database.
                    </Form.Text>
                </Row>
                <Row>
                    {isBookFound.length === 1 && 
                        <Container className="pl-0">
                            <Row>
                                <Col>
                                    <p className="font-italic">suggestion:</p>
                                </Col>
                            </Row>
                            {isBookFound.map(c => {
                                detailId = c.detailID;
                                return(
                                <Row key={c.title}>
                                    <Col md={8} className="my-auto">
                                        <h5 className="my-auto">{c.title}</h5>
                                    </Col>
                                    <Col className="text-right my-auto pr-0">
                                        <Button variant="success" size="sm" onClick={() => {props.onHide(); generateBookId(); setNewBookModalShow(true)}}>Generate Book Id</Button>
                                    </Col>
                                </Row>)
                                }
                            )}
                            
                        </Container>
                    }
                </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Add New</Button>
                <Button variant="dark" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
            <ShowNewBookIdModal show={newBookModalShow} onHide={() => setNewBookModalShow(false)} generatedbookid={generatedBookId} />
        </>
    );
}

export default AddNewBookModal;