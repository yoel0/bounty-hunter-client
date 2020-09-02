import React, { Component } from 'react';
import NewBountyForm from './NewBountyForm.js';

class ShowBounty extends Component {
	// state = {
	// 	showForm: false,
	// };

	// toggleForm = () => {
	// 	this.setState({ showForm: !this.state.showForm });
	// };

	render() {
		let display = <h3>Crime is on the rise!</h3>;
		let form = '';
		if (this.props.showForm) {
			form = (
				<NewBountyForm
					current={this.props.current}
					refreshBounties={this.props.refreshBounties}
				/>
			);
		}
		if (this.props.current.name) {
			display = (
				<div className='show-bounty'>
					<h2>{this.props.current.name}</h2>
					<h3>Wanted For: {this.props.current.wantedFor}</h3>
					<h3>Client: {this.props.current.client}</h3>
					<p>
						Last seen on the{' '}
						<strong>{this.props.current.ship || 'unknown'}</strong>
					</p>
					<p>
						<strong>STATUS:</strong>{' '}
						{this.props.current.captured ? 'CAUGHT' : 'AT LARGE'}{' '}
					</p>
					<button onClick={this.props.toggleForm}>
						{this.props.showForm ? 'Cancel' : 'Edit'}
					</button>
					{form}
				</div>
			);
		}
		return <>{display}</>;
	}
}

export default ShowBounty;
