import * as React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { setSearchField, requestRobots } from "../actions";
import MainPage from '../components/MainPage';

export interface IRobot {
    name: string;
    id: number;
    email: string;
}

interface IAppProps {
}

interface IAppState {
    robots: Array<IRobot>;
    searchfield: string;
}

const mapStateToProps = (state: any) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSearchChange: (event: any) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component<IAppProps, IAppState> {
    render(): JSX.Element {
        return <MainPage { ...this.props }/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);