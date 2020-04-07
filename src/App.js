import React, { Component } from 'react';

// import logo from './logo.svg';

import { SearchBox } from './components/search-box/search-box.component'
import { CardList } from './components/card-list/card-list.component'

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "Indhu",
      monsters: [],
      searchField: " "
    }
  }

  changeName = () => {
    this.setState({
      name: "Veno"
    });
  }

  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({
        monsters: users
      })
      )
  }

  //    this.handleChange = this.handleChange.bind(this);
  //    Give this in the constructor incase handlechange is written as handlechange(e){  }
  //            In this case, Bind should be given...
  //    Lexical Scoping
  
  handleChange = (e) => {
      this.setState({
        searchField: e.target.value
      })
  }
  render() {

    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;

    return (
      <div className="App">
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hey Hi this is {this.state.name}
            </p>
            <button type="submit" onClick={this.changeName}>Yuck Change The Name</button>
          </header>
        </div> */}
        {/* <input
          type="search"
          placeholder="Search monsters"
          onChange={(e) => {
            this.setState({
              searchField: e.target.value
            }, () => console.log(this.state));
          }}
        /> */}
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChange}
        //() => console.log(this.state)); To continue with Async and print the log..
        />

        <CardList monsters={filteredMonsters} ></CardList>
        {/* <button type="submit" onClick={this.changeMonstersName}>Yuck Change The Name</button> */}
      </div >

    )
  }
}

export default App;
