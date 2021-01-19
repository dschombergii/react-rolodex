import React, { Component, useState } from 'react';
import axios from 'axios';

import './App.css';

import ContactCard from './components/ContactCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      contactList: []
     }
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api?results=25')
      .then(res => {
        const contactList = res.data.results
        this.setState({ contactList })
        console.log(contactList)
      })
  }
  
  render() { 
    return ( 
      <div className="App">
        <header className="App-header">
          <h1>Contact List:</h1><br/>
          {this.state.contactList.map((user, id) => {
            return(
              <ContactCard key={user.cell} user={user}/>
            )
          })}
        </header>
      </div>
     );
  }
}
 
export default App;

