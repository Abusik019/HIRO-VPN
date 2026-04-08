import { useState } from "react";
import GiftImg from '../assets/images/gift.png';
import classNames from "classnames";

export const GiftCalendar = () => {
	const [activeDay, setActiveDay] = useState<number>(1);

	return (
		<div className="relative mt-2.5 mx-6 mb-6 border border-[#2E3139] rouned-lg py-2 px-4 box-border flex items-center justify-center">
			{
				[1, 2, 3, 4, 5, 6, 7].map((day) => (
					<div
						key={day}
						className="relative text-[44px] font-semibold w-1/7 text-center"
						onClick={() => setActiveDay(day)}
					>
						<span className="z-20 relative leading-0">{day}</span>
						{day == 7 && (
							<img className="z-10 absolute top-0 left-[calc(50%-24px)]" src={GiftImg} width={48} height={48} alt="gift" />
						)}
					</div>
				))	
			}
			<div className={classNames("z-0 h-4 bg-brand-red absolute left-0 top-[calc(50%-8px)]", {
				'w-1/7': activeDay == 1,
				'w-2/7': activeDay == 2,
				'w-3/7': activeDay == 3,
				'w-4/7': activeDay == 4,
				'w-5/7': activeDay == 5,
				'w-6/7': activeDay == 6,
				'w-full': activeDay == 7,
			})}/>
		</div>
	)
}
