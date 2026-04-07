import { ArrowIcon } from '../assets/icons';
import LogoImg from '../assets/images/logo.svg';

export const Header = () => {
	return (
		<header className='w-full py-4 box-border flex items-center justify-between'>
			<img src={LogoImg} width={118} height={44} alt="logo" />
			<a className='text-xl font-kelly' href="#">FAQ</a>
			<a className='text-xl font-kelly' href="#">Тарифы</a>
			<a className='text-xl font-kelly bg-brand-red px-13 py-2.5 box-border rounded-full' href="#">Скачать</a>
			<a className='text-xl font-kelly' href="#">Блог</a>
			<a className='text-xl font-kelly border border-brand-white px-13 py-2.5 box-border rounded-full' href="#">Аккаунт</a>
			<a className='text-xl font-kelly flex items-center gap-4' href="#">
				<span>РУ</span>
				<ArrowIcon />
			</a>
		</header>
	)
}
