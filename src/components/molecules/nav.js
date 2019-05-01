/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../css/styles.css';

const Nav = () => {
    return (
        <nav id="nav" className="c-primary-nav">
            <ul className="c-primary-nav__list">
                <li className="c-primary-nav__item"><a href="#" className="c-primary-nav__link">About</a></li>
                <li className="c-primary-nav__item"><a href="#" className="c-primary-nav__link">Blog</a></li>
                <li className="c-primary-nav__item"><a href="#" className="c-primary-nav__link">Contact</a></li>
                <li className="c-primary-nav__item"><a href="#" className="c-primary-nav__link">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;