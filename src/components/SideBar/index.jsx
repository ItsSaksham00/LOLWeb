import './index.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faEnvelope, faUser, faSuitcase } from '@fortawesome/free-solid-svg-icons';


const SideBar = () => {
    return (
        <div className='NavBar'>
        {/* <FontAwesomeIcon icon={faSun} /> */}

        <nav>
                    <NavLink exact="true" activeclassname="active" className='NavBtns' to='/'> 
                        <div className='NavBtnText'><h4>Home</h4></div>
                        <div className='NavBtnIcon'><FontAwesomeIcon className='FaNavIcon' icon={faHouseChimney} /></div>
                     </NavLink>   

                    <NavLink exact="true" activeclassname="active" className='NavBtns' to='/AboutMe'> 
                        <div className='NavBtnText'><h4>About</h4></div>
                        <div className='NavBtnIcon'><FontAwesomeIcon className='FaNavIcon' icon={faUser} /></div>
                     </NavLink>   

                    <NavLink exact="true" activeclassname="active" className='NavBtns' to='/Portfolio'> 
                        <div className='NavBtnText'><h4>Portfolio</h4></div>
                        <div className='NavBtnIcon'><FontAwesomeIcon className='FaNavIcon' icon={faSuitcase} /></div>
                     </NavLink>   

                    <NavLink exact="true" activeclassname="active" className='NavBtns' to='/ContactMe'> 
                        <div className='NavBtnText'><h4>Contact</h4></div>
                        <div className='NavBtnIcon'><FontAwesomeIcon className='FaNavIcon' icon={faEnvelope} /></div>
                     </NavLink>   
        </nav>
    </div>
);

}

export default SideBar;