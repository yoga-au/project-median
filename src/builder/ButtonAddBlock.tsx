import { type MouseEventHandler } from "react";
import style from "./ButtonAddBlock.module.css";

export type ButtonAddBlockProps = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

const ButtonAddBlock = ({ onClick }: ButtonAddBlockProps) => {
	return (
		<button className={style.button} onClick={onClick}>
			Add Block
		</button>
	);
};

export default ButtonAddBlock;
