import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField} from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

function App() {
    const [robots, setRobots] = useState([])
    // const [searchfield, setSearchField] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
        console.log(count)
    },[count])

  // const onSearchChange = (event) => {
  //     setSearchField(event.target.value)
  //
  // }

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return !robots.length ? <h1>Loading</h1> :

      (
        <div className='tc'>
          <h1 className='f1' >Robofriends</h1>
          <button onClick={()=>setCount(count+1)}>Click me</button>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>

        </div>

      );

}

export default connect(mapStateToProps, mapDispatchToProps)(App);