import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div>
                <h3> {`Content for Navs: ${!this.props.match.params.navs?'':this.props.match.params.navs}`}</h3>
            </div>
        )
    }
}

export default Content;
