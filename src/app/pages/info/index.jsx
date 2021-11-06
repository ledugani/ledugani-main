import emailGif from './img/info-page-email.gif';
import { Image } from 'react-bootstrap';

function Info() {
    return (
        <>
            <Image src={emailGif} alt="admin@ledugani.com" />
        </>
    )
}

export default Info;