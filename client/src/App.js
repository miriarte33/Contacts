import React, { Component } from 'react';
import logo from './logo.svg';
import Data from './components/data/data'
import AddContact from './components/addcontact/addcontact'
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'

class App extends Component {
	render() {
		console.log('here')
		return (
			<BrowserRouter>
				<div className="App">
					<Route exact path='/' render={() => <Data /> } /> 
					<Route exact path='/addcontact' render={() => <AddContact />}/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
