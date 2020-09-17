import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
            <img style={{width:'20px',height:'20px'}} className='img-fluid' src="../../images/Logo.png" alt="Logo"/>
        </Navbar.Brand>
        <Form inline className='ml-5'>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
        </Form>
        <Nav className="ml-auto">
            <Nav.Link href="#news">News</Nav.Link>
            <Nav.Link href="#destination">Destination</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <button class='btn btn-warning'>Login</button>
        </Nav>
        
    </Navbar>
    

    );
};

export default Header;