import React, { Component } from 'react'
import '../components/creator.css'

export default class Creator extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            team: '',
            battingAvg: '',
            homeRuns: '',
            wAR: '',
            img: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    } 
    render() {
        return (
            <div className='addnew'>
                <input type='text' name='name' value={this.state.name} onChange={(e) => this.handleChange(e)}></input>
                <input type='text' name='team' value={this.state.team} onChange={(e) =>this.handleChange(e)}></input>
                <input type='number' name='batting avg' value={this.state.battingAvg} onChange={(e) =>this.handleChange(e)}></input>
                <input type='number' name='home runs' value={this.state.homeRuns} onChange={(e) =>this.handleChange(e)}></input>
                <input type='number' name='war' value={this.state.wAR} onChange={(e) =>this.handleChange(e)}></input>
                <input type='text' name='img' value={this.state.img} onChange={(e) =>this.handleChange(e)}></input>
            </div>
        )
    }
}

