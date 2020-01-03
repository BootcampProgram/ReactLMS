import React, { useEffect, useState } from 'react'; 
import '../App.css';
import { Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
import { IoMdClose } from 'react-icons/io';

function ReservationsTable(props) {
    //States
    const [listReservations, setlistReservations] = useState([]);

    var filteredList = [];

    if(props.parentreservationstatus==="" && props.parentshelve==="")
    {
        filteredList = listReservations;
    }
    else if(props.parentreservationstatus!=="" && props.parentshelve==="")
    {
        filteredList = listReservations.filter(R => 
            R.status === props.parentreservationstatus);
    }
    else if(props.parentreservationstatus==="" && props.parentshelve!=="")
    {
        filteredList = listReservations.filter(R => 
            R.shelve === props.parentshelve);
    }
    else if(props.parentreservationstatus!=="" && props.parentshelve!=="")
    {
        filteredList = listReservations.filter(R => 
            R.status === props.parentreservationstatus && 
            R.shelve === props.parentshelve);
    }


    useEffect(() => {
    
        fetch("https://localhost:44381/api/reservation")
        .then(res => res.json())
        .then(data => {
            setlistReservations(data)
        })
    }, [])

    return(
        <>
        {filteredList.map(Reservations => 
            <Container className="mt-3 mb-4 shadow rounded" style={{backgroundColor:"#ededed"}} key={Reservations.reservationID}>
                <Row>
                    {/* Image section */}
                    <Col md={2}  className="my-auto">
                        <Image src={require(`../Coverimages/${Reservations.coverImage === undefined || Reservations.coverImage === null? 'Default.jpg' : Reservations.coverImage}`)} thumbnail style={{width:"100px"}}/>
                    </Col>
                    {/* Book detail section */}
                    <Col md={3} >
                        <Row>
                            <Form.Label className="font-weight-bold text-left" column>{`BD0${Reservations.bookID}`}: {Reservations.title}</Form.Label>
                        </Row>
                        <Row>
                            <Col className="text-left" md={3}><small>Author:</small></Col>
                            <Col className="text-left"><small>{Reservations.author}</small></Col>
                        </Row>
                        <Row>
                            <Col className="text-left" md={3}><small>ISBN:</small></Col>
                            <Col className="text-left"><small>{Reservations.isbn}</small></Col>
                        </Row>
                        <Row>
                            <Col className="text-left" md={3}><small>Genre:</small></Col>
                            <Col className="text-left"><small>{Reservations.genre}</small></Col>
                        </Row>
                        <Row>
                            <Col className="text-left" md={3}><small>Language:</small></Col>
                            <Col className="text-left"><small>{Reservations.language}</small></Col>
                        </Row>
                        <Row className="pb-2">
                            <Col className="text-left" md={3}><small>Shelve:</small></Col>
                            <Col className="text-left"><small>{Reservations.shelveCode}</small></Col>
                        </Row>
                    </Col>
                    {/* Student data section */}
                    <Col md={3} >
                        <Row>
                            <Form.Label className="font-weight-bold text-left invisible" column>Text Invisible</Form.Label>
                        </Row>
                        <Row>
                            <Col className="text-left" md={4}><small>Student ID:</small></Col>
                            <Col className="text-left pl-0"><small>{`S00${Reservations.studentId}`}</small></Col>
                        </Row>
                        <Row>
                            <Col className="text-left" md={4}><small>Name:</small></Col>
                            <Col className="text-left pl-0"><small>{Reservations.studentFullName}</small></Col>
                        </Row>
                        <Row>
                            <Col className="text-left" md={4}><small>Grade:</small></Col>
                            <Col className="text-left pl-0"><small>{Reservations.grade}</small></Col>
                        </Row>
                    </Col>
                    {/* Status with two button and close */}
                    <Col md={4} >
                        <Row>
                            <Col md={3} ></Col>
                            <Col>
                                <Row className="mt-2">
                                    <Form.Label className="font-weight-bold text-left" column md={3}>Status:</Form.Label>
                                    <Col className="text-left my-auto pl-3">
                                        {Reservations.status === "Active" && <p className="font-weight-bold" style={{color:"green", margin:"0"}}>Active</p>}
                                        {Reservations.status === "Expired" && <p className="font-weight-bold" style={{color:"red", margin:"0"}}>Expired</p>}
                                        {Reservations.status === "Canceled" && <p className="font-weight-bold" style={{color:"darkturquoise", margin:"0"}}>Canceled</p>}
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={1} className="pl-1 my-auto"><IoMdClose/></Col>
                        </Row>
                        {/* Created a gutter row */}
                        <Row style={{margin:"40px 0 40px 0"}}></Row>
                        <Row>
                            <Col className="mt-auto">
                                <Button variant="success" className="mr-4" size="sm"  disabled={Reservations.shelve !== "Main" || Reservations.shelve === "Sub"? true : false }>Add to Sub Shelf</Button>
                                <Button variant="danger" size="sm" disabled={Reservations.shelve === "Main" || Reservations.shelve !== "Sub"? true : false }>Retur to Main Shelf</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            )}
            {filteredList.length===0 && <h3>No Filtered Reservations Found</h3>}
        </>
    );
}
export default ReservationsTable;