import React, { Component } from 'react'
import './data.css'

class Data extends Component {
	state = {
		contacts: [] // will be filled with backend data
	}

	componentDidMount() {
		fetch('/api/data').then(res => res.json()).then(contacts => {
			this.setState({contacts}, () => console.log(contacts))
		})
	}

	render() {
		return (
			<div>
				<h2>Data: </h2>
				<ul>
					{this.state.contacts.map((contact, index) => {
						return <li key={index}>{ contact.fname } { contact.lname }</li>
					})}
				</ul>
			</div>
		)
	}
}

export default Data
