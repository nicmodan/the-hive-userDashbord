import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AiOutlineCaretDown } from 'react-icons/ai';

const NavBar = () => {
	let navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [toggleNav, setToggleNav] = useState(false);

	useEffect(() => {
		let userInfo = JSON.parse(localStorage.getItem('user'));

        if(userInfo) {

            const { email } = userInfo;
    
            setUser(email);
        }

	}, []);

	const closeNav = () => {
		setToggleNav(false);
	};
	const Logout = () => {
		setUser(null);
		localStorage.removeItem('user');
		navigate('/login', { replace: true });
	};

	return (
		<nav className='w-full bg-white px-5 py-5 shadow-2xl flex justify-between items-center'>
			<div>
				<h2 className='uppercase font-extrabold text-3xl'>The Hive</h2>
			</div>
			<div className='flex gap-4 items-center text-sm'>
				<button className='px-4 py-2 bg-black text-white'>
					Start Creating
				</button>
				{user ? (
					<div className='relative'>
						<div className='flex items-center gap-1'>
							<button
								className='hover:text-gray-500'
								onClick={() => setToggleNav((prev) => !prev)}
							>
								{user}
							</button>
							<AiOutlineCaretDown
								size={10}
								className='text-gray-500'
							/>
						</div>
						{toggleNav && (
							<div className=' absolute top-6 z-10 bg-white w-full flex flex-col gap-3 text-gray-600 px-4 py-3 border border-gray-300 border-solid'>
								<Link
									to='/'
									className='hover:text-black'
									onClick={closeNav}
								>
									Home
								</Link>
								<Link
									to='/stores'
									className='hover:text-black'
									onClick={closeNav}
								>
									Stores
								</Link>
								<Link
									to='/payment'
									className='hover:text-black'
									onClick={closeNav}
								>
									Payment
								</Link>
								<Link
									to='/settings'
									className='hover:text-black'
									onClick={closeNav}
								>
									Settings
								</Link>
								<button
									className='w-1/3 hover:text-black'
									onClick={Logout}
								>
									Logout
								</button>
							</div>
						)}
					</div>
				) : (
					<Link
						to='login'
						className='hover:text-gray-600 hover:underline-offset-4 hover:underline'
					>
						Login
					</Link>
				)}
			</div>
		</nav>
	);
};

export default NavBar;
