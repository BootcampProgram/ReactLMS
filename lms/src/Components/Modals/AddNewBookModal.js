import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';

function AddNewBookModal(props) {
    //States
    const [bookFound, setBookFound] = useState([]);
    console.log(props.bookstablelist);
    //console.log(isbnNumber)

    var isBookFound = props.bookstablelist.filter(book => book.isbn === props.isbnnumber);
    console.log("ISBN: "+props.isbnnumber)
    console.log(isBookFound)

    // const onMyClick = () => {
    //     setIsbnNumber("");
    // }
    return(
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
                <Form.Control placeholder="Enter ISBN" onChange={event => props.setisnumber(event.target.value)}/>
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
                        {isBookFound.map(c => 
                        <Row key={c.title}>
                            <Col md={8} className="my-auto">
                                <h5 className="my-auto">{c.title}</h5>
                            </Col>
                            <Col className="text-right my-auto pr-0">
                                <Button variant="success" size="sm">Generate Book Id</Button>
                            </Col>
                        </Row>
                         
                        )}
                        
                    </Container>
                }
            </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            <Button variant="dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default AddNewBookModal;