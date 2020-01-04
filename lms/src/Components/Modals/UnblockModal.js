import React, {useState } from 'react'; 
import '../../App.css';
import { Modal, Button, Container, Row, Col} from 'react-bootstrap';
import UnblockSuccessfulModal from './UnblockSuccessfulModal'

function UnblockModal({setrefresh, ...props}){

  //Copying "props" object to "divProps" object
  const divProps = Object.assign({}, props);
  delete divProps.setrefresh;


  const [UnblockSuccessfulModalShow, setUnblockSuccessfulModalShow] = useState(false);
  const [studentId,setstudentId]= useState(props);
  const [respondMessage, setRespondMessage] = useState("");

  const successModal = () => {
    props.onHide();
    setUnblockSuccessfulModalShow(true);
  };

const  UnblockStudent = () => {
    fetch(`https://localhost:44381/api/student/Unblock/${props.studentid}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
         },
         body: JSON.stringify()
    })
        .then(res => {
          if(res.status === 200){
            setRespondMessage("Successful");
            return [];
          }else{
            setRespondMessage("Unsuccessful");
            res.json();
          }})
        .catch(error => {
            console.log(error)
        })
}

  return(
    <>
    <Modal {...divProps} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" style={{fontSize: "18px"}} className="p-1">
        Are you sure you want to Unblock student {`S00${props.studentid}`}? 
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Container>
        <Row className="show-grid, text-right mt-3">
          <Col>
            <Button variant="primary" className="mr-3" size="md" onClick={() => {successModal(true); UnblockStudent(); setrefresh(props.refresh===0? 1 : 0); setstudentId(props.studentid)}}>Yes</Button>
            <Button variant="secondary" size="md" onClick={props.onHide}>No</Button>
          </Col>
        </Row>
      </Container>
    </Modal.Body>
  </Modal>
  <UnblockSuccessfulModal show={UnblockSuccessfulModalShow} onHide={() => {setUnblockSuccessfulModalShow(false); setrefresh(props.refresh===0? 1 : 0);}} studentid = {studentId}  respondmessage={respondMessage}/>
  </>
  );
}

export default UnblockModal;