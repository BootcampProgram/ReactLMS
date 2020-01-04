import React, { useState } from 'react';
import '../App.css';
import { Form, Container, Row, Col } from 'react-bootstrap';

function Reservationfilters(props) {
    //States
    const [reservationStatus, setReservationStatus] = useState("");
    const [shelve, setShelve] = useState("");

    return(
        <Container fluid className="mt-4">
            <Row>
                <Col md={6}>
                    <Row>
                        <Col>
                        <Form.Control as="select" onChange={event => setReservationStatus(event.target.value)} onClick={props.onselectstatus(reservationStatus)}>
                            <option disabled selected hidden>Filter By Reservation Status</option>
                            <option value="">--All Reservation Status--</option>
                            <option value="Active">Active</option>
                            <option value="Expired">Expired</option>
                            <option value="Canceled">Canceled</option>
                        </Form.Control>
                        </Col>
                        <Col>
                        <Form.Control as="select" onChange={event => setShelve(event.target.value)} onClick={props.onselectshelve(shelve)}>
                            <option disabled selected hidden>Filter By Shelves</option>
                            <option value="">--All Shelves--</option>
                            <option value="Main">Main Shelve</option>
                            <option value="Sub">Sub Shelve</option>
                        </Form.Control>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Reservationfilters;