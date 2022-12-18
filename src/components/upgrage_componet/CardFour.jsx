import React from 'react';

const CardFour = () => {
	return (
		<div className='flex flex-col w-full gap-5 mt-10'>
			<div className='flex flex-col min-w-sm'>
				<div className='w-full card-four text-white rounded-2xl flex items-center gap-x-10'>
					<div className='w-1/2'>
						<img
							className='w-full h-6 mb-6 object-contain'
							src='https://teespring-ass.s3.amazonaws.com/upgrades/springmark-logo.png'
							alt='company-logo'
						/>
						<h3 className='font-bold mb-1'>Protect your designs</h3>
						<p className='leading-normal text-sm'>
							Our technology scans &amp; identifies your content across 34 of
							the most popular online marketplaces.
						</p>
						<button
							type='button'
							className='bg-white text-black p-2 rounded-lg text-xs transition-all ease-in-out hover:bg-white/75 duration-500 mt-3'
						>
							Learn more
						</button>
					</div>
					<div className='w-1/2 h-full hero'></div>
				</div>
			</div>

			<div>
				<img
					src='https://teespring-ass.s3.amazonaws.com/upgrades/springmark-icon.png'
					alt='amaze-logo'
					className='w-11 h-11'
				/>
				<h6 className='text-lg'>SprinkMark</h6>
				<p className='text-gray-500 text-sm'>The mark that says you made it</p>
			</div>
		</div>
	);
};

export default CardFour;
