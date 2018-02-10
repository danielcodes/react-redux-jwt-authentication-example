import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { LandingPage } from '../LandingPage';
import { SignUpPage } from '../SignUpPage';

const theme = createMuiTheme();


class App extends React.Component {
	constructor(props) {
		super(props);

		const { dispatch } = this.props;
		history.listen((location, action) => {
			// clear alert on location change
			dispatch(alertActions.clear());
		});
	}

	render() {
		const { alert } = this.props;
		return (
			<MuiThemeProvider theme={theme}>
				{alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}

				<Router history={history}>
					<div>
						<PrivateRoute exact path="/" component={HomePage} />
						<Route path="/home" component={LandingPage} />
						<Route path="/login" component={LoginPage} />
						<Route path="/signup" component={SignUpPage} />
					</div>
				</Router>
			</MuiThemeProvider>
		);
	}
}

function mapStateToProps(state) {
	const { alert } = state;
	return {
		alert
	};
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
