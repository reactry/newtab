


export default function TopTabBar ({
	tabData, currentTabIndex, setCurrentTabIndex
}) {

	let tabBarItems = tabData.map((v, i) => {
		let itemClass = "basis-full";
		itemClass += (i === currentTabIndex) ? " bg-slate-300" : " bg-slate-200 cursor-pointer hover:bg-slate-400";
		return (
			<div key={i} className={itemClass}
				onClick={() => setCurrentTabIndex(i)}>
				<h3 className="text-md text-center font-bold px-3 pt-3 pb-2">{v.title}</h3>
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
