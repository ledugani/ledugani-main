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
        <Container id='carousel' className='scrollbar-hidden'>
            <div className='slide'>
                <Image src={sphere_1} className='img' />
            </div>
            
            <div className='slide'>
                <Image src={bighead} className='img' />
            </div>

            <div className='slide'>
                <Image src={infernal} className='img' />
            </div>

            <div className='slide'>
                <Image src={livingDub1} className='img' />
            </div>

            <div className='slide'>
                <Image src={oz} className='img' />
            </div>

            <div className='slide'>
                <Image src={passingThoughts} className='img' />
            </div>

            <div className='slide'>
                <Image src={velocity} className='img' />
            </div>
        </Container>
    )
}

export default Graphics;