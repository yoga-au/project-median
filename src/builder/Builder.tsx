import Drawer from "./Drawer";

const Builder = () => {
	return (
		<div>
			<Drawer
				title={"Pick Block"}
				triggerElement={<span>Add Block</span>}
			></Drawer>
		</div>
	);
};

export default Builder;
