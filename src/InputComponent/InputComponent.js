import React from 'react';



function InputComponent ({
		shortcuts, setShortcuts,
		inputComponentHidden, setInputComponentHidden
	}) {

	let [shortcut, setShortcut] = React.useState({
		name: "",
		url: ""
	});

	function handleNameInputChange (e) {
		setShortcut({
			...shortcut,
			name: e.target.value
		});
	}

	function handleURLInputChange (e) {
		setShortcut({
			...shortcut,
			url: e.target.value
		});
	}

	function handleSubmit (e) {
		e.preventDefault();
		let url = shortcut.url.trim();
		if (url) {
			setShortcuts([{
				name: shortcut.name,
				url: shortcut.url
			}, ...shortcuts]);
			setShortcut({
				name: "",
				url: ""
			});
			setInputComponentHidden(true);
		}
		console.log(`Added shortcut: ${shortcut.name} (${shortcut.url})`);
	}

	let className = "InputComponent p-12 bg-slate-300";
	if (inputComponentHidden) className += " hidden";
	return (
		<div className={className}>
			<h2 className="text-2xl">Add a shortcut</h2>
			<form className="py-4 space-y-4" onSubmit={handleSubmit}>
				<div>
					<input type="text" name="name" placeholder="Name" 
						value={shortcut.name} onChange={handleNameInputChange} className="p-2" />
				</div>
				<div>
					<input type="text" name="url" placeholder="URL"
						value={shortcut.url} onChange={handleURLInputChange} className="p-2" />
				</div>
				<button type="submit" className="bg-red-600 text-white px-4 py-2">Add</button>
			</form>
		</div>
	);
}

export default InputComponent;
