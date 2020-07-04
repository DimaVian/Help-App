import React, { Component } from 'react'


export default class Help extends Component {

    constructor(props) {
        super(props);
        this.state = {
            option: '101',
            flag: 2
        }
    }

    hazilu = () => {
        this.setState({ flag: 3 })
    }
    bitul = () => {
        window.location.assign('/bitul/');
    }

    show = () => {
        if (this.state.flag === 2) {
            return (
                <div>
                    <div className='header'>
                        {this.state.option}
                        < select onChange={(e) => this.setState({ option: e.target.value })}>
                            <option >101 Magen David</option>
                            <option >100 Mishtara</option>
                            <option >102 Hazala</option>
                        </select>
                    </div>
                    <br></br>
                    <button className='helpButton' onClick={this.hazilu}>הצילו</button>
                    <h1>helpMe!</h1>
                </div>
            )
        }
        else if (this.state.flag === 3) {
            return (
                <div>
                    <div className='header'>
                        {this.state.option}
                        < select onChange={(e) => this.setState({ option: e.target.value })}>
                            <option >101 Magen David</option>
                            <option >100 Mishtara</option>
                            <option >102 Hazala</option>
                        </select>
                    </div>
                    <br></br>
                    <div>
                        {this.state.option}
                    </div>
                    <button className='helpButton' onClick={this.bitul}>ביטול</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.show()}
            </div>
        )
    }
}
