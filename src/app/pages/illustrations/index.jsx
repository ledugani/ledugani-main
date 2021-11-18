import './styles.css';
import { Container, Image } from 'react-bootstrap';
import livingFabrications from './img/2oo3.jpg';
import energy from './img/energy.jpg';
import groove from './img/groove.jpg';
import seikoSandman from './img/seiko-sandman.jpg';
import v3RB4T1M from './img/V3RB4T1M.jpg';
import wideAwake from './img/wide-awake.jpg';

function Illustrations () {
    return (
        <Container id='carousel' className='illustrations'>
            <div className='slide'>
                <Image src={seikoSandman} className='img' />
            </div>
            <div className='slide'>
                <Image src={v3RB4T1M} className='img' />
            </div>
            <div className='slide'>
                <Image src={energy} className='img' />
            </div>
            <div className='slide'>
                <Image src={groove} className='img' />
            </div>
            
            <div className='slide'>
                <Image src={wideAwake} className='img' />
            </div>
            <div className='slide'>
                <Image src={livingFabrications} className='img' />
            </div>
        </Container>
    )
}

export default Illustrations;