import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './viewcontact.css'

class ViewContact extends Component {
	render() {
		const { contact } = this.props

		return (
			<div className='view-contact'>
				<Link to='/'>Close Contact</Link>
				<p>{ contact.number }</p>
				<p>{ contact.email }</p>
			</div>
		)
	}
}

export default ViewContact
