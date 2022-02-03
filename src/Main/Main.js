import TopTabBar from './TopTabBar';
import Tab from './Tab';
import Preferences from './Preferences';
import TrashBin from './TrashBin';

import React from 'react';



export default function Main ({
	showHeader, setShowHeader,
	showFooter, setShowFooter,
	tabData, setTabData,
	currentTabIndex, setCurrentTabIndex
}) {

	let [showTopTabBar, setShowTopTabBar] = React.useState(true);
	let [showTrashBin, setShowTrashBin] = React.useState(true);

	let topTabBarProps = {
		tabData, currentTabIndex, setCurrentTabIndex, showTopTabBar
	};

	let preferencesProps = {
		showHeader, setShowHeader,
		showFooter, setShowFooter,
		showTrashBin, setShowTrashBin,
		showTopTabBar, setShowTopTabBar
	};

	let trashBinProps = {
		showTrashBin
	};

	return (
		<div className="Main min-h-screen bg-slate-300">
			<TopTabBar {...topTabBarProps} />
			<Tab {...tabData[currentTabIndex]} />
			<Preferences {...preferencesProps} />
			<TrashBin {...trashBinProps} />
		</div>
	);
}
