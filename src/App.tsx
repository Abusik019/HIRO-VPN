import { useState } from "react";
import { CrossIcon, PlayMarketIcon, ShareIcon, TelegramIcon } from "./assets/icons";
import { Footer } from "./components/Footer";
import { FortuneWheel } from "./components/FortuneWheel";
import { Header } from "./components/Header";
import { InfoBlock } from "./components/InfoBlock";
import { UserAction } from "./components/UserAction";

function App() {
	const [isHiddenSection, setIsHiddenSection] = useState<boolean>(false);

    return (
		<div className="w-full max-w-294 mx-auto">
			<Header />
			<h1 className="font-kelly text-[64px] text-center uppercase mt-10">Аккаунт</h1>
			{!isHiddenSection && (
				<section className="mt-8">
					<div className="flex items-center justify-between">
						<h2 className="font-kelly text-[44px]">Квесты</h2>
						<button onClick={() => setIsHiddenSection(true)}>
							<CrossIcon />
						</button>
					</div>
					<div className="mt-8 flex items-center gap-6">
						<FortuneWheel />
						<InfoBlock />
					</div>
				</section>
			)}
			<ul className="grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-11 mt-8">
				<UserAction isDone={false} title="оставь отзыв" description="Поделитесь своим мнением о HiroVPNи получите 3 дня VPN бесплатно!" linkText="Оставить отзыв" />
				<UserAction isDone={false} title="Поделиться с Друзьями" description="Пригласите друга в HiroVPN и получите 1 день VPN бесплатно!" linkText="поделиться" icon={<ShareIcon fill="#FF0633"/>} />
				<UserAction isDone={false} title="Поддержите нас лайками" description="Поставьте лайки 5 комментариям, с которыми вы согласны, и мы подарим вам 2 дня VPN бесплатно!" linkText="поддержать" icon={<PlayMarketIcon fill="#FF0633"/>} />
				<UserAction isDone={false} title="Оцени нас в Google Картах" description="Поделись впечатлением и получи 1 день VPN в подарок!" linkText="оценить" />
				<UserAction isDone={false} title="Оцени нас в ЯНДЕКС Картах" description="Поделись впечатлением и получи 1 день VPN в подарок!" linkText="оценить" />
				<UserAction isDone={false} title="Подписаться на TG-канал " description="Подпишитесь на канал HIroVPN - получайте новости и апдейты самыми первыми, а так же 1 день VPN бесплатно!" linkText="подписаться" icon={<TelegramIcon fill="#FF0633"/>} />
			</ul>
			<Footer />
		</div>
	);
}

export default App;