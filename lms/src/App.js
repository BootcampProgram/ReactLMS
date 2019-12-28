import React from 'react';
import './App.css';
import Catalog from './Components/Catalog'
import Issue from './Components/Issue'
import Reservations from './Components/Reservations'
import Students from './Components/Students'
import Return from './Components/Return'
import Navigationbar from './Components/Navigationbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    // React Fragments to wrap child elements
    <> 
      <Router>
      <Navigationbar />
        <Route path='/' exact component = {Catalog} />
        <Route path='/issue' component = {Issue} />
        <Route path='/reservations' component = {Reservations} />
        <Route path='/students' component = {Students} />
        <Route path='/return' component = {Return} />
      </Router>
    </>
  );
}

export default App;
