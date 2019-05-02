import React from 'react';
import '../css/styles.css';
import Header from '../components/organisms/header';
import Footer from '../components/organisms/footer';
import Form from '../components/organisms/form';

const Template = () => {
    return (
        <div>
            <Header />
            {/*Content Div*/}
            <div className='landing'>
                <div className='l divider'>
                    <div className='headers'>
                        <h1>Page Header</h1>
                        <h2>Subheader</h2>
                    </div>
                    <div className='contact'>
                        <Form />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Template;