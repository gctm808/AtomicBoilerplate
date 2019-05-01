/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../css/styles.css';

const HeroBlock = (props) => {
    const img = {
        src: props.img
    }
    return (
        <a href="#" className="c-block-hero">
            <img src={require(`../../images/${img.src}`)} alt='hero' className="c-block-hero__img" />
            <h2 className="c-block-hero__headline">{props.text}</h2>
        </a>
    );
};

export default HeroBlock;