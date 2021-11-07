import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './styles.css';

export default function Footer() {
    return (
        <Navbar className='bg-light'>
            <Container>
                <Nav.Item>
                    <p className='footer-left-copy'> &copy;  {( new Date().getFullYear() )}</p>
                </Nav.Item>
            </Container>

            <Container className='justify-content-center'>
                <Nav.Item>
                    <Nav.Link href='http://tduganenterprise.com'>
                        T. Dugan Enterprise, Inc.
                    </Nav.Link>
                </Nav.Item>
            </Container>
            
            <Container className='justify-content-end'>
                <Nav.Item>
                    <p className='footer-right-copy'>All Rights Reserved.</p>
                </Nav.Item>
            </Container>
        </Navbar>
    )
}