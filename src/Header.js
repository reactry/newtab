


export default  function Header ({
	showHeader
}) {
	if (!showHeader) return null;

	return (
		<div className="Header bg-red-500 text-white p-4">
			<h1 className="text-center text-xl">Reactry's Newtab</h1>
		</div>
	);
}
