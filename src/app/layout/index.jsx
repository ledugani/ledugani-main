import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './navbar';
import './styles.css';

export default function Layout({ children }) {
    return (
        <Container fluid className='site-wrapper'>
            <Header />
            <Row className='content'>
                <Col className=''>{ children }</Col>
            </Row>
        </Container>
    );
}