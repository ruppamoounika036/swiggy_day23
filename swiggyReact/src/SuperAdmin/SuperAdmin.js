import React from 'react'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import AddRegionAdmin from './AddRegionAdmin';
import AddUDiscount from './AddDiscount';
import AddUpcomingRestaurants from './AddupcomingRestaurants';
import Homepage from './Homepage';
import { Sidenav, Nav } from 'rsuite';
 import './style.css';
function SuperAdmin()
{
    return(
        <Router>
        <div className='navstyle'>
        <Sidenav >
        <Sidenav.Body>
        <Nav activeKey="1">
          <Nav.Item eventKey="1">
          <Link to="/" >Home</Link>
          </Nav.Item>
          <Nav.Item eventKey="2">
          <Link to="/addregionadmin">Add Region Admin</Link>
          </Nav.Item>
          <Nav.Item eventKey="3">
          <Link to="/upcomingrestaurants">Add Upcoming Restaurants</Link>     
           </Nav.Item>
          <Nav.Item eventKey="4">
          <Link to="/addoffers">Add Discount or offers</Link>
          </Nav.Item>
          <Nav.Item eventKey="4">
          <Link to="/test">Add Discount or offers</Link>
          </Nav.Item>
        </Nav>
          </Sidenav.Body>
          </Sidenav>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/addregionadmin" element={<AddRegionAdmin/>}></Route>
            <Route path="/upcomingrestaurants" element={<AddUpcomingRestaurants/>}></Route>
            <Route path="/addoffers" element={<AddUDiscount/>}></Route>
            <Route path="/test" element={<AddRegionAdmin/>}></Route>
        </Routes>
        </div>
      
        </Router>
    )
}
export default SuperAdmin;