import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    user:[
      { name: 'animesh'},
      { name: 'anila'}
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      user:[
          { name: event.target.value},
          { name: event.target.value}
        ]
    });
  }

  render() {
    const inLineStyle = {
      width: '50%',
      backgroundColor: 'blue',
      textAlign : 'center'
    };

    return (
      <div className='App'>
        <UserInput style={inLineStyle} changed={this.nameChangeHandler} username={this.state.user[0].name}/>
        <UserOutput username={this.state.user[0].name}/>
        <UserInput style={inLineStyle} changed={this.nameChangeHandler} username={this.state.user[1].name}/>
        <UserOutput username={this.state.user[1].name}/>
      </div>
    );
  }
}

export default App;
