import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './navbar';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Container fluid>
                <Row>
                    <Col>{ children }</Col>
                </Row>
            </Container>
        </>
    );
}