import "./styles.css";
import logo from './img/tahm-man-ds.png'
import { Image } from 'react-bootstrap';

function Home () {
    return (
        <> 
            <Image src={logo} fluid />
        </>
    )
}

export default Home;