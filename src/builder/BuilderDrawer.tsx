import { buttonVariants } from "@/components/ui/button";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

const BuilderDrawer = () => {
	return (
		<Drawer>
			<DrawerTrigger
				className={buttonVariants({
					variant: "default",
					className: "w-full",
				})}
			>
				Add Block
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Pick Block</DrawerTitle>
					<DrawerDescription>
						Choose a block to add to your page.
					</DrawerDescription>
				</DrawerHeader>
			</DrawerContent>
		</Drawer>
	);
};

export default BuilderDrawer;
