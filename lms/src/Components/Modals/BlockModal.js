import React, {useState } from 'react'; 
import '../../App.css';
import { Modal, Button, Container, Row, Col} from 'react-bootstrap';
import BlockSuccessfulModal from './BlockSuccessfulModal'

function BlockModal({setrefresh, ...props}){
  //Copying "props" object to "divProps" object
  const divProps = Object.assign({}, props);
  delete divProps.setrefresh;

  const [BlockSuccessfulModalShow, setBlockSuccessfulModalShow] = useState(false);
  const [studentId,setstudentId]= useState(props);
  const [respondMessage, setRespondMessage] = useState("");

  const successModal = () => {
    props.onHide();
    setBlockSuccessfulModalShow(true);
  };
  
  const blockStudent = () => {
      fetch(`https://localhost:44381/api/student/block/${props.studentid}`, {
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
          Are you sure you want to block student {`S00${props.studentid}`}? 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className="show-grid, text-right">
            <Col>
              <Button 
                variant="primary" className="mr-3" size="md" 
                onClick={() => {successModal(true); blockStudent(); setrefresh(props.refresh===0? 1 : 0); setstudentId(props.studentid)}}
                >Yes
              </Button>
              <Button variant="secondary" size="md" onClick={props.onHide}>No</Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
    <BlockSuccessfulModal show={BlockSuccessfulModalShow} onHide={() => {setBlockSuccessfulModalShow(false); setrefresh(props.refresh===0? 1 : 0);}} studentid = {studentId}  respondmessage={respondMessage}/>
    </>
    );
  }

export default BlockModal;