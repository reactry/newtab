import ShowToggle from './ShowToggle';



export default function Main ({
	showHeader, setShowHeader,
	showFooter, setShowFooter,
	tabs, setTabs
}) {

	return (
		<div className="Main min-h-screen bg-slate-300 p-4">
			<h1 className="text-2xl">Main</h1>
			<ShowToggle title="Header"
				show={showHeader}
				setShow={setShowHeader} />
			<ShowToggle title="Footer"
				show={showFooter}
				setShow={setShowFooter} />
		</div>
	);
}
