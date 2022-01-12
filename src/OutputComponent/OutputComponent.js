
import Shortcut from './Shortcut';

function OutputComponent ({shortcuts}) {
	let shortcutItems = shortcuts.map((shortcut, index) => {
		return (
			<Shortcut key={index} shortcut={shortcut} />
		);
	});

	return (
		<div className="OutputComponent p-12 min-h-screen">
			<div className="">
				{shortcutItems}
			</div>
		</div>
	);
}

export default OutputComponent;
