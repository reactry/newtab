import ShowToggle from './ShowToggle';
import Tab from './Tab';



export default function Main ({
	showHeader, setShowHeader,
	showFooter, setShowFooter,
	tabData, setTabData
}) {

	let tabItems = tabData.map((v, i) => {
		return <Tab key={i} {...v} />;
	});

	return (
		<div className="Main min-h-screen bg-slate-300 p-4">
			{tabItems}
			<ShowToggle title="Header"
				show={showHeader}
				setShow={setShowHeader} />
			<ShowToggle title="Footer"
				show={showFooter}
				setShow={setShowFooter} />
		</div>
	);
}
