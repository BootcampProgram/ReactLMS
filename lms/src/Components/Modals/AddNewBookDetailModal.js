import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';
import {IoMdAdd} from "react-icons/io";
import {FiMinus} from "react-icons/fi";

function AddNedBookDetailModal(props) {

    const [authorList, setAuthorList] = useState([]);

    useEffect(() => {

        fetch("https://localhost:44381/api/author")
        .then(res => res.json())
        .then(data => {
            setAuthorList(data);
        })
    },[])

    return(
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered size="xl">
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            New Book Detail
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Form>
                    <Form.Group as={Row} controlId="Title">
                        <Form.Label column sm="2">
                        Title
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control type="text" placeholder="Enter Title" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="Author">
                        <Form.Label column sm="2">
                        Author(s)
                        </Form.Label>
                        <Col sm="3">
                        <Form.Control type="text" placeholder="Search Author Name" list="browsers"/>
                        <datalist id="browsers">
                            {authorList.map(author => 
                                <option key={author.authortId} value={author.name}/>
                            )}
                        </datalist>
                        </Col>
                        <Col sm="1">
                        <Button variant="outline-dark"><IoMdAdd/></Button>
                        </Col>
                        <Col sm="3">
                        <Form.Control type="text" placeholder="Selcted Authors"/>
                        </Col>
                        <Col>
                        <Button variant="outline-dark"><FiMinus/></Button>
                        </Col>
                        <Col>
                        <Button variant="secondary">Add new</Button>
                        </Col>

                    </Form.Group>
                </Form>
            </Container>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>

    );
}

export default AddNedBookDetailModal;
