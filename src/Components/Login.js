import React, { Component } from 'react'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pass: ''
        }
    }

    CheckName = () => {
        if (this.state.name.length > 3 && this.state.pass.length > 3) {
            window.location.assign('/home/');
        }
        else {
            alert('error')
        }
    }

    render() {
        return (
            <div>
                <h1>הרשמה</h1><br></br>
                <input placeholder='name' onChange={(e) => this.setState({ name: e.target.value })} />
                <input placeholder='password' type='password' onChange={(e) => this.setState({ pass: e.target.value })} />
                <button onClick={this.CheckName} >Enter</button>
                <br></br>
                <h2>helpMe!</h2>
            </div>
        )
    }
}
