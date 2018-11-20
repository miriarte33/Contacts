import React, { Component } from 'react'

class Contact extends Component {
	state = {
		id: ''
	}

	render() {
		const { contact } = this.props
		return (
			<li>
				{ contact.fname } { contact.lname }
				<form onSubmit={e => {
					fetch('/api/data/delete', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							id: this.state.id
						})
					})
					this.props.contactdeleted()
				}}>
					<input onClick={e => this.setState({id: contact.id})} type='submit' value='Delete'/>
				</form>
			</li>
		)
	}
}

export default Contact


