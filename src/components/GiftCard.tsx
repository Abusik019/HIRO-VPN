interface GiftCardInterface{
	title: string;
	imageUrl: string;
	content: string;	
}	

export const GiftCard = ({ title, imageUrl, content }: GiftCardInterface) => {
	return (
		<div className="w-30 shrink-0 border border-[#C3C2BD] rounded-lg py-4 px-2 box-border flex flex-col items-center">
			<h4 className="text-[#C3C2BD] text-2xl font-semibold text-center uppercase">{title}</h4>
			<img src={imageUrl} width={120} height={120} alt="card image" />
			<span className="text-[#C3C2BD] text-[32px] text-center font-kelly text-nowrap">{content}</span>
		</div>
	)
}
