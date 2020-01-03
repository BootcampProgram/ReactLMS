import React, { useState } from 'react';
import '../App.css';
import Reservationfilters from './Reservationfilters'
import ReservationContainer from './ReservationContainer'
import { Container } from 'react-bootstrap';

function Reservation() {
  
  //State
  const [parentReservationStatus, setParentReservationStatus] = useState("");
  const [parentShelve, setParentShelve] = useState("");

  //Method
  const onSelectStatus = (inputStatus) => {
    setParentReservationStatus(inputStatus);
    // console.log("Parent: " + parentReservationStatus);
  }

  const onSelectShelve = (inputShelve) =>{
    setParentShelve(inputShelve);
    // console.log("Parent Shelve: " + parentShelve);
  }

    return (
      <div className="App">
        {/* <Searchbar search = {onSearch} placeholder = "Search By Reservations Attributes"/> */}
        <Reservationfilters onselectstatus={onSelectStatus} onselectshelve={onSelectShelve}/>
        <Container className="mt-4">
          <ReservationContainer parentreservationstatus={parentReservationStatus} parentshelve={parentShelve}/>
        </Container>
      </div>
    );
  }
  
export default Reservation;