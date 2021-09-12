import React from 'react';
import {Navbar, NavDropdown, Nav, Form, Button, Row, Col } from 'react-bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

export const NavBar = () => {
    return (
        
        <div>
            <Row>
                <Navbar bg="light" expand="lg" style ={{display: 'flex'}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            
            <Col xs><Nav.Link href="#home" style={{color:'rgb(175, 87, 175)'}}>Home</Nav.Link></Col>

            <Col xs> <Nav.Link href="#link" style={{color:'rgb(175, 87, 175)'}}>Link</Nav.Link></Col>
                
            <Col xs={{ order: 12 }}>
             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
               
                        <NavDropdown.Item href="#action/3.1" style={{color:'violet'}}>Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" style={{color:'violet'}}>Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" style={{color:'violet'}}>Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4" style={{color:'violet'}}>Separated link</NavDropdown.Item>
             </NavDropdown>
             </Col>
            </Nav>
            <Col sm={{ order: 1 }}>
                <Form inline>
                <input type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-dark">Search</Button>
                </Form>
            </Col>
                
                </Navbar.Collapse>
            </Navbar>
            </Row>
        </div>
    
    )
}
