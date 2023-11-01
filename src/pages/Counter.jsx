import { useState } from 'react';

export const Counter = () => {
	let [counter, setCounter] = useState(10);
	const Addvalue = () => {
		setCounter(counter + 1);
	};
	const Removevalue = () => {
		setCounter(counter - 1);
	};
	return (
		<>
			<h2>Counter Box</h2>
			{counter}
			<button type='button' onClick={Addvalue}>
				AddValue {counter}
			</button>
			<button type='button' onClick={Removevalue}>
				Remove Value {counter}
			</button>
		</>
	);
};
