import {
	AndroidIcon,
	AppStoreIcon,
	CreditCardIcon,
	LinuxIcon,
	MacosIcon,
	PlayMarketIcon,
	SberPayIcon,
	SbpIcon,
	TetherIcon,
	TelegramIcon,
	TinkoffPayIcon,
	WindowsIcon,
} from "../assets/icons";

interface Link {
	name: string;
	icon?: React.ReactNode;
}

const NAV_LINKS: Link[] = [
	{ name: "FAQ" },
	{ name: "Тарифы" },
	{ name: "Блог" },
	{ name: "Роутеры" },
	{ name: "Партнёрам" },
	{ name: "Аккаунт" },
];

const DOWNLOAD_LINKS: Link[] = [
	{ name: "IOS", icon: <AppStoreIcon /> },
	{ name: "Android", icon: <PlayMarketIcon /> },
	{ name: "Android TV", icon: <AndroidIcon /> },
	{ name: "Windows", icon: <WindowsIcon /> },
	{ name: "Mac Os", icon: <MacosIcon /> },
	{ name: "Linux", icon: <LinuxIcon /> },
];

const PAYMENT_LINKS: Link[] = [
	{ name: "СБП", icon: <SbpIcon /> },
	{ name: "Sberpay", icon: <SberPayIcon /> },
	{ name: "Tinkoff Pay", icon: <TinkoffPayIcon /> },
	{ name: "Банковская карта", icon: <CreditCardIcon /> },
	{ name: "Криптовалюта", icon: <TetherIcon /> },
];

const SUPPORT_LINKS = ["Публичная оферта", "Пользовательское соглашение"];

export const Footer = () => {
	return (
		<footer className="mt-12 overflow-hidden rounded-xl rounded-b-none border border-[#2A2D36]">
			<div className="grid grid-cols-1 gap-8 px-6 py-7 md:grid-cols-[1.15fr_1fr_1fr_1fr] md:gap-10 md:px-9 md:py-8">
				<div className="flex flex-col gap-6">
					<svg width="65" height="24" viewBox="0 0 65 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14.098 4.632V19.368H15.61V21H10.666V19.368H12.13V12.504H5.45797V19.368H6.92197V21H1.97797V19.368H3.48997V4.632H1.97797V3H6.92197V4.632H5.45797V10.896H12.13V4.632H10.666V3H15.61V4.632H14.098ZM22.5758 19.368H24.1358V21H19.0958V19.368H20.6078V4.632H19.0958V3H24.1358V4.632H22.5758V19.368ZM41.2026 19.368V21H36.4506V19.368H37.7466L33.6426 12.768L31.0986 14.328V19.368H32.6586V21H27.6186V19.368H29.1306V4.632H27.6186V3H36.1866C37.2426 3 37.9546 3.208 38.3226 3.624C38.6906 4.024 38.8746 4.816 38.8746 6V7.488C38.8746 8.096 38.8186 8.576 38.7066 8.928C38.5946 9.28 38.3946 9.6 38.1066 9.888C37.8186 10.16 37.4346 10.44 36.9546 10.728C36.4746 11.016 35.8666 11.384 35.1306 11.832L39.8586 19.368H41.2026ZM31.0986 12.408L37.1226 8.688V4.632H31.0986V12.408ZM50.3582 3C51.3342 3 52.0382 3.272 52.4702 3.816C52.9182 4.344 53.1422 5.136 53.1422 6.192V17.736C53.1422 18.888 52.9502 19.72 52.5662 20.232C52.1822 20.744 51.4862 21 50.4782 21H45.8702C44.3342 21 43.4302 20.424 43.1582 19.272C43.0622 18.92 43.0142 18.528 43.0142 18.096V6.192C43.0142 5.12 43.1902 4.344 43.5422 3.864C43.9422 3.288 44.6542 3 45.6782 3H50.3582ZM44.9342 19.368H51.2222V4.632H44.9342V19.368Z" fill="#C3C2BD"/>
						<path d="M55.6364 21.3378V19.5411H56.304V20.0516L62.3324 18.4316L56.304 16.8215V17.44H55.6364V15.5451H56.304V16.0753L63 17.872V19.0011L56.304 20.788V21.3378H55.6364ZM55.6364 11.1598C55.6364 10.7278 55.7182 10.4365 55.8818 10.286C56.0455 10.1355 56.3695 10.0602 56.8538 10.0602H57.5705C57.9436 10.0602 58.2153 10.1387 58.3855 10.2958C58.4705 10.3744 58.5524 10.4791 58.6309 10.61C58.7095 10.7344 58.8044 10.8882 58.9156 11.0715L60.2705 13.2413H62.3324V12.6031H63V14.6649H62.3324V14.0464H56.3138V14.6649H55.6364V11.1598ZM56.3138 10.7769V13.2413H59.4851L57.9633 10.7769H56.3138ZM56.304 3.05245V3.671H63V4.63318L57.2662 7.41173H62.3324V6.77354H63V8.83536H62.3324V8.21682H56.304V8.83536H55.6364V7.32336L61.488 4.47609H56.304V5.11427H55.6364V3.05245H56.304Z" fill="#C3C2BD"/>
					</svg>
					<ul className="flex flex-col gap-4">
						{NAV_LINKS.map((link) => (
							<li key={link.name}>
								<a className="font-kelly text-xl" href="#">{link.name}</a>
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col gap-5">
					<h3 className="text-2xl font-semibold uppercase text-[#C3C2BD]">Скачать</h3>
					<ul className="flex flex-col gap-4">
						{DOWNLOAD_LINKS.map((link) => (
							<li key={link.name}>
								<a className="inline-flex items-center gap-4 font-kelly text-xl" href="#">
									<span className="inline-flex size-6 items-center justify-center text-brand-white">{link.icon}</span>
									<span>{link.name}</span>
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col gap-5">
					<h3 className="text-2xl font-semibold uppercase text-[#C3C2BD]">Способы оплаты</h3>
					<ul className="flex flex-col gap-4">
						{PAYMENT_LINKS.map((link) => (
							<li key={link.name}>
								<a className="inline-flex items-center gap-4 font-kelly text-xl" href="#">
									<span className="inline-flex size-6 items-center justify-center text-brand-white">{link.icon}</span>
									<span>{link.name}</span>
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="flex flex-col items-start gap-4">
					<h3 className="text-2xl font-semibold uppercase text-[#C3C2BD]">Поддержка 24/7</h3>
					<a
						className="inline-flex w-fit items-center gap-4 rounded-full bg-brand-white px-4 py-2.5 leading-none"
						href="#"
					>
						<span className="text-xl text-[#272A33] font-kelly">Telegram</span>
						<TelegramIcon width={20} height={20} fill="#FF0633"/>
					</a>
					<ul className="flex flex-col gap-2">
						{SUPPORT_LINKS.map((link) => (
							<li key={link}>
								<a className="text-xl" href="#">{link}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="border-t border-[#2A2D36] py-5 text-center">
				<p className="text-xl text-[#C3C2BD]">© 2025 Wolle Development Limited. Все права защищены.</p>
			</div>
		</footer>
	);
};