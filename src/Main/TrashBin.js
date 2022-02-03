


export default function TrashBin ({
	showTrashBin
}) {

	if (!showTrashBin) return null;

	return (
		<div className="TrashBin py-8">
			<div className="max-w-lg mx-auto border-2 bg-slate-200 py-8 px-4 text-center">
				<h2 className="text-3xl">Trash</h2>
			</div>
		</div>
	);
}
