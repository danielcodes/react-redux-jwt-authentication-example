import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';


function BasePage(props) {
	return (
		<div>
			<AppBar position='static'>
			{localStorage.getItem('user') ? (
					<div>
						<Button component={Link} to="/">Home</Button>
						<Button component={Link} to="/login">Log Out</Button>
					</div>
				) : (
					<div>
						<Button component={Link} to="/">Home</Button>
						<Button component={Link} to="/login">Login</Button>
						<Button component={Link} to="/signup">Sign Up</Button>
					</div>
				)}
			</AppBar>

			{props.children}
		</div>
	)
}

export { BasePage as BasePage };
