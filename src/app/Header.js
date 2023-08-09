'use client'

import {
  Container,
  Navbar,
  Nav
} from 'react-bootstrap';

import Logo from './logo.js';

export default function Header() {
  return (
    <header>
        <Navbar className="bg-body-tertiary" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand>💼 Portfolio </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end">
                    <Nav className="ms-auto">
                        <Nav.Link href="https://rodolfo.website" target="_blank">Contacto</Nav.Link>
                        <Logo/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
}

