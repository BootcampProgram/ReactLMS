import React, { useEffect, useState } from 'react'; 
import '../App.css';
import { Table, Button} from 'react-bootstrap';

function Studenttable (props){

    //States
    const [listStudents, setListStudents] = useState([]);

    var searchStudent = listStudents.filter(student => 
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
        <Table striped bordered hover size="sm" className="mt-3 mx-auto" style={{width:"97%"}}> 
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
                    <td><Button size="sm" style={{color:"white", backgroundColor:"orange", borderStyle:"none"}}>Borrowings</Button></td>
                    <td><Button variant="success" size="sm">View</Button></td>
                    <td><Button variant="primary" size="sm">Payments</Button></td>
                    <td><Button variant="danger" size="sm">Block</Button></td>
                    <td><Button variant="secondary" size="sm">Reset Password</Button></td>
                </tr>
                )}
             </tbody>
        </Table>
        {searchStudent.length===0 && <h3 className= "text-center">Data Not Found</h3>}
        </>
    );
}

export default Studenttable;