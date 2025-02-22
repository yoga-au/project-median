import type { ReactNode } from "react";
import style from "./Container.module.css";

const Container = ({ children }: { children?: ReactNode }) => {
	return <main className={style.container}>{children}</main>;
};

export default Container;
