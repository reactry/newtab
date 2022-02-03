import ShowToggle from './ShowToggle';
import TopTabBar from './TopTabBar';
import Tab from './Tab';



export default function Main ({
	showHeader, setShowHeader,
	showFooter, setShowFooter,
	tabData, setTabData,
	currentTabIndex, setCurrentTabIndex
}) {

	let topTabBarProps = {
		tabData, currentTabIndex, setCurrentTabIndex
	};

	return (
		<div className="Main min-h-screen bg-slate-300">
			<TopTabBar {...topTabBarProps} />
			<Tab {...tabData[currentTabIndex]} />
			<ShowToggle title="Header"
				show={showHeader}
				setShow={setShowHeader} />
			<ShowToggle title="Footer"
				show={showFooter}
				setShow={setShowFooter} />
		</div>
	);
}
