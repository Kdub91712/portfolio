import React, {Component} from 'react'

export default class Contact extends Component {

    render() {

        return(
            <div className="main-section">
                <div className="sub-section">
                    <div className="text-area">
                        <p>Contact</p>
                        <form id="contact_form" className="contact-form" onSubmit={(e) => this.props.formSubmitHandler(e)}>
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

}