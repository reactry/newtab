import './App.css';

import React from 'react';

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';

function App () {
	let [shortcuts, setShortcuts] = React.useState([]);
	let [inputComponentHidden, setInputComponentHidden] = React.useState(false);

	let attrs = {shortcuts, setShortcuts, inputComponentHidden, setInputComponentHidden};
	return (
		<div className="App">
			<header className="App-header">
				<HeaderComponent />
				<InputComponent {...attrs} />
				<OutputComponent {...attrs} />
				<FooterComponent />
			</header>
		</div>
	);
}

export default App;