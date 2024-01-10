import Sparkle from "./sparkle";

const name = "Terence";
const now = String(new Date());

export function StartHere({ start }: { start: string }) {
	return (
		<div className="wrapper">
			<div className="container">
				<div id="welcome">
					<h1>
						<span>Hello there, {name}. </span>
						<br />
						Welcome, {start} 👋🏾
					</h1>
					<h2>The current time is {now}.</h2>
					<h2>
						<Sparkle />
					</h2>
				</div>
			</div>
		</div>
	);
}

export default StartHere;
