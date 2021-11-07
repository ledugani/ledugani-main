import './styles.css';
import { Container, Image } from 'react-bootstrap';
import livingFabrications from './img/2oo3.png';
import energy from './img/energy.png';
import groove from './img/groove.png';
import seikoSandman from './img/seiko-sandman.png';
import v3RB4T1M from './img/V3RB4T1M.png';
import wideAwake from './img/wide-awake.png';

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