


export default function ShortcutMenu ({
	href
}) {

	function copyHref (e) {
		navigator.clipboard.writeText(href);
	}

	return (
		<div className="ShortcutMenu px-4 py-3 bg-slate-200 -ml-1 border-2 text-blue-800 border-blue-800">
			<div className="bg-slate-300 hover:bg-slate-400 px-4 py-2 rounded-md cursor-pointer font-bold text-sm" onClick={copyHref}>Copy</div>
		</div>
	);
}
