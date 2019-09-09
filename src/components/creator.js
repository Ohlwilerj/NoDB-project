import React, { Component } from 'react'
import '../components/creator.css'

export default class Creator extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            first_name: '',
            last_name: '',
            team: '',
            batting_average: '',
            hrs: '',
            war: '',
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
                <input type='text' name='first_name' placeholder='Name' value={this.state.first_name} onChange={(e) => this.handleChange(e)}></input>
                <input type='text' name='team' placeholder='Team' value={this.state.team} onChange={(e) =>this.handleChange(e)}></input>
                <input type='number' name='batting_average' placeholder='Batting Average' value={this.state.batting_average} onChange={(e) =>this.handleChange(e)}></input>
                <input type='number' name='hrs' placeholder='Home Runs' value={this.state.hrs} onChange={(e) =>this.handleChange(e)}></input>
                <input type='number' name='war' placeholder='WAR' value={this.state.war} onChange={(e) =>this.handleChange(e)}></input>
                <input type='text' name='img' placeholder='URL' value={this.state.img} onChange={(e) =>this.handleChange(e)}></input>
                <button  onClick={() => this.props.addFn(this.state)} className='new'>Add To My Team</button>

            </div>
        )
    }
}

