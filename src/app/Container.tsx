import type { ReactNode } from "react";

const Container = ({ children }: { children?: ReactNode }) => {
	return <main className="p-6">{children}</main>;
};

export default Container;
