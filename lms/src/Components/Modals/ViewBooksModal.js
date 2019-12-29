import React, { useEffect, useState } from 'react';
import '../../App.css';
import { Modal, Button, Container, Row, Col, Form, Image, Table } from 'react-bootstrap';

function ViewBooksModal(props) {
    //States
    const [bookDetail, setBookDetail] = useState([])

    var authorList;
    var copies;
    var coverImage;

    authorList = bookDetail.author;
    copies = bookDetail.copies;
    coverImage = bookDetail.coverImage;

    if(authorList === undefined){
        authorList = [];
    }
    
    if(copies === undefined){
        copies = [];
    }

    if(coverImage === undefined || coverImage === null){
        coverImage = 'Default.jpg';
    }

    //bookDetail.author = [];
    useEffect(() => {

        fetch(`https://localhost:44381/api/book/${props.bookid}`)
        .then(res => res.json())
        .then(data =>{
            setBookDetail(data)
        })

    }, [props.bookid])

    

    return (

        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg" centered scrollable>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Details of Book {`BD0${props.bookid}`}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                <Row className="show-grid">
                    <Col md={5} className="text-center">
                        <Image src={require(`../../Coverimages/${coverImage}`)} thumbnail/>
                    </Col>
                    <Col md={7}>
                        <Row>
                            <Form.Label className="font-weight-bold" column>Title</Form.Label>
                            <Col className="my-auto">{bookDetail.title}</Col>
                        </Row>
                        <Row>
                            <Form.Label className="font-weight-bold" column> Author(s)</Form.Label>
                            <Col className="my-auto">
                            {authorList.map(aut => 
                                <Row key={aut}>
                                    <Col>{aut}</Col>
                                </Row>
                                )}
                            </Col>
                        </Row>
                        <Row>
                            <Form.Label className="font-weight-bold" column>ISBN</Form.Label>
                            <Col className="my-auto">{bookDetail.isbn}</Col>
                        </Row>
                        <Row>
                            <Form.Label className="font-weight-bold" column>Publisher</Form.Label>
                            <Col className="my-auto">{bookDetail.publisher}</Col>
                        </Row>
                        <Row>
                            <Form.Label className="font-weight-bold" column>Genre</Form.Label>
                            <Col className="my-auto">{bookDetail.genre}</Col>
                        </Row>
                        <Row>
                            <Form.Label className="font-weight-bold" column>Shelve</Form.Label>
                            <Col className="my-auto">{bookDetail.shelve}</Col>
                        </Row>
                        <Row>
                            <Form.Label className="font-weight-bold" column>Language</Form.Label>
                            <Col className="my-auto">{bookDetail.language}</Col>
                        </Row>
                        <Row>
                            <Form.Label className="font-weight-bold" column>Published Year</Form.Label>
                            <Col className="my-auto">{bookDetail.year}</Col>
                        </Row>
                        <Row>
                            <Form.Label className="font-weight-bold" column>Price</Form.Label>
                            <Col className="my-auto">LKR {bookDetail.price}</Col>
                        </Row>
                        <Row>
                            <Form.Label className="font-weight-bold" column>No.of Copies</Form.Label>
                            <Col className="my-auto">{copies.length}</Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="show-grid">
                <Table striped bordered hover size="sm" className="mt-3">
                    <thead>
                        <tr>
                        <th>Book ID</th>
                        <th>Current status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {copies.map(book => 
                            <tr key={book.bookID}>
                            <td>{`B00${book.bookID}`}</td>
                            <td>
                                {book.status === "Borrowed" && <p className="Borrowed">Borrowed</p>}
                                {book.status === "Reserved" && <p className="Reserved">Reserved</p>}
                                {book.status === "Mispelled" && <p className="Mispelled">Mispelled</p>}
                                {book.status === "Available" && <p className="Available">Available</p>}
                            </td>
                            </tr>
                            )}
                    </tbody>
                </Table>
                {copies.length === 0 && <p>Not Available Any Books!</p>}
                </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

    );
}

export default ViewBooksModal;