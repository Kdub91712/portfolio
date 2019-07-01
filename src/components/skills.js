import React, {Component} from 'react'

export default class Skills extends Component {

    render() {

        return(
            <div className="main-section">
                <section className="sub-section">
                <div className="text-area">
                    <p>Skills: </p>

                    <ul>
                    { this.props.skills &&
                        this.props.skills.map((skill, index) => 
                        <li key={index}>{skill}</li>
                    )
                    }
                    </ul>
                    </div>
                </section>
            </div>
        )

    }

}