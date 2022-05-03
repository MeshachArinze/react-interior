import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "./Account.css";
import { IconContext } from 'react-icons/lib';

const Account = ({ home, about, services, projects, careers, contacts }) => {
    return (
        <>
            <IconContext.Provider value={{ color: 'orange' }}>
                <div className='Account__Body'>
                    <div className='Account__Wrap'>
                        <ul className='Account__Parent'>
                            <li className='Account__List'>
                                <a href='#home'>{home}</a>
                            </li>
                            <li className='Account__List'>
                                <a href='#home'>{about}</a>
                            </li>
                            <li className='Account__List'>
                                <a href='#home'>{services}</a>
                            </li>
                            <li className='Account__List'>
                                <a href='#home'>{projects}</a>
                            </li>
                            <li className='Account__List'>
                                <a href='#home'>{careers}</a>
                            </li>
                            <li className='Account__List'>
                                <a href='#home'>{contacts}</a>
                            </li>
                        </ul>
                        <div className='Account__Icons'>
                            <span>{<FaFacebook />}</span>
                            <span>{<FaInstagram />}</span>
                            <span>{<FaTwitter />}</span>
                            <span>{<FaLinkedin />}</span>
                        </div>
                        <div className='Account__Footer'>
                            <p>&copy; 2022 Interior and Decoration Funiture</p>
                        </div>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

Account.defaultProps = {
    home: 'Home',
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    careers: 'Careers',
    contacts: 'Contacts',
}

export default Account;