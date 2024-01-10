import { useState } from "react";

function Sparkle() {
	// declare the initial component state
	// this a variable of 'sparkle' which is an empty function
	// we've also defined an 'addSparkle' function, which
	// we'll call in our click handler
	const [sparkle, addSparkle] = useState("");

	return (
		<div>
			<button onClick={() => addSparkle(sparkle + "\u2728")}>
				Add some sparkle
			</button>
			<p>{sparkle}</p>
		</div>
	);
}

export default Sparkle;
