import TopTabBar from './TopTabBar';
import Tab from './Tab';
import Preferences from './Preferences';
import ShowToggle from './ShowToggle';
import TrashBin from './TrashBin';

import React from 'react';



export default function Main ({
	showHeader, setShowHeader,
	showFooter, setShowFooter,
	tabData, setTabData,
	currentTabIndex, setCurrentTabIndex
}) {

	let [showTopTabBar, setShowTopTabBar] = React.useState(true);
	let [showPreferences, setShowPreferences] = React.useState(true);
	let [showTrashBin, setShowTrashBin] = React.useState(true);
	let [showShortcutCount, setShowShortcutCount] = React.useState(true);
	let [showBigLetter, setShowBigLetter] = React.useState(true);

	let topTabBarProps = {
		tabData, currentTabIndex, setCurrentTabIndex,
		showTopTabBar, showShortcutCount
	};

	let tabProps = {
		...tabData[currentTabIndex],
		showBigLetter
	};

	let preferencesProps = {
		showHeader, setShowHeader,
		showFooter, setShowFooter,
		showTrashBin, setShowTrashBin,
		showTopTabBar, setShowTopTabBar,
		showShortcutCount, setShowShortcutCount,
		showBigLetter, setShowBigLetter
	};

	let trashBinProps = {
		showTrashBin
	};

	return (
		<div className="Main min-h-screen bg-slate-300 pb-32">
			<TopTabBar {...topTabBarProps} />
			<Tab {...tabProps} />
			<div>
				<div className="max-w-lg mx-auto py-4 px-4">
					<ShowToggle title="Preferences"
						show={showPreferences}
						setShow={setShowPreferences} />
				</div>
			</div>
			{showPreferences && <Preferences {...preferencesProps} />}
			<TrashBin {...trashBinProps} />
		</div>
	);
}
