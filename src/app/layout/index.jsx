import React from 'react';

export default function Layout({ children }) {
    return (
        <Container fluid>

            <Row>
                <Col>{ children }</Col>
            </Row>
        </Container>
    );
}