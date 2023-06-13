import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>&copy; 2023 Your Name. All rights reserved.</p>
                <div className="social-icons">
                    <a href='https://www.instagram.com/_codexploiter/' className='home__social-icon' target="_blank">
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/mansi-singh-0153351aa/' className='home__social-icon' target="_blank">
                        <i class="uil uil-linkedin-alt"></i>
                    </a>
                    <a href='https://github.com/mansisingh2803' className='home__social-icon' target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
