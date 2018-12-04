import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ViewContact from '../viewcontact/viewcontact'

class Contact extends Component {
	state = {
		id: ''
	}

	render() {
		const { contact } = this.props
		return (
			<BrowserRouter>
				<div>
					<Route exact path='/' render={() => (
						<div className='contact'>
							{ contact.fname } { contact.lname }
							<Link to={`/viewcontact/${contact.fname}${contact.lname}`}><button>View Contact</button></Link>
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

					</div>
					)} />
				<Route exact path='/viewcontact/:contact' render={() => <ViewContact contact={contact} />}/>
			</div>
		</BrowserRouter>
		)
	}
}

export default Contact


