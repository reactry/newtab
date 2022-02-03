import TopTabBar from './TopTabBar';
import Tab from './Tab';
import Preferences from './Preferences';

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

	let preferencesProps = {
		showHeader, setShowHeader,
		showFooter, setShowFooter,
		showTopTabBar, setShowTopTabBar
	};

	return (
		<div className="Main min-h-screen bg-slate-300">
			<TopTabBar {...topTabBarProps} />
			<Tab {...tabData[currentTabIndex]} />
			<Preferences {...preferencesProps} />
		</div>
	);
}
