


export default function ShowToggle ({
	title, show, setShow
}) {

	let circleClass = "h-5 w-5 -translate-y-1 rounded-full";
	circleClass += show ? " bg-green-600 translate-x-7" : " bg-gray-600";

	return (
		<div className="ShowToggle px-2 py-2">
			<h2 className="text-sm font-bold">{title}</h2>
			<div className="px-2 py-2">
				<div className="bg-gray-400 w-12 h-3 rounded-full cursor-pointer" onClick={(e) => setShow(!show)}>
					<div className={circleClass}></div>
				</div>
			</div>
		</div>
	);
}
