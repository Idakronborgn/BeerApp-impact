import React, { useState } from 'react';
import { FaBars, FaTimes, FaPhoneAlt, FaLocationArrow, FaShoppingBasket } from 'react-icons/fa';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <header>
            <img src='/cheers.png' className='logo' width="80"></img>
            <nav className={isMenuOpen ? "responsiveNav" : ""}>
                <a href='/#'>Catalog</a>
                <a href='/#'>Beer</a>
                <a href='/#'>Bar</a>
                <a href='/#'>About us</a>
                <a href='/#'>Contact</a>
                <button className='nav-btn nav-close-btn' onClick={() => setIsMenuOpen(false)}>
                    <FaTimes />
                </button>
            </nav>
            <div className='info'>
            <a href='/#'><FaShoppingBasket className='faInfoIcons'/> items 590 rub.</a>
            <a href='/#'><FaLocationArrow className='faInfoIcons'/> Moscow Yakimanika, 2</a>
            <a href='/#'><FaPhoneAlt className='faInfoIcons'/> +45 22 22 22 22</a>
            </div>
            <button className='nav-btn' onClick={() => setIsMenuOpen(true)}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar; 

