import React, {useState} from 'react';
import '../App.css';
import { Button, InputGroup, FormControl} from 'react-bootstrap';
import '../CSS/Catalog.css';

function Searchbar(props) {
    //States
    const [inputValue, setInputValue] = useState([]);
    
    return (
        <InputGroup className="my-4 w-75 mx-auto">
            <FormControl
                placeholder={props.placeholder}
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={event => setInputValue(event.target.value)}
            />
            <InputGroup.Append>
            <Button variant="outline-secondary" onClick={props.search(inputValue)}>Search</Button>
            </InputGroup.Append>
        </InputGroup>
    );
  }
  
export default Searchbar;