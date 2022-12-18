import React from 'react';

const CardThree = () => {
	return (
		<div className='w-full flex flex-col gap-5'>
			<div className='card-three relative flex flex-col rounded-3xl pt-12 px-7 text-white box-shadow shadow-lg top-0  hover:-top-2 transition-all duration-500 ease-in-out pb-16'>
				<div className='mt-8'>
					<h3 className='font-bold'>
						Already have a domain? Connect it to your Spring store today.
					</h3>
					<p className='text-gray-500 text-sm max-w-xs'>
						Already have a domain registered elsewhere? no problem
					</p>
					<button
						type='button'
						className='card-btn btn-hover'
					>
						from $11.99/year
					</button>
				</div>

			</div>
				<div>
					<img
						src='https://d11q1jnxzf43no.cloudfront.net/images/dashboard/tool_custom_domains_icon.png'
						alt='amaze-logo'
						className='w-11 h-11'
					/>
					<h6 className='text-lg'>Connect a domain</h6>
					<p className='text-gray-500 text-sm'>
						Connect your exisiting domain
					</p>
				</div>
		</div>
	);
};

export default CardThree;
