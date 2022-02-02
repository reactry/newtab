import './App.css';

import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App () {
	let [tabs, setTabs] = React.useState([]);

	let [showHeader, setShowHeader] = React.useState(true);
	let [showFooter, setShowFooter] = React.useState(true);

	let props = {
		showHeader, setShowHeader,
		showFooter, setShowFooter,
		tabs, setTabs
	};

	return (
		<div className="App">
			<header className="App-header">
				<Header showHeader={showHeader} />
				<Main {...props} />
				<Footer showFooter={showFooter} />
			</header>
		</div>
	);
}

export default App;
