import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class LandingPage extends React.Component {
	render() {
		return (
			<div className="col-md-6 col-md-offset-3">
				<h2>Welcome to Voting App</h2>

				<h3>TODOS</h3>
				<ul>
					<li> have two buttons here for login and log out </li>
					<li> there was a way to produce a different homepage for the user depending on whether he/she has been authenticated</li>
					<li> created the sign up form, along with the necessary backend logic </li>
				</ul>
			</div>
		);
	}
}

export { LandingPage as LandingPage };
