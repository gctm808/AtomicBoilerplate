/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../css/styles.css';

const FooterNav = () => {
    return (
        <nav className="c-footer-nav">
            <ul className="c-footer-nav__list">
                <li className="c-footer-nav__item"><a href="#" className="c-footer-nav__link">About</a></li>
                <li className="c-footer-nav__item"><a href="#" className="c-footer-nav__link">Blog</a></li>
                <li className="c-footer-nav__item"><a href="#" className="c-footer-nav__link">Contact</a></li>
                <li className="c-footer-nav__item"><a href="#" className="c-footer-nav__link">Login</a></li>
            </ul>
        </nav>
    );
};

export default FooterNav;