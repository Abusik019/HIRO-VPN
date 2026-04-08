import { useState } from "react";
import { CrossIcon } from "./assets/icons";
import { FortuneWheel } from "./components/FortuneWheel";
import { Header } from "./components/Header";
import { InfoBlock } from "./components/InfoBlock";

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
		</div>
	);
}

export default App;