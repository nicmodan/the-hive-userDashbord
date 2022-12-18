import React from 'react';
import QRCode from '../../assets/qrcode-image.png';

const TwoFactorAuth = () => {
	return (
		<div className='w-full h-full'>
			<div>
				<img
					src={QRCode}
					alt='qr code to scan'
					className='w-32 h-32 block'
				/>
			</div>
			<h3 className='font-semibold my-2'>
				Please use this image to provision Google Authenticator
			</h3>
			<a href='#'>Click here read more...</a>
			<label
				htmlFor='two-factor'
				className='flex gap-3 my-3'
			>
				<input
					type='checkbox'
					name='two-factor'
					id='two-factor'
				/>
				<p>Use Two-Factor Authentication</p>
			</label>
		</div>
	);
};

export default TwoFactorAuth;
