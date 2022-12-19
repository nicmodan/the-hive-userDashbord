import React from 'react';

const Password = ({handleChange, formState}) => {
	return (
		<div>
			<div>
				<label htmlFor='password'>
					<h6 className='font-semibold'>Password</h6>
					<input
						type='password'
						name='password'
						id='password'
						value={formState.password}
						onChange={(e) => handleChange(e)}
            placeholder="Must be longer than 6 characters"
					/>
				</label>
        <label htmlFor='password'>
					<h6 className='font-semibold'>Confirm new password</h6>
					<input
						type='password'
						name='confirmPassword'
						id='confirmpassword'
						value={formState.confirmPassword}
						onChange={(e) => handleChange(e)}
					/>
				</label>
			</div>
		</div>
	);
};

export default Password;
