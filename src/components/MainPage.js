import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';

import './MainPage.css';

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots()
    }

    filterRobots = () => {
        return this.props.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }

    render() {
        const { onSearchChange, robots, isPending } = this.props;

        return isPending ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <Header />
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <CardList robots={this.filterRobots()} />
                    </Scroll>
                </div>
            );
    }
}

export default MainPage;