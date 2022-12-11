import React from 'react';
import JotformEmbed from 'react-jotform-embed';
const ContactMe = () => {
    return (
        <div className='mx-auto' id="contact">
            <JotformEmbed src="https://form.jotform.com/223444310525446" className="w-[90%]" />
        </div>
    );
};

export default ContactMe;