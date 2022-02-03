import ShowToggle from './ShowToggle';



export default function Preferences ({
	showHeader, setShowHeader,
	showFooter, setShowFooter,
	showTopTabBar, setShowTopTabBar
}) {
	return (
		<div className="Preferences max-w-lg m-auto border-2 border-slate-400">
			<div className="py-4 px-4">
				<ShowToggle title="Header"
					show={showHeader}
					setShow={setShowHeader} />
				<ShowToggle title="Tabs"
					show={showTopTabBar}
					setShow={setShowTopTabBar} />
				<ShowToggle title="Footer"
					show={showFooter}
					setShow={setShowFooter} />
			</div>
		</div>
	);
}
