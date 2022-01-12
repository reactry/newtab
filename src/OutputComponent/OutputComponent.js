
import Shortcut from './Shortcut';

function OutputComponent ({
		shortcuts, inputComponentHidden, setInputComponentHidden
	}) {
	let shortcutItems = shortcuts.map((shortcut, index) => {
		return (
			<Shortcut key={index} shortcut={shortcut} />
		);
	});

	function toggleInputComponentVisibility () {
		inputComponentHidden ? setInputComponentHidden(false) : setInputComponentHidden(true);
	}

	let addButton;
	if (inputComponentHidden) {
		addButton = <button className="bg-red-600 text-white px-4 py-2 ml-8 text-base" onClick={toggleInputComponentVisibility}>add</button>;
	} else {
		addButton = <button className="bg-red-600 text-white px-4 py-2 ml-8 text-base" onClick={toggleInputComponentVisibility}>done</button>;
	}

	return (
		<div className="OutputComponent p-12 min-h-screen">
			<div>
				<span className="text-2xl">Shortcuts</span>
				{addButton}
			</div>
			<div className="">
				{shortcutItems}
			</div>
		</div>
	);
}

export default OutputComponent;
