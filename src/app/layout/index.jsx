import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Layout({ children }) {
    return (
        <Container fluid>
            <Row>
                <Col>{ children }</Col>
            </Row>
        </Container>
    );
}