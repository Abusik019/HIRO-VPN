interface ModalCardProps {
	title: string;
	text1: string;
	text2: string;
	hint?: string;
	imageUrl: string;
	buttonText?: string;
	onContinue?: () => void;
}

export const ModalCard = ({ title, text1, text2, hint, imageUrl, buttonText = "Продолжить", onContinue }: ModalCardProps) => {
	return (
		<div className="bg-[#1E2025] rounded-[28px] w-119 py-8 px-6 box-border flex flex-col items-center gap-6">
			<h3 className="text-[44px] font-semibold text-center whitespace-pre-line leading-none">{title}</h3>
			<div className="flex items-center">
				<span className="text-2xl font-semibold uppercase">{text1}</span>
				<img src={imageUrl} width={120} height={120} alt={title} />
				<span className="font-kelly text-[32px]">{text2}</span>
			</div>
			{hint && <p className="text-2xl font-semibold">{hint}</p>}
			<button type="button" onClick={onContinue} className="text-[32px] font-semibold bg-brand-red rounded-full w-full leading-none py-2">{buttonText}</button>
		</div>
	)
}
