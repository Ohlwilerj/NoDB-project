import React, { Component } from 'react'


export default class players extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            toggleRename: false,
            team: '',
            batting_average: '',
            hrs: '',
            war: '',
        }
    }
    

    toggle() {
        this.setState(prevState => ({toggleRename: !prevState.toggleRename}))
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
       
    }

    edit() {
        console.log(this.props.newStat)
        this.props.newStat(this.props.id, {newBa: this.state.batting_average || this.props.batting_average, 
            newHrs:this.state.hrs || this.props.hrs, 
            newWar: this.state.war || this.props.war
        })
        this.toggle()
    }

    render() {
        return (
            <div>
                {this.state.toggleRename ? (
                    <div className="name editor">
                        <div className="edited">
                        <img src={this.props.img} alt=''/>
                        <h3>Name: {this.props.name}</h3>
                        <h3>Team: {this.props.team}</h3>
                        <h3>Home Runs: {this.props.hrs}</h3>
                        <h3>Batting Avg: {this.props.batting_average}</h3>
                        <h3>WAR: {this.props.war}</h3>
                        <button onClick={() => this.toggle()}>Edit</button>
                        <button onClick={() => this.props.releasePlayer(this.props.id)}>Delete</button>
                    </div>
                        <input name="batting_average" placeholder={this.props.batting_average} onChange={e => this.handleChange(e)} />
                        <input name="hrs" placeholder={this.props.hrs} onChange={e => this.handleChange(e)} />
                        <input name="war" placeholder={this.props.war} onChange={e => this.handleChange(e)} />
                        <button className="save" onClick={() => this.edit()}>Save</button>
                    </div>
                ) : (
                
                    <div className="myTeam">
                        <img src={this.props.img} alt=''/>
                        <h3>Name: {this.props.name}</h3>
                        <h3>Team: {this.props.team}</h3>
                        <h3>Home Runs: {this.props.hrs}</h3>
                        <h3>Batting Avg: {this.props.batting_average}</h3>
                        <h3>WAR: {this.props.war}</h3>
                        <button className="edit" onClick={() => this.toggle()}>Edit</button>
                        <button className="delete" onClick={() => this.props.releasePlayer(this.props.id)}>Delete</button>
                    </div>
                )
                }
                
            </div>
        )
    }
}
