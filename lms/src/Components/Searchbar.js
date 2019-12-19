import React from 'react';
import '../App.css';
import { Button, InputGroup, FormControl} from 'react-bootstrap';

function Searchbar() {
    return (
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
            </InputGroup.Append>
        </InputGroup>
    );
  }
  
export default Searchbar;