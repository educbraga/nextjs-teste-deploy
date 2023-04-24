import { useState } from "react";

function Contador(){
	let [counter, setCounter] = useState(0)

	function addNumber(){
		setCounter(counter + 1)
	}

	return(
		<div>
			<div>{counter}</div>
		    <button onClick={addNumber}>Adidionar</button>
		</div>
	)
}

function Home() {
	return (
		<div>
			<Contador/>
		</div>
	)
}

export default Home;