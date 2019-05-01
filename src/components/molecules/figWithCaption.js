import React from 'react';
import '../../css/styles.css';

const FigWithCaption = (props) => {
    const fig = {
        img: props.img,
        caption: props.caption
    };

    return (
        <figure className="c-figure">
            <div className="c-figure__media">
                <img src={require(`../../images/${fig.img}`)} alt="Landscape" className="" />
            </div>
            <figcaption className="c-figure__caption">{fig.caption}</figcaption>
        </figure>
    );
};

export default FigWithCaption;