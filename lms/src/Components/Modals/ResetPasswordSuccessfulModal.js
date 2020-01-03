import React, { useEffect, useState } from 'react'; 
import '../../App.css';
import { Modal, Button, Container, Row, Col, Table, Form} from 'react-bootstrap';
import ResetPasswordlModal from './ResetPasswordModal'

function ResetPasswordSuccessfulModal(props){
    return(
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{fontSize: "18px"}}>
          Student {`S00${props.studentid}`}'s password has been reset successfully! 
        </Modal.Title>
      </Modal.Header>
    </Modal>
    )
 
}

export default ResetPasswordSuccessfulModal;