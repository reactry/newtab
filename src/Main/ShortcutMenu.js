


export default function ShortcutMenu ({
	href, setShowMenu
}) {

	let buttonClass = "bg-slate-300 hover:bg-slate-400 px-4 py-1 rounded-sm cursor-pointer font-bold text-sm";

	function copyHref (e) {
		navigator.clipboard.writeText(href);
	}

	function editShortcut (e) {
		//
	}

	function closeMenu (e) {
		setShowMenu(false);
	}

	return (
		<div className="ShortcutMenu px-3 py-3 bg-slate-200 -ml-1 border-2 space-y-2 text-blue-800 border-blue-800">
			<div className={buttonClass} onClick={copyHref}>Copy</div>
			<div className={buttonClass} onClick={editShortcut}>Edit</div>
			<div className={buttonClass} onClick={closeMenu}>Close</div>
		</div>
	);
}
