import type { ReactNode } from "react";
import { Drawer as DrawerComponent } from "vaul";
import styles from "./Drawer.module.css";

export type DrawerProps = {
	triggerElement?: ReactNode;
	children?: ReactNode;
	title?: ReactNode;
};

const Drawer = ({ triggerElement, children, title }: DrawerProps) => {
	return (
		<DrawerComponent.Root>
			<DrawerComponent.Trigger className={styles.trigger}>
				{triggerElement}
			</DrawerComponent.Trigger>
			<DrawerComponent.Portal>
				<DrawerComponent.Overlay className={styles.overlay} />
				<DrawerComponent.Content className={styles.content}>
					<div className={styles.handle} />
					<DrawerComponent.Title>{title}</DrawerComponent.Title>
					{children}
				</DrawerComponent.Content>
			</DrawerComponent.Portal>
		</DrawerComponent.Root>
	);
};

export default Drawer;
