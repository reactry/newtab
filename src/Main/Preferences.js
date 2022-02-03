import ShowToggle from './ShowToggle';



export default function Preferences ({
	showHeader, setShowHeader,
	showFooter, setShowFooter,
	showTrashBin, setShowTrashBin,
	showTopTabBar, setShowTopTabBar,
	showShortcutCount, setShowShortcutCount,
	showBigLetter, setShowBigLetter
}) {
	return (
		<div className="Preferences">
			<div className="max-w-lg m-auto border-2 border-slate-400">
				<div className="py-4 px-4">
					<ShowToggle title="Header"
						show={showHeader}
						setShow={setShowHeader} />
					<ShowToggle title="Tabs"
						show={showTopTabBar}
						setShow={setShowTopTabBar} />
					<ShowToggle title="Count"
						show={showShortcutCount}
						setShow={setShowShortcutCount} />
					<ShowToggle title="Big Letter"
						show={showBigLetter}
						setShow={setShowBigLetter} />
					<ShowToggle title="Trash"
						show={showTrashBin}
						setShow={setShowTrashBin} />
					<ShowToggle title="Footer"
						show={showFooter}
						setShow={setShowFooter} />
				</div>
			</div>
		</div>
	);
}
