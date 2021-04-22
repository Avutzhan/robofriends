import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

function App() {
    //state changed and stateful class component changed to functional component with jooks
  // constructor() { ****changed*****
  //   super()
  //   this.state = {
  //     robots: [],
  //     searchfield: ''
  //   }
  // }

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchField] = useState('')

  // componentDidMount() { ****changed****
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => this.setState({ robots: users}))
  //
  // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    },[])

    //чтобы использовать componentDidMount нужно в конце функции добавить пустой массив [] так устроено если массив не добавить то будет бесконечный вызов

  const onSearchChange = (event) => {
    
    //именно тут на this может возникнуть ошибка связывания с компонентом
    //onSearchChange(event) { при таком синтаксисе. Это связано с тем что 
    //this вызывается в другом компоненте SearchBox в инпуте но у инпута нет 
    //стейта. Чтобы такого не было нужно просто поменять синтаксис функции на
    //onSearchChange = (event) => {

    // this.setState({ searchfield: event.target.value }) ****changed****
      setSearchField(event.target.value)

    
  }
    // const { robots, searchfield } = this.state; ****removed*****

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return !robots.length ? <h1>Loading</h1> :

      (
        <div className='tc'>
          <h1 className='f1' >Robofriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>

        </div>

      );

}

export default App;