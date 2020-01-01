import React, { useState } from 'react';
import '../App.css';
import Reservationfilters from './Reservationfilters'
import ReservationContainer from './ReservationContainer'
import { Container } from 'react-bootstrap';

function Reservation() {
  
  //State
  const [searchString, setSearchString] = useState("");

  //Method
  const onSearch = (inputValue) => {
    setSearchString(inputValue)

  }
    return (
      <div className="App">
        {/* <Searchbar search = {onSearch} placeholder = "Search By Reservations Attributes"/> */}
        <Reservationfilters />
        <Container className="mt-4">
          <ReservationContainer searchString={searchString}/>
        </Container>
      </div>
    );
  }
  
export default Reservation;