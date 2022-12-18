import React from 'react';

const CardTwo = () => {
	return (
		<div className='flex flex-col gap-5 w-full h-full'>
			<div className='card-two relative flex flex-col h-full rounded-3xl py-10 px-7 text-white top-0 shadow hover:-top-2 transition-all duration-500 ease-in-out'>
				<div className='mt-8'>
					<h6>STORES</h6>
					<h3>Purchase a domain</h3>
					<button
						type='button'
						className='card-btn'
					>
						Find your domain
					</button>
				</div>
				<div className='mb-8 mt-5'>
					<img
						src='https://teespring-ass.s3.amazonaws.com/upgrades/purchaseDomain-feature.png'
						alt='hero-description'
					/>
				</div>
			</div>

			<div>
				<img
					src='https://teespring-ass.s3.amazonaws.com/upgrades/purchaseDomain-icon.png'
					alt='amaze-logo'
					className='w-11 h-11'
				/>
				<h6 className='text-lg'>Purchase a domain</h6>
				<p className='text-gray-500 text-sm'>Buy a domain for your spring store</p>
			</div>
		</div>
	);
};

export default CardTwo;
