import React, { useState, useEffect } from 'react';
import '../App.css';
import { Table, Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { AiTwotoneDelete } from 'react-icons/ai';
import ViewBooksModal from './Modals/ViewBooksModal'

function Booktable(props) {
//States
const [listBooks, setlistBooks] = useState([]);
const [modalShow, setModalShow] = useState(false);
const [bookid, setbookid] = useState([]);

//Filter books on search string
var filteredBooks = listBooks.filter(c => 
    c.title.toLowerCase().includes(props.searchString.toString().toLowerCase()) 
    || c.isbn.includes(props.searchString));

useEffect(() => {

    fetch("https://localhost:44381/api/book")
    .then(res => res.json())
    .then(data => {
        setlistBooks(data)
    })

}, [])

    return (
      <>
        <Table striped bordered hover className="mt-3 mx-auto" style={{width:"97%"}} size="sm">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>ISBN No</th>
                    <th>Shelve</th>
                    <th>Availability</th>
                    <th>More Details</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
            {filteredBooks.map(y => 
                <tr key = {y.detailID}>
                    <td>{`BD0${y.detailID}`}</td>
                    <td style={{fontWeight:"bold"}}>{y.title}</td>
                    <td>{y.isbn}</td>
                    <td>{y.shelveCode}</td>
                    <td>{y.availability}</td>
                    <td><Button variant="success" size="sm" onClick={() => {setModalShow(true); setbookid(y.detailID)}}>View</Button></td>
                    <td className="text-center">
                        <a href="#bookedit" className="mr-4"><FaEdit /></a>
                        <a href="#bookdelete"><AiTwotoneDelete /></a>
                    </td>
                </tr>
                    )}
            </tbody>
        </Table>
        {filteredBooks.length === 0 && <h1 className="text-center">Data not Found</h1>}
        <ViewBooksModal show={modalShow} onHide={() => setModalShow(false)} bookid={bookid}/>
      </>
    );
  }
  
export default Booktable;