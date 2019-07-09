import React from 'react';
import '../../css/styles.css';

const alert = (props) => {
    return (
        <div className={`alert ${props.alertType}`}>
            An alert is messaging that tells the user some information. Alerts can be error, warning, success, or info messages
        </div>
    );
};

export default alert;