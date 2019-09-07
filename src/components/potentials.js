import React, { Component } from 'react'
import axios from 'axios'

export default class Team extends Component {

    constructor() {
        super()
        this.state = {
            potentials: []
        }
    }

    componentDidMount() {
        axios.get('/api/players', body).then(res => this.setState({potentials: res.data}))
    }
    render() {
        return (
            <div className="team">
                {this.state.potentials.map(el => 
                  <Myteam />)}
            </div>
        )
    }
}
