import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import HelloworldPage from '../routes/helloworld'
import Home from '../routes/home';
import Profile from '../routes/profile';

import BasicList from '../routes/basic_list';
import BuySellList from '../routes/buy_sell_list'
import TestDataTablePage from '../routes/TestDataTable';
import TestCssGrid from '../routes/TestCssGrid';
import TestPages from '../routes/TestPages';
import DJISingleQuoteDashboard from '../routes/DJISingleQuoteDashboard'

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import {StatefulInput} from 'baseui/input';

import Nav from '../components/nav';


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
            <div style={{
              height: '100vh',
              display:'grid',
              gridTemplateRows: '10% auto'
              }}>

              <div>
                <Nav></Nav>
              </div>

              <div>
                <Router onChange={this.handleRoute}>
                  <Home path="/" />

                  <HelloworldPage path="/helloworld" />

                  <BuySellList path="/buy_sell_list" />
                  <BasicList path="/basic_list" />

                  <Profile path="/profile/" user="me" />
                  <Profile path="/profile/:user" />

                  <TestDataTablePage path="/test_datatable" />
                  {/* <TestCssGrid path="/test_css_grid" /> */}
                  <TestPages path="/test_pages" />

                  <DJISingleQuoteDashboard path="/dji_single_quote_dashboard" />

                </Router>
              </div>
            </div>
					</BaseProvider>
      	</StyletronProvider>
			</div>
		);
	}
}
