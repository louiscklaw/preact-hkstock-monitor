import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import HelloworldPage from '../routes/helloworld'
import Home from '../routes/home';
import Profile from '../routes/profile';

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import {StatefulInput} from 'baseui/input';

import Nav from '../components/nav/index';

const engine = new Styletron();

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<StyletronProvider value={engine}>
        	<BaseProvider theme={LightTheme}>
            <Nav />
						<Router onChange={this.handleRoute}>
							<Home path="/" />
              <HelloworldPage path="/helloworld" />
							<Profile path="/profile/" user="me" />
							<Profile path="/profile/:user" />
						</Router>
					</BaseProvider>
      	</StyletronProvider>
			</div>
		);
	}
}
