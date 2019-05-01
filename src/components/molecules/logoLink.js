/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../css/styles.css';

const logoLink = (props) => {
    const logo = {
        img: props.img,
        link: props.link
    }

    return (
        <a href={logo.link} className="c-logo-link">
            <img src={require(`../../images/${logo.img}`)} className="c-logo c-logo-link__img" alt="homelink" />
        </a>
    );
};

export default logoLink;