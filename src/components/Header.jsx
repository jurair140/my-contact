import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
       <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand ><Link to={""}>
          <i className="fa-solid fa-address-card fa-2xl"  style={{color: "#140490",}} />
          </Link>
            {' '}
            Contact App
           
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
