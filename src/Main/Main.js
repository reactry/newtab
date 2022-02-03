import ShowToggle from './ShowToggle';
import TopTabBar from './TopTabBar';
import Tab from './Tab';

import React from 'react';



export default function Main ({
	showHeader, setShowHeader,
	showFooter, setShowFooter,
	tabData, setTabData,
	currentTabIndex, setCurrentTabIndex
}) {

	let [showTopTabBar, setShowTopTabBar] = React.useState(true);

	let topTabBarProps = {
		tabData, currentTabIndex, setCurrentTabIndex, showTopTabBar
	};

	return (
		<div className="Main min-h-screen bg-slate-300">
			<TopTabBar {...topTabBarProps} />
			<Tab {...tabData[currentTabIndex]} />
			<div>
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
