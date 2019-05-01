import React from 'react';
import '../../css/styles.css';
import LogoLink from '../molecules/logoLink';
import FooterNav from '../molecules/footerNav';

const Footer = () => {
    return (
        <footer className="c-footer" role="contentinfo">
            <div className="l">
                <LogoLink img='logo.png' link='#' />
                <FooterNav />
                <p className="c-footer__info">This is a demonstration of what's possible with <a href="http://patternlab.io" rel="external">Pattern Lab</a>. <a href="http://patternlab.io/download.html">Download Pattern Lab</a>, check out the <a href="http://patternlab.io/docs/">documentation</a>, or learn more about <a href="http://atomicdesign.bradfrost.com/">atomic design</a>.</p>
                <p className="copyright">&copy; 2016 HikeTracker. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;