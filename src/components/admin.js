import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Admin extends Component {

    render() {

        return(
            <div>Secret Area!</div>
        )

    }

})