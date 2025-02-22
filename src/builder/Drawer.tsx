import { forwardRef, type ReactNode } from "react";
import style from "./Drawer.module.css";

type Ref = HTMLDialogElement;

export type DrawerProps = {
	children?: ReactNode;
	onClose?: () => void;
};

const Drawer = forwardRef<Ref, DrawerProps>(({ onClose, children }, ref) => {
	return (
		<dialog
			ref={ref}
			className={style.dialog}
			onClick={(ev) => {
				// Close the dialog if the user clicks outside of it
				const rect = ev.currentTarget.getBoundingClientRect();
				if (
					ev.clientX < rect.left ||
					ev.clientX > rect.right ||
					ev.clientY < rect.top ||
					ev.clientY > rect.bottom
				) {
					onClose?.();
				}
			}}
		>
			{children}
		</dialog>
	);
});

Drawer.displayName = "Drawer";

export default Drawer;
