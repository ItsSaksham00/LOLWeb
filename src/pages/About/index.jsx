import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Headings from "../../components/Headings";
import './index.css'
import { faC, faDownload, faSquare } from "@fortawesome/free-solid-svg-icons";
import MyCv from '../../assets/MyCv.pdf'
import MeMySelf from '../../assets/images/SakshamGood.jpg'
import { faCss3, faHtml5, faJsSquare, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";



const About = () => {
    return(
        <div className="AboutContainer">
             <Headings frontHeading={'About Me'} backHeading={'Resume'} />
             
                        <img className="MyImage"
                        src={MeMySelf}
                        alt="Its me Saksham Lol"
                        />
             <div className="aboutContainerBox">
                <div className="AboutinfoBox">  
                    <div className="pointInfo">
                        <h1 className="infoTopic">
                            Personal Infos
                        </h1>
                            <ul>
                                <li>
                                    <h2 className="infoPoint">Name: </h2>
                                    <h2 className="detailPoint"> Saksham Khatiwada</h2>
                                </li>
                                <li>
                                    <h2 className="infoPoint">Age: </h2>
                                    <h2 className="detailPoint"> 19 Years</h2>
                                </li>
                                <li>
                                    <h2 className="infoPoint">Nationality: </h2>
                                    <h2 className="detailPoint">Nepali</h2>
                                </li>
                                <li>
                                    <h2 className="infoPoint">Freelance: </h2>
                                    <h2 className="detailPoint" style={{color: "limegreen"}}> Available</h2>
                                </li>
                                <li>
                                    <h2 className="infoPoint">Address: </h2>
                                    <h2 className="detailPoint"> Itahari-Sunsari</h2>
                                </li>
                                <li>
                                    <h2 className="infoPoint">Email: </h2>
                                    <h2 className="detailPoint"> mrsaksham12@gmail.com</h2>
                                </li>
                                <li>
                                    <h2 className="infoPoint">Languages: </h2>
                                    <h2 className="detailPoint"> English, Nepali, Hindi</h2>
                                </li>
                                <li>
                                    <h2 className="infoPoint">Phone: </h2>
                                    <h2 className="detailPoint"> +977 9824327951</h2>
                                </li>
                            </ul>

                            <div className='AllButton' style={{marginTop:'1.5rem'}}>
                <a className="downloadBtn" href={MyCv} download>
                <div className='btnText'>Download CV</div>
                <div className='IconBox'>
                <FontAwesomeIcon icon={faDownload} className='BtnIcon' />
                </div>
                </a>
            </div>
                        </div> 
                        
                        <div className="parainfo">
                        <h1 className="infoTopic">
                            Personal Bio
                        </h1>
                                <div className="writtenInfo">
                                    <p>
                                    Hello, I'm Saksham Khatiwada, a highly passionate, dedicated, and ambitious individual deeply committed to both my academic pursuits and professional endeavors. As a resident of Nepal, I bring a unique perspective to my work. With a successful track record of completing various web projects, I continually strive for excellence in the dynamic world of technology. Eager to contribute my skills and enthusiasm to new opportunities on the horizon.
                                    </p>
                                </div>
                                <div className="boxInfo">
                                        <div className="infoBox">
                                            <h1>10</h1>
                                            <h2>Projects Completed</h2>
                                        </div>
                                        <div className="infoBox">
                                        <h1>1</h1>
                                            <h2>Years Experience</h2>
                                        </div>
                                </div>
                            </div> 
                </div>
                <div className="AboutSkills">
                <h1 className="SkillsHead">
                            My Skills
                        </h1>
                        <p className="SkillsPara">
                        I'm very ambitious front-end developer
                 immensely dedicated towards my passion of learning
                 different modern technologies resulted in experting in web
                  development. Most of the languages I used during web developement is showed below.
                        </p>
                        <div className='stage-cube-cont'>
                        <div className='cubespinner'>
                            <div className='cubediv face1'>
                                <FontAwesomeIcon icon={faC} color='#DD0031'/>
                            </div>
                            <div className='cubediv face2'>
                                <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                            </div>
                            <div className='cubediv face3'>
                                <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                            </div>
                            <div className='cubediv face4'>
                                <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                            </div>
                            <div className='cubediv face5'>
                                <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                            </div>
                            <div className='cubediv face6'>
                                <FontAwesomeIcon icon={faPhp} color='#EC4D28'/>
                            </div>

                           </div>

                        </div>
                </div>

             </div>
        </div>
    );
}

export default About;