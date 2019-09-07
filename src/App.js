import React, {Component} from 'react';
import './App.css';
import Header from './components/header'
import Myteam from './components/myteam'
// import Player from './components/player'
import Creator from './components/creator'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      teamCreated: []
    }
  }

    addToTeam(body) {
      axios.post('/api/players', body).then(res => {
        this.setState({teamCreated: res.data})
      })
    }


  render() {
    return (
    <div className="App">
      <Myteam 
        teamList={this.state.teamCreated} />
      {/* <Player /> */}
      <Header />
      <Creator />
    </div>
  );
}
}

export default App;
