import React, { useEffect, useState } from 'react'; 
import '../App.css';
import { Table, Button} from 'react-bootstrap';
import ViewStudentBorrowingsModal from './Modals/ViewStudentBorrowingsModal'
import ViewStudentDetailsModal from './Modals/ViewStudentDetailsModal';
import ViewStudentPaymentModal from './Modals/ViewStudentPaymentModal';

function Studenttable(props) {

    var defaultStudentId;
    //States
    const [listStudents, setListStudents] = useState([]);
    const [borrowingsModalShow, setBorrowingsModalShow] = useState(false);
    const [ViewStudentModalShow, setViewStudentModalShow] = useState(false);
    const [studentId,setstudentId]= useState("1");
    const [ViewPaymentModalShow, setViewPaymentModalShow] = useState(false);

    var searchStudent = listStudents.filter(student => 
        student.fullName.toLowerCase().includes(props.searchString.toString().toLowerCase())
        )

        var Payment = listStudents.filter(student => 
            student.fullName.toLowerCase().includes(props.searchString.toString().toLowerCase())
            )

     useEffect (() => {

        fetch("https://localhost:44381/api/student")
            .then(res => res.json())
            .then(data => {
                setListStudents(data)
            })
        
    },[])

    return(
        <>
        <Table striped bordered hover size="sm" className="mt-4 mx-auto" style={{width:"97%"}}> 
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Borrowings</th>
                    <th>More Details</th>
                    <th>Payment</th>
                    <th>Block/Unblock</th>
                    <th>Reset Password</th>
                </tr>
            </thead>
            <tbody>
                {searchStudent.map(student =>
                <tr key={student.studentId}>
                    <td>{`S00${student.studentId}`}</td>
                    <td className="font-weight-bold">{student.fullName}</td>
                    <td><Button size="sm" style={{color:"white", backgroundColor:"orange", borderStyle:"none"}} onClick={() => {setBorrowingsModalShow(true); setstudentId(student.studentId)}}>Borrowings</Button></td>
                    <td><Button variant="success" size="sm" onClick={() => {setViewStudentModalShow(true); setstudentId(student.studentId)}}>View</Button></td>
                    <td><Button variant="primary" size="sm"  onClick={() => {setViewPaymentModalShow(true); setstudentId(student.studentId)}}>Payments</Button></td>
                    <td><Button variant="danger" size="sm">Block</Button></td>
                    <td><Button variant="secondary" size="sm">Reset Password</Button></td>
                </tr>
                )}
             </tbody>
        </Table>
        {searchStudent.length===0 && <h3 className= "text-center">Data Not Found</h3>}
        {Payment.length===0 && <h3 className= "text-center">Data Not Found</h3>}
        <ViewStudentBorrowingsModal show={borrowingsModalShow} onHide={() => setBorrowingsModalShow(false)} studentid = {studentId}/>
        <ViewStudentDetailsModal show={ViewStudentModalShow} onHide={()=> setViewStudentModalShow(false)} studentid = {studentId}/>
        <ViewStudentPaymentModal show={ViewPaymentModalShow} onHide={() => setViewPaymentModalShow(false)} studentid = {studentId}/>
        </>
    );
}

export default Studenttable;