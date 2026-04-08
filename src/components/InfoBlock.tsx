export const InfoBlock = () => {
	return (
		<article className="relative w-1/2 bg-white text-[#1E2025] p-6 box-border">
			<div className="absolute top-0 left-6 bg-brand-red text-white text-xl leading-none px-2 py-0.5">Доступен</div>
			<h4 className="mt-1 text-[32px] font-semibold">Расскажи о Hiro</h4>
			<p className="text-xl leading-5 mt-2">	
				Просто напиши пост/статью о нас в крупном канале или на своей странице в соцсетях со ссылкой на нас.<br />
				Пришли ссылку на пост/статью — и мы начислим тебе от 15 до 90 дней VPN бесплатно! <br /> 
				Чем больше охват, тем длиннее подарок!
			</p>
			<button className="mt-4 bg-brand-red w-full text-2xl text-center font-semibold uppercase text-white rounded-full leading-none py-2">Отправить ссылки</button>
		</article>
	)
}
