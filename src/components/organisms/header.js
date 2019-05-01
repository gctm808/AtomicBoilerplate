import React from 'react';
import '../../css/styles.css';
import LogoLink from '../molecules/logoLink';
import Nav from '../molecules/nav';

const Header = () => {
    return (
        <header class="c-header" role="banner">
            <LogoLink img='logo.png' link='#' />
            <Nav />
        </header>
    );
};

export default Header;