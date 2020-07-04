import React, { Component } from 'react'

export default class Bitul extends Component {

    constructor(props) {
        super(props);
    this.state={
        password:'',
        cpassword:'',
        counter:0
        
    }
}

counter = () => {
    if (this.state.counter > 3) {
        alert('you are out of attempts');
        
        
        
            
    }
}

     check=()=>{
        { this.counter() }
        if(this.state.password.length>=8 && this.state.cpassword===this.state.password){
            window.location.assign('/home/');
        }
        else (
            this.setState({ counter: this.state.counter + 1 })
        )
    } 

    render() {
    return (
        <div>
           <input placeholder="password" onChange={(e) => this.setState({ password: e.target.value })}/>
           <input placeholder="confirm password" type="password" onChange={(e) => this.setState({ cpassword: e.target.value })}/>
           <button onClick={this.check} >ביטול</button>
        </div>
    )
}
}

