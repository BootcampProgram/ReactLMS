import React, { useEffect } from 'react';
import '../../App.css';
import { Modal, Button, Container, Row, Col, Form, Image, Table } from 'react-bootstrap';

function ViewBooksModal({bookview, bookid, ...props}) {
    //Copying "props" object to "divProps" object  
    const divProps = Object.assign({}, props);
    delete divProps.bookview;

    var authorList;
    var copies;
    var coverImage;

    console.log(props.bookdetail)

    authorList = props.bookdetail.author;
    copies = props.bookdetail.copies;
    coverImage = props.bookdetail.coverImage;

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

        fetch(`https://localhost:44381/api/book/${bookid}`)
        .then(res => res.json())
        .then(data =>{
            bookview(data)
        })
        console.log("Count")

    }, [bookid, bookview])

    

    return (

        <Modal {...divProps} aria-labelledby="contained-modal-title-vcenter" size="lg" centered scrollable>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Details of Book {`BD0${bookid}`}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                <Row className="show-grid">
                    <Col md={5} className="text-center my-auto">
                        <Image src={require(`../../Coverimages/${coverImage}`)} thumbnail/>
                    </Col>
                    <Col md={7}>
                        <Row>
                            <Form.Label className="font-weight-bold" column>Title</Form.Label>
                            <Col className="my-auto">{props.bookdetail.title}</Col>
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
                            <Col className="my-auto">{props.bookdetail.isbn}</Col>
                        </Row>
                        <Row>
                            <Form.Label className="font-weight-bold" column>Publisher</Form.Label>
                            <Col className="my-auto">{props.bookdetail.publisher}</Col>
                        </Row>
                        <Row>
                            <Form.Label className="font-weight-bold" column>Genre</Form.Label>
                            <Col className="my-auto">{props.bookdetail.genre}</Col>
                        </Row>
                        <Row>
                            <Form.Label className="font-weight-bold" column>Shelve</Form.Label>
                            <Col className="my-auto">{props.bookdetail.shelve}</Col>
                        </Row>
                        <Row>
                            <Form.Label className="font-weight-bold" column>Language</Form.Label>
                            <Col className="my-auto">{props.bookdetail.language}</Col>
                        </Row>
                        <Row>
                            <Form.Label className="font-weight-bold" column>Published Year</Form.Label>
                            <Col className="my-auto">{props.bookdetail.year}</Col>
                        </Row>
                        <Row>
                            <Form.Label className="font-weight-bold" column>Price</Form.Label>
                            <Col className="my-auto">LKR {props.bookdetail.price}</Col>
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
                                {book.status === "Misplaced" && <p className="Misplaced">Misplaced</p>}
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