import React from 'react';

const Paypal = ({ handleChange, user }) => {
	return (
		<div>
			<div>
				<label htmlFor='paypalEmail'>
					<h6 className='font-semibold'>Requested email address</h6>
					<input
						type='email'
						name='paypalEmail'
						id='paypal-email'
						value={user.paypalEmail}
						onChange={(e) => handleChange(e)}
						placeholder='support@spri.ng'
					/>
				</label>
				<label htmlFor='confirmPayPalEmail'>
					<h6 className='font-semibold'> Reenter Requested email address</h6>
					<input
						type='email'
						name='confirmPaypalEmail'
						id='confirmPaypal-email'
						value={user.confirmPaypalEmail}
						onChange={(e) => handleChange(e)}
						placeholder='support@spri.ng'
					/>
				</label>
			</div>
		</div>
	);
};

export default Paypal;
