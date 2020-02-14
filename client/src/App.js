import React from 'react';
import './App.css';

import axios from 'axios'

class App extends React.Component {
constructor(){
  super()
  this.state = {
    playersData: []
  }
}

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
      <h1>Hello World!</h1>
    </div>
  );
}
}

export default App;
