import React, { Component } from 'react'
import './data.css'

class Data extends Component {
	state = {
		contacts: [],
		contactid: '' 
	}

	componentDidMount() {
		fetch('/api/data').then(res => res.json()).then(contacts => {
			this.setState({contacts}, () => console.log(contacts))
		})
	}

	deleteContact(e) {
		e.preventDefault()
		fetch('/api/data', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: this.state.contactid
			}).then(res => res.json()).then(contacts => this.setState({contacts}))
		})
	}

	render() {
		return (
			<div>
				<h2>Data: </h2>
				<ul>
					{this.state.contacts.map((contact, index) => {
						return (
							<li key={index}>
								{ contact.fname } { contact.lname } 
								<form onSubmit={e => {
									e.preventDefault()
									fetch('/api/data/delete', {
										method: 'POST',
										headers: {
											'Content-Type': 'application/json'
										},
										body: JSON.stringify({
											id: this.state.contactid
										})
									}).then(res => res.json()).then(contacts => this.setState({contacts}))
								}}>
									<input onClick={e => this.setState({contactid: contact.id})} type='submit' value='Delete'/>
								</form>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

export default Data
