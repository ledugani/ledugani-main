import './styles.css';
import { Image, Container } from 'react-bootstrap';
import sphere_1 from './img/sphere_1.png';
import bighead from './img/bighead.png';
import infernal from './img/infernal.png';
import livingDub1 from './img/living-dub-1.png';
import oz from './img/oz-bw.png';
import passingThoughts from './img/passing-thoughts.png';
import velocity from './img/velocity_5.png';

function Graphics () {
    return (
        <Container id='carousel'>
            <div className='slide'>
                <Image src={sphere_1} fluid='md' className='image' />
            </div>
            
            <div className='slide'>
                <Image src={bighead} fluid='md' className='image' />
            </div>

            <div className='slide'>
                <Image src={infernal} fluid='md' className='image' />
            </div>

            <div className='slide'>
                <Image src={livingDub1} fluid='md' className='image' />
            </div>

            <div className='slide'>
                <Image src={oz} fluid='md' className='image' />
            </div>

            <div className='slide'>
                <Image src={passingThoughts} fluid='md' className='image' />
            </div>

            <div className='slide'>
                <Image src={velocity} fluid='md' className='image' />
            </div>
        </Container>
    )
}

export default Graphics;