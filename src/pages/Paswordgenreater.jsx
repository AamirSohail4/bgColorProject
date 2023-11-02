import { useCallback, useState, useEffect, useRef } from 'react';
import './pgenrater.css';

export const Paswordgenreater = () => {
	const [length, setLength] = useState(8);
	const [numberAllowed, setnumberAllowed] = useState(false);
	const [CharacterAllowed, setCharacterAllowed] = useState(false);
	const [password, setPassword] = useState('');
	const passwordGenrater = useCallback(() => {
		let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		let pass = '';
		if (numberAllowed) str += '0123456789';
		if (CharacterAllowed) str += '!@#$%^&*-_+=[]{}~`';
		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
			console.log(pass);
		}

		setPassword(pass);
	}, [length, numberAllowed, CharacterAllowed, setPassword]);
	const passwordRef = useRef(null);
	const CopyPaset = () => {
		passwordRef.current.select();
		passwordRef.current?.setSelectionRange(0, 10);
		window.navigator.clipboard.writeText(password);
	};
	useEffect(() => {
		passwordGenrater();
	}, [length, numberAllowed, CharacterAllowed, passwordGenrater]);
	return (
		<div className='main-container'>
			<h3>Paswordgenreater</h3>
			<div className='password-box'>
				<div className='inputfield-box'>
					<input
						className='inputfield'
						type='text'
						value={password}
						placeholder='Password'
						readOnly
						ref={passwordRef}
					/>
					<button onClick={CopyPaset} className='submitbtn'>
						Copy
					</button>
				</div>
				<div className='inner-box'>
					<div className='slider'>
						<label className='number-label'> Lenght : {length}</label>
						<input
							type='range'
							max={100}
							min={6}
							value={length}
							onChange={(e) => {
								setLength(e.target.value);
							}}
						/>
					</div>
					<label className='number-label'> Number</label>
					<input
						type='checkbox'
						id='number'
						defaultChecked={numberAllowed}
						onChange={() => {
							setnumberAllowed((prev) => !prev);
						}}
					/>
					<label className='number-label'> Character</label>

					<input
						type='checkbox'
						id='Character'
						defaultChecked={CharacterAllowed}
						onChange={() => {
							setCharacterAllowed((prev) => !prev);
						}}
					/>
				</div>
			</div>
		</div>
	);
};
