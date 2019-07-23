import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';


export default withAuth(class Admin extends Component {
    
    componentDidMount() {

        this.props.loggedIn();

    }

    render() {

        return(
            <div className="main-section">
                <div className="sub-section">
                    <div className="text-area">
                        <h3>Admin</h3>
                        <p>Secret Area</p>
                    </div>
                </div>
            </div>
        )

    }

})