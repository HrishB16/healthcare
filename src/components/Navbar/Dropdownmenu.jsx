import React from 'react';
import { useState } from "react"
import {FaUserAlt} from "react-icons/Fa"
import Dropdown from 'react-bootstrap/Dropdown';

const Dropdownmenu = () => {
  return (
    <Dropdown>
    <Dropdown.Toggle variant="info" id="dropdown-basic">
     <FaUserAlt/>  User 
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="/user">Your Profile</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Check medicines</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  );
}

export default Dropdownmenu;
