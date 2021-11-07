import emailGif from './img/info-page-email.gif';
import { Image } from 'react-bootstrap';
import './styles.css';

function Info() {
    return (
        <>
            <Image src={emailGif} alt="admin@ledugani.com" className='email-gif'/>
        </>
    )
}

export default Info;