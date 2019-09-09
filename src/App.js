import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/header'
import Myteam from './components/myteam'
import Creator from './components/creator'
import Potentials from './components/potentials'

class App extends Component {
  constructor() {
    super()
    this.state = {
      teamCreated: [],
      id: 0,
    }
    this.addToTeam = this.addToTeam.bind(this)
    this.statChanger= this.statChanger.bind(this)
    this.letGo=this.letGo.bind(this)
  }

    addToTeam(body) {
      axios.post('/api/players', body).then(res => {
        this.setState({teamCreated: res.data})
      })
    }

    statChanger(id, body) {
      axios.put(`/api/players/${id}`, body).then(res => {
        this.setState({teamCreated: res.data})
      })
    }

    letGo(id) {
      axios.delete(`/api/players/${id}`).then(res => {
        this.setState({teamCreated: res.data})
      }).catch(err => (`Can't delete your own homie, homie`))
    }


  render() {
    return (
    <div className="app">
      <Header />
      <div className="aligner">
        <Creator addFn={this.addToTeam}/>
        <Potentials  addToTeamfn={this.addToTeam}/>
        <Myteam 
        teamList={this.state.teamCreated} 
        statChangerFn={this.statChanger}
        releasePlayer={this.letGo}/>
      </div>
    </div>
  );
}
}

export default App;
