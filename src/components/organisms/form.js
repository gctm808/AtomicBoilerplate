import React from 'react';
import FormField from '../molecules/formField';
import TextArea from '../molecules/textarea';
import Button from '../molecules/button';


const Form = () => {
    return (
        <form class="c-form c-form--stacked" method="post" action="#">
            <FormField label='label' />
            <FormField label='label' />
            <TextArea label='label' />
            <Button />
        </form>
    );
};

export default Form;