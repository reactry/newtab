import Shortcut from './Shortcut';



export default function Tab ({
	title, shortcuts, showBigLetter
}) {

	if (!shortcuts) return null;

	let shortcutItems = shortcuts.map((v, i) => {
		let props = {...v, showBigLetter};
		return <Shortcut key={i} {...props} />
	});

	return (
		<div className="Tab px-4 py-12 mb-32">
			<div className="text-center">
				{shortcutItems}
			</div>
		</div>
	);
}
