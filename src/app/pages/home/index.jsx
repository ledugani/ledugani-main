import './styles.css';
import logo from './img/tahm-man-ds.png'
import { Image } from 'react-bootstrap';

function Home () {
    return (
        <header> 
            <Image src={logo} fluid />
            <div className='home-header'>
                <h1>
                    <strong>
                        ledugani.com
                    </strong>
                </h1>
                <p>
                    <strong>d.</strong> graphic art & illustrations by artist, developer, and creator &nbsp;
                    <em>Tom Dugan</em>
                </p>
                <a href='http://tduganenterprise.com'>
                    <font face='arial' size='3' color='blue'>
                        WEBSITE DEVELOPMENT SERVICES
                    </font>
                </a>

                <hr className='hr' />

                <p>
                    Hello and welcome to my online gallery! I'm glad you made it :-] this is where I'll be posting updates on my latest projects and selling selected works. If you have any questions, please feel free to follow the info link you see in the nav bar. Thanks for stopping by!
                </p>

                <p>- Tom</p>
            </div>
        </header>
    )
}

export default Home;