import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './BlogCSS/Blog.css';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



function ColorSchemesExample() {
    const [isopen, setIsOpen] = useState(false);
    const toggleMenu= () => {
        setIsOpen((isopen) =>  !isopen )
    }

  return (
    <>
    <div className='row m-1 navbar-full-area'>
        <div className="col">
            <h2>My Website</h2>
        </div>
        <div className='dvs-header_trigger ml-auto' onClick={toggleMenu}><FontAwesomeIcon icon={faBars}/></div> 
        <div className='col navbar-right-area'>
            <Navbar data-bs-theme="light">
                <Container>
                <Nav className={`me-auto ${isopen ? 'is-open' : ''}`}>
                    <NavLink className='nav-link' to='/Home'>Home</NavLink>
                    <NavLink className='nav-link' to='/About'>About</NavLink>
                    <NavLink className='nav-link' to='/Blog'>Blog</NavLink>
                    <NavLink className='nav-link' to='/Sponser'>Sponser</NavLink>
                    <NavLink className='nav-link' to='/Contact'>Contact</NavLink>
                    <input type="text"
                    placeholder="Search"
                    />
                </Nav>
                </Container>
            </Navbar>
        </div>
    </div>
    </>
  );
}

export default ColorSchemesExample;