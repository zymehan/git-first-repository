import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import styles from './components.module.css'

import { Navbar, Container, Nav, Form } from 'react-bootstrap';


const Header = () => {
  const [scroll, setScroll] = useState(false);
  
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <div className={scroll ? "sticky" : ""}>
      <Navbar className={styles.navbar} expand="sm">
          <Container fluid>
              <Navbar.Brand href="#" className={styles.color}>
                  <img 
                      alt="logo"
                      src={logo}
                      className={styles.logo}
                  />
                  Gunwar
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
              <Nav
                  className="me-auto my-2 my-lg-0"
                  styles={{ maxHeight: '100px' }}
                  navbarScroll
              >
              </Nav>
              <Form className="d-flex">
                  <a className={styles.btnColor}>Connect Wallet</a>
              </Form>
              </Navbar.Collapse>
          </Container>
      </Navbar>
    </div>
  )
}

export default Header;