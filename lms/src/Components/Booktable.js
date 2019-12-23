import React, { useState, useEffect } from 'react';
import '../App.css';
import { Table, Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { AiTwotoneDelete } from 'react-icons/ai';

function Booktable() {

const [listBooks, setlistBooks] = useState([]);

useEffect(() => {

    fetch("https://localhost:44381/api/book")
    .then(c => c.json())
    .then(c => {
        setlistBooks(c)
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
            {listBooks.map(y => 
                <tr key = {y.detailID}>
                    <td>{`BD0${y.detailID}`}</td>
                    <td style={{fontWeight:"bold"}}>{y.title}</td>
                    <td>{y.isbn}</td>
                    <td>{y.shelveCode}</td>
                    <td>{y.availability}</td>
                    <td><Button variant="success" size="sm">View</Button></td>
                    <td className="text-center">
                        <a href="#bookedit" className="mr-4"><FaEdit /></a>
                        <a href="#bookdelete"><AiTwotoneDelete /></a>
                    </td>
                </tr>
                    )}
            </tbody>
        </Table>
      </>
    );
  }
  
export default Booktable;