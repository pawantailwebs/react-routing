import React, { Component } from 'react';

class Contact extends Component {
    
     submitData = () => {
        this.props.history.push("/users");
    }
    render() {
	console.log(this.props);
        return (
	<form>
        <input  type="name" placeholder="name"/>
        <input type="email" placeholder="email"/>
        <button onClick={this.submitData}>Submit</button>
        </form>);
    }
}

export default Contact;
