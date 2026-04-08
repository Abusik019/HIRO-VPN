import { ModalCard } from "./ModalCard";

type ResultCard = {
	title: string;
	imageUrl: string;
	content: string;
	hint?: string;
	isBlank?: boolean;
};

interface GiftResultModalProps {
	card: ResultCard | null;
	isOpen: boolean;
	onClose: () => void;
}

export const GiftResultModal = ({ card, isOpen, onClose }: GiftResultModalProps) => {
	if (!isOpen || !card) {
		return null;
	}

	const modalTitle = card.isBlank ? "В другой раз повезёт!" : "Поздравляем!\nВы выиграли";

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
			role="dialog"
			aria-modal="true"
		>
			<ModalCard
				title={modalTitle}
				text1={card.title}
				text2={card.content}
				hint={card.hint}
				imageUrl={card.imageUrl}
				onContinue={onClose}
			/>
		</div>
	);
};
