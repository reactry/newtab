import './App.css';

import React from 'react';

import Header from './Header';
import Footer from './Footer';

import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';

function App () {
	let [shortcuts, setShortcuts] = React.useState([]);
	let [inputComponentHidden, setInputComponentHidden] = React.useState(false);

	let attrs = {shortcuts, setShortcuts, inputComponentHidden, setInputComponentHidden};
	return (
		<div className="App">
			<header className="App-header">
				<Header />
				<InputComponent {...attrs} />
				<OutputComponent {...attrs} />
				<Footer />
			</header>
		</div>
	);
}

export default App;
