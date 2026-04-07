import { useEffect, useMemo, useRef, useState } from "react";
import ExplosionImg from "../assets/images/explosion.png";
import GiftDiscountImg from "../assets/images/gift.1.png";
import GiftImg from "../assets/images/gift.png";
import { GiftCard } from "./GiftCard";

type Card = {
	title: string;
	imageUrl: string;
	content: string;
};

const BASE_CARDS: Card[] = [
	{ title: "Бесплатные", imageUrl: GiftImg, content: "6 часов" },
	{ title: "Скидка", imageUrl: GiftDiscountImg, content: "10%" },
	{ title: "Скидка", imageUrl: GiftDiscountImg, content: "20%" },
	{ title: "Скидка", imageUrl: GiftDiscountImg, content: "50%" },
	{ title: "Попробуйте", imageUrl: ExplosionImg, content: "завтра" },
	{ title: "Бесплатные", imageUrl: GiftImg, content: "2 часа" },
	{ title: "Бесплатные", imageUrl: GiftImg, content: "12 часов" },
	{ title: "Попробуйте", imageUrl: ExplosionImg, content: "завтра" },
	{ title: "Скидка", imageUrl: GiftDiscountImg, content: "30%" },
	{ title: "Скидка", imageUrl: GiftDiscountImg, content: "40%" },
	{ title: "Бесплатные", imageUrl: GiftImg, content: "4 часа" },
	{ title: "Бесплатные", imageUrl: GiftImg, content: "8 часов" },
];

const CARD_WIDTH = 120;
const CARD_GAP = 4;
const REPEAT_COUNT = 50;
const START_INDEX = BASE_CARDS.length * 3;
const MIN_STEPS = BASE_CARDS.length * 4;
const MAX_STEPS = BASE_CARDS.length * 7;
const REBASE_THRESHOLD = BASE_CARDS.length * 30;
const REBASE_SHIFT = BASE_CARDS.length * 20;

const getRandomInt = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const CardDrum = () => {
	const viewportRef = useRef<HTMLDivElement | null>(null);
	const trackRef = useRef<HTMLDivElement | null>(null);
	const timeoutRef = useRef<number | null>(null);

	const cards = useMemo(() => {
		return Array.from({ length: REPEAT_COUNT }, () => BASE_CARDS).flat();
	}, []);

	const [viewportWidth, setViewportWidth] = useState(0);
	const [viewportPaddingLeft, setViewportPaddingLeft] = useState(0);
	const [cardSize, setCardSize] = useState({ width: CARD_WIDTH, height: 220 });
	const [activeIndex, setActiveIndex] = useState(START_INDEX);
	const [transitionMs, setTransitionMs] = useState(0);
	const [isSpinning, setIsSpinning] = useState(false);
	const [resultCard, setResultCard] = useState<Card>(
		BASE_CARDS[START_INDEX % BASE_CARDS.length],
	);
	const step = cardSize.width + CARD_GAP;

	const offset = viewportWidth / 2 - viewportPaddingLeft - cardSize.width / 2 - activeIndex * step;

	useEffect(() => {
		const updateMeasurements = () => {
			setViewportWidth(viewportRef.current?.clientWidth ?? 0);

			if (viewportRef.current) {
				const viewportStyles = window.getComputedStyle(viewportRef.current);
				setViewportPaddingLeft(Number.parseFloat(viewportStyles.paddingLeft) || 0);
			}

			const firstCard = trackRef.current?.firstElementChild;
			if (firstCard instanceof HTMLElement) {
				setCardSize({
					width: firstCard.offsetWidth,
					height: firstCard.offsetHeight,
				});
			}
		};

		updateMeasurements();
		const frame = window.requestAnimationFrame(updateMeasurements);
		window.addEventListener("resize", updateMeasurements);

		return () => {
			window.cancelAnimationFrame(frame);
			window.removeEventListener("resize", updateMeasurements);
		};
	}, []);

	useEffect(() => {
		return () => {
			if (timeoutRef.current !== null) {
				window.clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	const handleSpin = () => {
		if (isSpinning) {
			return;
		}

		const spinDuration = getRandomInt(4300, 6200);
		const steps = getRandomInt(MIN_STEPS, MAX_STEPS);
		const targetIndex = activeIndex + steps;

		setResultCard(BASE_CARDS[targetIndex % BASE_CARDS.length]);
		setTransitionMs(spinDuration);
		setIsSpinning(true);
		setActiveIndex(targetIndex);

		if (timeoutRef.current !== null) {
			window.clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = window.setTimeout(() => {
			setTransitionMs(0);
			setIsSpinning(false);
			setActiveIndex((prevIndex) => {
				if (prevIndex > REBASE_THRESHOLD) {
					return prevIndex - REBASE_SHIFT;
				}

				return prevIndex;
			});
		}, spinDuration + 120);
	};

	return (
		<div>
			<div
				ref={viewportRef}
				className="relative overflow-hidden p-3"
			>
				<div
					className="pointer-events-none absolute left-1/2 top-3 z-20 -translate-x-1/2 rounded-lg border-2 border-brand-red"
					style={{
						width: `${cardSize.width}px`,
						height: `${cardSize.height}px`,
					}}
				>
					<div
						className="absolute bottom-0 left-1/2 -translate-x-1/2"
						style={{
							width: "24px",
							height: "22px",
							backgroundColor: "var(--color-brand-red)",
							clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
						}}
					/>
				</div>
				<div
					className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-[#1C1E24] to-transparent"
				/>
				<div
					className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-[#1C1E24] to-transparent"
				/>
				<div
					ref={trackRef}
					className="flex items-stretch will-change-transform"
					style={{
						gap: `${CARD_GAP}px`,
						transform: `translate3d(${offset}px, 0, 0)`,
						transition: transitionMs
							? `transform ${transitionMs}ms cubic-bezier(0.08, 0.72, 0.16, 1)`
							: "none",
					}}
				>
					{cards.map((card, index) => (
						<GiftCard
							key={`${index}-${card.title}-${card.content}`}
							title={card.title}
							imageUrl={card.imageUrl}
							content={card.content}
						/>
					))}
				</div>
			</div>

			<div className="mt-4 flex items-center justify-between gap-4">
				<p className="font-kelly text-[30px] uppercase leading-none">Приз: {resultCard.content}</p>
				<button
					type="button"
					onClick={handleSpin}
					disabled={isSpinning}
					className="font-kelly rounded-full bg-brand-red px-7 py-3 text-xl uppercase disabled:cursor-not-allowed disabled:opacity-60"
				>
					{isSpinning ? "Крутим" : "Крутить"}
				</button>
			</div>
		</div>
	);
};
