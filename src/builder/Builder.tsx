import { useRef } from "react";
import ButtonAddBlock from "./ButtonAddBlock";
import Drawer from "./Drawer";

const Builder = () => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const openDialog = () => {
		dialogRef.current?.showModal();
	};

	const closeDialog = () => {
		dialogRef.current?.close();
	};

	return (
		<div>
			<ButtonAddBlock
				onClick={() => {
					openDialog();
				}}
			/>
			<Drawer ref={dialogRef} onClose={closeDialog}>
				<h2>Add Block</h2>
			</Drawer>
		</div>
	);
};

export default Builder;
