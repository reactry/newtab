import './App.css';

import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import tabsjson from './tabs.json';



function App () {
	const tabs = tabsjson.tabs;

	let [showHeader, setShowHeader] = React.useState(false);
	let [showFooter, setShowFooter] = React.useState(false);

	let [tabData, setTabData] = React.useState([]);
	React.useEffect(() => {
		setTabData(tabs);
	}, []);

	let [currentTabIndex, setCurrentTabIndex] = React.useState(0);

	let props = {
		showHeader, setShowHeader,
		showFooter, setShowFooter,
		tabData, setTabData,
		currentTabIndex, setCurrentTabIndex
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
