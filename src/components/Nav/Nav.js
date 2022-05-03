import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { FaBars, FaTimes, FaHome } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import "../Nav/Nav.css";

const Nav = ({home, about, services, contacts, careers, projects}) => {
    
  const [btn, setBtn] = useState(false);

  const handleToggle = () => {
    setBtn(!btn)
  }
  
  const x = true;
  return (
    <>
        <IconContext.Provider value={{color: 'orange'}}>
            <header className='header header__bg'>
                <nav className='Nav Nav__body Nav__width'>
                    <div className='Nav__name'>
                        <span>{<FaHome />}</span>
                        <span>{x ? 'hotel' : ''}</span>
                    </div>

                    <div className='Nav__sm--btn Nav__btn' onClick={handleToggle} >
                        <span>{btn ? <FaTimes/> : <FaBars />}</span>
                    </div>
                    
                    <div className={`NavUlMenu ${btn ? " showMenu" : ""}`}>
                        <ul className='NavUl'>
                            <li className="NavLi" id="home" > 
                                <a href="#home" id="home" className='home'>
                                    {home}
                                </a>
                            </li>
                            <li className="NavLi" id="about" >
                                <a href="#about" className='home'>
                                    {about}
                                </a>             
                            </li>
                            <li className="NavLi" id="service"  >
                                <a href="#services" className='home'>
                                    {services}
                                </a>
                            </li>
                            <li className="NavLi" id="projects" >
                                <a href="#projects" className='home'>
                                    {projects}
                                </a>
                            </li>
                            <li className="NavLi" id="careers" >
                                <a href="#careers" className='home'>
                                    {careers}
                                </a>
                            </li>
                            <li className="NavLi" id="contacts" >
                                <a href="#contacts" className='home'>
                                    {contacts}
                                </a>
                            </li>
                        </ul>
                </div>
                </nav>
        </header>
        </IconContext.Provider>
    </>
  )
}

Nav.defaultProps = {
    home: 'Home',
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    careers: 'Careers',
    contacts: 'Contacts',
}

Nav.propTypes = {
    home: PropTypes.string.isRequired,
}

export default Nav;
