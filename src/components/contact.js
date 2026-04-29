import React from 'react';
import PropTypes from 'prop-types';

export default function Contact({ formSubmitHandler }) {
    return (
        <div className="main-section">
            <div className="sub-section">
                <div className="text-area">
                    <h3>Contact</h3>
                    <form id="contact_form" className="contact-form" onSubmit={(e) => formSubmitHandler(e)}>
                        <label>
                            <div>Name</div>
                            <input type="text" name="name"/>
                        </label>
                        <label>
                            <div>Phone</div>
                            <input type="text" name="phone"/>
                        </label>
                        <label>
                            <div>Email</div>
                            <input type="text" name="email"/>
                        </label>
                        <label>
                            <div>Comments</div>
                            <textarea name="comments"></textarea>
                        </label>
                        <input className="submit-button" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {
    formSubmitHandler: PropTypes.func
}
