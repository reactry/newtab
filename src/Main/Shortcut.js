


export default function Shortcut ({
	title, href, showBigLetter
}) {

	let firstLetter = title[0];

	return (
		<div className="Shortcut inline-block p-2">
			<a href={href} target="_blank"
				className="block px-3 pt-3 pb-2 bg-gray-200 w-32 border-2 hover:text-blue-800 hover:border-blue-800 focus:text-blue-800 focus:border-blue-800 outline-none">
				{showBigLetter && <div className="text-4xl py-4 bg-slate-300 mb-2">{firstLetter}</div>}
				<div className="font-bold text-sm">{title}</div>
			</a>
		</div>
	);
}
