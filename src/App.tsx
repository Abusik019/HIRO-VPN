import { CrossIcon } from "./assets/icons";
import { FortuneWheel } from "./components/FortuneWheel";
import { Header } from "./components/Header";

function App() {
    return (
		<div className="w-full max-w-294 mx-auto">
			<Header />
			<h1 className="font-kelly text-[64px] text-center uppercase mt-10">Аккаунт</h1>
			<section className="mt-8">
				<div className="flex items-center justify-between">
					<h2 className="font-kelly text-[44px]">Квесты</h2>
					<button><CrossIcon /></button>
				</div>
				<div className="mt-8 flex items-center gap-6">
					<FortuneWheel />
				</div>
			</section>
		</div>
	);
}

export default App;
