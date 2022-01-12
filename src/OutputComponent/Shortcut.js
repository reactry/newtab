


function Shortcut ({shortcut}) {
	return (
		<div className="border-slate-300 border-l-red-600 border-2 border-l-4 shadow-md rounded w-56 py-4 px-6 my-6 mx-2 inline-block" >
			<div className="">
				<div className="mb-4">
					<h4 className="text-base">{shortcut.name}</h4>
				</div>
				<a className="bg-red-300 px-3 py-1 text-sm inline-block rounded-xl" href={shortcut.url}>open</a>
			</div>
		</div>
	);
}

export default Shortcut;
