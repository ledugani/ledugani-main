import emailGif from './img/info-page-email.gif';
import { Image } from 'react-bootstrap';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function Info() {
    return (
        <div className='row info-section'>
            <Image src={emailGif} alt='admin@ledugani.com' className='email-gif'/>
            <br />
            <a type='button' className='btn btn-dark col-md-6 mx-auto shop-btn' href='https://society6.com/living-fabrications' role='button' target='_blank' rel='noreferrer'>
                Shop &nbsp;
                <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
        </div>
    )
}

export default Info;