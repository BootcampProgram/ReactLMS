import React from 'react';
import '../App.css';
import { Form, Container, Row, Col } from 'react-bootstrap';

function Reservationfilters() {
    return(
        <Container fluid className="mt-4">
            <Row>
                <Col md={6}>
                    <Row>
                        <Col>
                        <Form.Control as="select">
                            <option disabled selected hidden>Filter By Reservation Status</option>
                            <option>Active</option>
                            <option>Expired</option>
                            <option>Canceled</option>
                        </Form.Control>
                        </Col>
                        <Col>
                        <Form.Control as="select">
                            <option disabled selected hidden>Filter By Shelves</option>
                            <option>Main Shelf</option>
                            <option>Sub Shelf</option>
                        </Form.Control>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Reservationfilters;