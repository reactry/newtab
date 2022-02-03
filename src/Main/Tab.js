import Shortcut from './Shortcut';



export default function Tab ({
	title, shortcuts
}) {

	if (!shortcuts) return null;

	let shortcutItems = shortcuts.map((v, i) => {
		return <Shortcut key={i} {...v} />
	});

	return (
		<div className="Tab px-4 py-12 mb-32">
			<div className="text-center">
				{shortcutItems}
			</div>
		</div>
	);
}
