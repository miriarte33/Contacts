import React, { Component } from 'react'
import './data.css'
import Contact from '../contact/contact'
import { Link } from 'react-router-dom'

class Data extends Component {
	state = {
		contacts: [],
		deleted: false
	}

	componentDidMount() {
		fetch('/api/data').then(res => res.json()).then(contacts => {
			this.setState({contacts})
		})
	}
	
	deleteContact = () => {
		this.setState({deleted: true}) 
	}

	render() {
		return (
			<div>
				<Link to='/addcontact'>Add Contact</Link>
				<h2>Contacts: </h2>
				<ul>
					{this.state.contacts.map((contact, index) => {
						return <Contact contactdeleted={this.deleteContact} contact={contact} key={index}/> 
					})}
				</ul>
			</div>
		)
	}
}

export default Data
