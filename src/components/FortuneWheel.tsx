import ReactorImg from '../assets/images/reactor.png';
import { CardDrum } from './CardDrum';
import { GiftCalendar } from './GiftCalendar';

export const FortuneWheel = () => {
	return (
		<div className="max-w-xl w-[calc(50%-12px)] border-2 border-[#2E3139] rounded-lg">
			<div className='mx-6 mt-6 mb-4 flex items-center justify-between'>
				<div> 
					<h3 className='text-[32px] font-semibold uppercase leading-none'>Колесо Фортуны </h3>
					<span className='text-xl text-gray-400 leading-none'>Испытайте удачу раз в день<br />и выигрывайте бонусы для VPN!</span>
				</div>
				<img src={ReactorImg} width={72} height={72} alt="reactor" />
			</div>
			<CardDrum />
			<p className='text-xl mt-4 mx-6 leading-5'>Крути колесо 7 дней подряд без пропусков и получи на 7-й день<br />гарантированный 1 день подписки!</p>
			<GiftCalendar />
		</div>
	)
}
