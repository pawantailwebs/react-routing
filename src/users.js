import React, { Component } from 'react';

class Users extends Component {
    render(props) {
        console.log(this.props);
        const {params} = this.props.match;
        return (<div>
            <h1 > Users < /h1>
            <p>{params.id}</p>
            </div>);

    }
}

export default Users;

