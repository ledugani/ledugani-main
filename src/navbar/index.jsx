import './styles.css';
import { Navbar, Container } from 'react-bootstrap';
import logo from './img/tahm-1.svg';

function MainNav () {
    return (
        <Navbar bg="light">
            <Container>
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