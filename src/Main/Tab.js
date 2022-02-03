import Shortcut from './Shortcut';



export default function Tab ({
	title, shortcuts
}) {

	let shortcutItems = shortcuts.map((v, i) => {
		return <Shortcut key={i} {...v} />
	});

	return (
		<div className="Tab px-4 py-4">
			<div>
				<h2 className="px-2 py-2 font-bold">{title}</h2>
			</div>
			<div>
				{shortcutItems}
			</div>
		</div>
	);
}
