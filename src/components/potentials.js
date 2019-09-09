import React, { Component } from 'react'
import axios from 'axios'
import '../components/potentials.css'

export default class Potentials extends Component {

    constructor() {
        super()
        this.state = {
            potentials: []
        }
    }

    componentDidMount() {
        axios.get('/api/players').then(res => this.setState({potentials: res.data}))
    }
    render() {
        return (
            <div className="options">
                {this.state.potentials.map(el => {
                    return (
                        <div className="potentials">
                            <img src={el.img} atl='' />
                            <h4>Name: {el.first_name + ' ' + el.last_name}</h4>
                            <h4>Team: {el.team}</h4>
                            <h4>Home Runs: {el.hrs}</h4>
                            <h4>Batting Avg: {el.batting_average}</h4>
                            <h4>WAR: {el.war}</h4>
                            <button onClick={() => this.props.addToTeamfn({
                                "img":el.img,
                                "first_name": el.first_name,
                                "last_name": el.last_name,
                                "team": el.team,
                                "hrs": el.hrs,
                                "batting_average": el.batting_average,
                                "war": el.war
                            
                            })} className='added'>Add To My Team</button>
                        </div>
                    )
                  })
                }
            </div>
        )
    }
}
