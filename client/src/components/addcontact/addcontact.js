import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AddContact extends Component {
	state = {
		fname: '',
		lname: '',
		number: '',
		email: ''
	}

	render() {
		const { fname, lname, number, email } = this.state

		return (
			<div className='form'>
				<Link to='/'>View Contacts</Link>
				<form onSubmit={() => {
					fetch('/api/data/addcontact', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							fname,
							lname, 
							number,
							email
						})
					})
				}}>
					<input onChange={(e) => this.setState({fname: e.target.value})} type='text' placeholder='First Name' required />
					<input onChange={(e) => this.setState({lname: e.target.value})} type='text' placeholder='Last Name' required />
					<input onChange={(e) => this.setState({number: e.target.value})} type='text' placeholder='Phone Number' />
					<input onChange={(e) => this.setState({email: e.target.value})} type='email' placeholder='Email' />
					<input type='submit' value='Add Contact' />
				</form>
			</div>
		)
	}
}

export default AddContact
