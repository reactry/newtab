


export default function Shortcut ({
	title, href
}) {

	return (
		<div className="Shortcut inline-block p-1">
			<a href={href} className="block px-3 py-2 bg-gray-200">{title}</a>
		</div>
	);
}
