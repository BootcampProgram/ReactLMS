import React, { useEffect, useState } from 'react'; 
import '../App.css';
import { Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
import { IoMdClose } from 'react-icons/io';


function ReservationTable (props){
    return(
        <>
            <Container className="mt-3 pb-3" style={{backgroundColor:"#ededed"}}>
                <Row>
                    {/* Image section */}
                    <Col md={2} >Image</Col>
                    {/* Book detail section */}
                    <Col md={3} >
                        <Row>
                            <Form.Label className="font-weight-bold text-left" column>Title</Form.Label>
                        </Row>
                        <Row>
                            <Col className="text-left" md={3}><small>Author:</small></Col>
                            <Col className="text-left"><small>Data</small></Col>
                        </Row>
                        <Row>
                            <Col className="text-left" md={3}><small>ISBN:</small></Col>
                            <Col className="text-left"><small>Data</small></Col>
                        </Row>
                        <Row>
                            <Col className="text-left" md={3}><small>Genre:</small></Col>
                            <Col className="text-left"><small>Data</small></Col>
                        </Row>
                        <Row>
                            <Col className="text-left" md={3}><small>Language:</small></Col>
                            <Col className="text-left"><small>Data</small></Col>
                        </Row>
                        <Row>
                            <Col className="text-left" md={3}><small>Publisher:</small></Col>
                            <Col className="text-left"><small>Data</small></Col>
                        </Row>
                    </Col>
                    {/* Student data section */}
                    <Col md={3} >
                        <Row>
                            <Form.Label className="font-weight-bold text-left invisible" column>Text Invisible</Form.Label>
                        </Row>
                        <Row>
                            <Col className="text-left" md={4}><small>Student ID:</small></Col>
                            <Col className="text-left"><small>Data</small></Col>
                        </Row>
                        <Row>
                            <Col className="text-left" md={4}><small>Name:</small></Col>
                            <Col className="text-left"><small>Data</small></Col>
                        </Row>
                        <Row>
                            <Col className="text-left" md={4}><small>Grade:</small></Col>
                            <Col className="text-left"><small>Data</small></Col>
                        </Row>
                    </Col>
                    {/* Status with two button and close */}
                    <Col md={4} >
                        <Row>
                            <Col md={3} ></Col>
                            <Col>
                                <Row>
                                    <Form.Label className="font-weight-bold text-left" column md={3}>Status:</Form.Label>
                                    <Col className="text-left my-auto pl-1">Data</Col>
                                </Row>
                            </Col>
                            <Col md={1} className="pl-1 my-auto"><IoMdClose/></Col>
                        </Row>
                        {/* Created a gutter row */}
                        <Row className="my-5"></Row>
                        <Row>
                            <Col className="mt-auto">
                                <Button variant="success" className="mr-4" size="sm">Add to Sub Shelf</Button>
                                <Button variant="danger" size="sm">Retur to Main Shelf</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ReservationTable;