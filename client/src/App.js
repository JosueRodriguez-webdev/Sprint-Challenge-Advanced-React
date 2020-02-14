import React from 'react';
import './App.css';
import axios from 'axios'

import { PlayersOnScreen } from './components/PlayersOnScreen'


class App extends React.Component {
constructor(){
  super()
  this.state = {
    playersData: []
  }
}

// Called api of players and set fetched data to the state
componentDidMount() {
  axios.get(`http://localhost:5000/api/players`)
  .then(res => {
    console.log(`Success! you got data in you app.js`,res.data)
    this.setState({playersData: res.data})
  })
  .catch(err => {
    console.log(`Error, try again in your app.js`,err)
  })
}



  render() {
  return (
    <div className="App">
      <h1>Players!</h1>
      {this.state.playersData.map((players) => {
        console.log(players)
        return <PlayersOnScreen key={players.id} players={players}/>
      })}
    </div>
  );
}
}

export default App;
