import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png'

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
        <Navbar.Brand>
            <img style={{width:'80px',height:'50px',color: 'white'}} className='img-fluid' src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Form inline className='ml-5'>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
        </Form>
        <Nav className="ml-auto">
            <Link to='/home'>Home</Link>
            <button class='btn btn-warning ml-5'>Login</button>
        </Nav>
        
    </Navbar>
    

    );
};

export default Header;