import React from "react";

const btnOptions = {
	primary: "bg-red-500 hover:bg-red-700 text-white font-bold rounded",
	secondary: "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",
	tertiary: "bg-green-500 hover:bg-green-700 text-white font-bold rounded",
};

const btnSizes = {
	sm: "py-1 px-2 text-sm",
	md: "py-2 px-4 text-md",
	lg: "py-3 px-6 text-lg",
	xl: "py-4 px-8 text-xl",
	"7xl": "py-5 px-10 text-7xl",
};

export interface ButtonExampleProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: keyof typeof btnOptions;
	size?: keyof typeof btnSizes;
}

export default function BtnExample({
	className,
	variant,
	size,
	...rest
}: ButtonExampleProps) {
	return (
		<button
			className=
			{
				`${btnOptions[variant ? variant : "primary"]} 
				${btnSizes[size ? size : "md"]} 
				${className}`
			}
			{...rest}
		/>
	);
}