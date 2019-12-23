import React from 'react';
import '../App.css';
import { Button, InputGroup, FormControl} from 'react-bootstrap';
import '../CSS/Catalog.css';

function Searchbar() {
    return (
        <InputGroup className="my-4 w-75 mx-auto">
            <FormControl
            placeholder="Search by Book Details"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
            <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
        </InputGroup>
    );
  }
  
export default Searchbar;