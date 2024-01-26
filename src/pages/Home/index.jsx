import './index.css'
import MeMySelf from '../../assets/images/SakshamGood.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowRightArrowLeft, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import TypingEffect from '../../components/TypingEffect'
import { useState } from 'react'
import About from '../About'



const Home = () => {
    const [openAbout, setopenAbout] = useState(false)

    const OpenAboutBox = () => {
        setopenAbout(!openAbout)
    }
    const textArray = [
        "Frontend Developer",
        "Student",
        "Freelancer",
      ];

    return(
        <>
        <div className='MainContainer'>
    
        <div className='ColorStrip'></div>
            <div className='imageContainer'>
                <img 
                src={MeMySelf}
                alt='Its me Saksham mammamiya' />
         </div>

    <div className='InfoBox'>
        <div className='InfoNameBox'>
            <h1>I'm</h1>
            <h1 className='H1'>Saksham Khatiwada</h1>
            <h2><span className='H2span'>h</span><TypingEffect texts={textArray} speed={120} loopDelay={1} /></h2>
        </div>

        <div className='InfoDetailBox'>
                <p>
                Hey, I'm Saksham Khatiwada—a student and web developer fueled by a passion for cutting-edge technologies and always open to new opportunities and challenges in the ever-evolving world.
                </p>
        </div>

        <div className='AllButton' onClick={OpenAboutBox}>
                <div className='btnText'>More About Me</div>
                <div className='IconBox'>
                <FontAwesomeIcon icon={faArrowRight} className='BtnIcon' />
                </div>
            </div>

    </div>
       
    
</div>
{
    openAbout && (
        <div className='ClickAboutBox' onClick={OpenAboutBox}>
        <div className="aboutBoxDisplay">
        <About />
        <FontAwesomeIcon className='CloseMe' icon={faXmark} onClick={OpenAboutBox} />
        </div>

</div>
    )
}

</>
    );
}

export default Home;