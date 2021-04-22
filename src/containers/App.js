import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(users => this.setState({ robots: users}))
    
  }

  onSearchChange = (event) => {
    
    //именно тут на this может возникнуть ошибка связывания с компонентом
    //onSearchChange(event) { при таком синтаксисе. Это связано с тем что 
    //this вызывается в другом компоненте SearchBox в инпуте но у инпута нет 
    //стейта. Чтобы такого не было нужно просто поменять синтаксис функции на
    //onSearchChange = (event) => {

    this.setState({ searchfield: event.target.value })

    
  }

  render() {
    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter(robot => {  
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return !robots.length ? <h1>Loading</h1> :

      (
        <div className='tc'>
          <h1 className='f1' >Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
          
        </div>
    
      );
    
    
  } 
}

export default App;