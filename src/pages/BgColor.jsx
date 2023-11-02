import { useState } from 'react';
import '../pages/bgColor.css';
export const BgColor = () => {
	const [color, setColor] = useState('gray');
	console.log(color);
	return (
		<>
			<div className='main-Container' style={{ backgroundColor: color }}>
				<h3>Baground Color Change is {color}</h3>
			</div>{' '}
			{/* style={{ backgroundColor: color }} */}
			<div className='button-section'>
				<button onClick={() => setColor('red')}>Red</button>
				<button onClick={() => setColor('blue')}>Blue</button>
				<button onClick={() => setColor('yellow')}>Yellow</button>
				<button onClick={() => setColor('green')}>Green</button>
				<button
					onClick={() => setColor('pink')}
					style={{ backgroundColor: 'pink' }}
				>
					Pink
				</button>
			</div>
		</>
	);
};
