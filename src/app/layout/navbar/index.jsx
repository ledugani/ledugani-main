import './styles.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from './img/tahm-1.svg';

function MainNav () {
    return (
        <Navbar bg="light">
            <Nav className="me-auto">
                <Nav.Link href="#graphics">graphics</Nav.Link>
                <Nav.Link href="#illustrations">illustrations</Nav.Link>
                <Nav.Link href="#shop">shop</Nav.Link>
                <Nav.Link href="#info">info</Nav.Link>
            </Nav>
            <Container className="justify-content-end">
                <Navbar.Brand href="#home">
                    <img 
                        src={logo} 
                        width="100"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default MainNav;