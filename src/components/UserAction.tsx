import classNames from "classnames";

interface UserActionProps {
	isDone: boolean;
	title: string;
	description: string;
	linkText: string;
	icon?: React.ReactNode;
}

export const UserAction = ({ isDone, title, description, linkText, icon }: UserActionProps) => {
	return (
		<li className="relative border border-[#2E3139] rounded-lg p-6 box-border flex flex-col items-center justify-between">
			<div className={classNames("absolute top-0 left-6 text-xl leading-none px-2 py-0.5", {
				"bg-white text-[#1E2025]": isDone,
				"bg-brand-red text-white": !isDone,
			})}>
				{isDone ? "Выполнен" : "Доступен"}
			</div>
			<div>
				<h4 className="uppercase mt-1 text-[32px] font-semibold">{title}</h4>
				<p className="text-xl leading-5 mt-2 text-[#C3C2BD]">{description}</p>
			</div>
			{!isDone && (
				<a href="#" className="flex items-center justify-center gap-4 mt-4 bg-brand-white w-full text-2xl text-center font-semibold uppercase text-[#1E2025] rounded-full leading-none py-2">
					<span>{linkText}</span>
					{icon && <span>{icon}</span>}
				</a>
			)}
		</li>
	)
}
