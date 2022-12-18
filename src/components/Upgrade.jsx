import React, { useState } from 'react';
import Design from './upgrage_componet/Design';
import Selling from './upgrage_componet/Selling';
import Discover from './upgrage_componet/Discover';

const notActiveBtn = 'text-xs p-2 rounded-2xl';
const activeBtn = 'text-xs font-semibold bg-black p-2 rounded-2xl text-white';

const tabObject = [
	{
		name: 'Discover',
		title: 'discover',
	},
	{
		name: 'Selling tools',
		title: 'selling',
	},
	{
		name: 'Design tools',
		title: 'design',
	},
];

const Upgrade = () => {
	const [isActive, setIsActive] = useState('discover');
	const [currentButton, setCurrentButton] = useState('discover');
	const disElements = () => {
		switch (isActive) {
			case 'discover':
				return <Discover />;
			case 'selling':
				return <Selling />;
			case 'design':
				return <Design />;
			default:
				break;
		}
	};

	const handleClick = (e) => {
		const selected = e.target.getAttribute('data-title');
		setIsActive(selected);
		setCurrentButton(selected);
	};

	const buttons = tabObject.map((tabs) => (
		<button
			className={currentButton == tabs.title ? activeBtn : notActiveBtn}
			data-title={tabs.title}
			onClick={handleClick}
		>
			{tabs.name}
		</button>
	));

	return (
		<div className='flex flex-col max-w-5xl px-14 py-8'>
			{/* mini-navbar */}
			<div className='flex gap-5'>{buttons}</div>

			{disElements()}
		</div>
	);
};

export default Upgrade;
