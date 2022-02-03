


export default function TopTabBar ({
	tabData, currentTabIndex, setCurrentTabIndex,
	showTopTabBar, showShortcutCount
}) {

	if (!showTopTabBar) return null;

	let tabBarItems = tabData.map((v, i) => {
		let itemClass = "basis-full";
		itemClass += (i === currentTabIndex) ? " bg-slate-300" : " bg-slate-200 cursor-pointer hover:bg-slate-400";
		return (
			<div key={i} className={itemClass}
				onClick={() => setCurrentTabIndex(i)}>
				<h3 className="text-md text-center font-bold px-3 pt-4 pb-3">
					<span>{v.title}</span>
					{showShortcutCount && <span className="ml-2 bg-gray-500 px-2 py-1 text-white text-sm rounded-full">{v.shortcuts.length}</span>}
				</h3>
			</div>
		);
	});

	return (
		<div className="TopTabBar bg-slate-200">
			<div className="flex max-w-lg m-auto">
				{tabBarItems}
			</div>
		</div>
	);
}
