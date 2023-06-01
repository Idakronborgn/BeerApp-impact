import React, { useRef } from 'react';
import { FaBars, FaTimes, FaPhoneAlt, FaLocationArrow, FaShoppingBasket } from 'react-icons/fa';

function Navbar() {
    const navRef = useRef(null);

    const showNavBar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle("responsiveNav");
        }
    }

    return (
        <header>
            <img src='/cheers.png' className='logo' width="80"></img>
            <nav ref={navRef}>
                <a href='/#'>Catalog</a>
                <a href='/#'>Beer</a>
                <a href='/#'>Bar</a>
                <a href='/#'>About us</a>
                <a href='/#'>Contact</a>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <div className='info'>
            <a href='/#'><FaShoppingBasket className='faInfoIcons'/> items 590 rub.</a>
            <a href='/#'><FaLocationArrow className='faInfoIcons'/> Moscow Yakimanika, 2</a>
            <a href='/#'><FaPhoneAlt className='faInfoIcons'/> +45 22 22 22 22</a>
            </div>
            <button className='nav-btn' onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;

