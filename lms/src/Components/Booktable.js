import React, { useState, useEffect, useCallback } from 'react';
import '../App.css';
import { Table, Button, Alert } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { AiTwotoneDelete } from 'react-icons/ai';
import ViewBooksModal from './Modals/ViewBooksModal'
import DeleteBookConfirmationModal from './Modals/DeleteBookConfirmationModal'

function Booktable({refresh, ...props}) {
//States
const [listBooks, setlistBooks] = useState([]);
const [modalShow, setModalShow] = useState(false);
const [bookid, setbookid] = useState("");
const [bookDetail, setBookDetail] = useState([]);
const [deleteModalShow, setDeleteModalShow] = useState(false);
const [selectedDeleteBookId, setSelectedDeleteBookId] = useState("");
const [refreshTable, setRefreshTable] = useState(0)

//Filter books on search string
var filteredBooks = listBooks.filter(c => 
    c.title.toLowerCase().includes(props.searchString.toString().toLowerCase()) 
    || c.isbn.includes(props.searchString));

props.setTableData(listBooks);

const onBookView = useCallback((input) => {
    setBookDetail(input)
},[])

useEffect(() => {
    fetch("https://localhost:44381/api/book")
    .then(res => res.json())
    .then(data => {
        setlistBooks(data);
    })
}, [refresh, refreshTable])

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
                    <td className="font-weight-bold">{y.title}</td>
                    <td>{y.isbn}</td>
                    <td>{y.shelveCode}</td>
                    <td>
                        {y.availability === "Yes" && <p style={{color:"green", margin:"0"}}>Yes</p>}
                        {y.availability === "No" && <p style={{color:"gray", margin:"0"}}>No</p>}
                        {y.availability === "Not Available" && <p style={{color:"red", margin:"0"}}>Not Available</p>}
                    </td>
                    <td><Button variant="success" size="sm" onClick={() => {setModalShow(true); setbookid(y.detailID)}}>View</Button></td>
                    <td className="text-center">
                        <a href="#bookedit" className="mr-4 Black" title="Edit Book"><FaEdit /></a>
                        {/* <Button><AiTwotoneDelete /></Button> */}
                        <a href="#" className="Black" title="Delete Book" onClick={() => {setDeleteModalShow(true); setSelectedDeleteBookId(y.detailID);}}><AiTwotoneDelete /></a>
                    </td>
                </tr>
                    )}
            </tbody>
        </Table>
        {filteredBooks.length === 0 && 
            <Alert variant="success" className="text-center m-4">
                No Data Found For This Search
            </Alert>
        }
        <ViewBooksModal show={modalShow} onHide={() => {setModalShow(false); setBookDetail([]); setbookid("");}} bookid={bookid} bookview={onBookView} bookdetail={bookDetail}/>
        <DeleteBookConfirmationModal show={deleteModalShow} onHide={() => setDeleteModalShow(false)} selecteddeletebookid={selectedDeleteBookId} setrefreshtable={setRefreshTable} refreshtable={refreshTable} bookdetail={bookDetail}/>
      </>
    );
  }
  
export default Booktable;