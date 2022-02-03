


export default function TrashBin ({
	showTrashBin
}) {

	if (!showTrashBin) return null;

	return (
		<div className="TrashBin py-16 px-8">
			<div className="max-w-5xl mx-auto border-2 bg-slate-200 py-8 px-4 text-center">
				<h2 className="text-2xl">Trash</h2>
			</div>
		</div>
	);
}
