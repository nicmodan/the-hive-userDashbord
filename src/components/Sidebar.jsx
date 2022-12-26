import React, {useState, useEffect} from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
	FiTrendingUp,
	FiShoppingCart,
	FiChevronDown,
	FiCreditCard,
	FiSettings,
} from 'react-icons/fi';
import { BiPen } from 'react-icons/bi'

const isActiveStyle =
	'flex items-center  gap-3 font-bold transistion-all duration-200 ease-in-out capitalize';
const isNotActiveStyle =
	'flex items-center  gap-3 text-gray-500 hover:text-black transistion-all duration-200 ease-in-out capitalize';

const Sidebar = () => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		let userInfo = JSON.parse(localStorage.getItem("user"))
		if(userInfo) {
			const { name, picture, email } = userInfo
			
			setUser({name, picture, email})
		}
		
	}, [])
	
	return (
		<div className='flex flex-col gap-6 items-start bg-white h-full overflow-y-scroll shadow-2xl sidebar-width hide-scrollbar px-4 py-5'>
			<div className='flex gap-5'>
				<div className=' bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center font-medium'>
					<img src={user?.picture} alt="profile pic" className='rounded-full' />
				</div>
				<div className='flex flex-col text-sm'>
					<div className='flex items-center'>
						<h3 className='text-sm font-medium pr-1'>{user?.name}</h3>
						<FiChevronDown
							size={15}
							className='pt-1'
						/>
					</div>
					<p className='text-xs opacity-95'>{user?.email}</p>
				</div>
			</div>

			{/* NAV LINKS */}
			<div className='flex flex-col gap-5 text-sm'>
			<NavLink
					to='/create'
					className={({ isActive }) =>
						isActive ? isActiveStyle : isNotActiveStyle
					}
				>
					<BiPen size={20} />
					Create
				</NavLink>

				<NavLink
					to='/'
					className={({ isActive }) =>
						isActive ? isActiveStyle : isNotActiveStyle
					}
				>
					<FiTrendingUp size={20} />
					Upgrades
				</NavLink>
				<NavLink
					to='stores'
					className={({ isActive }) =>
						isActive ? isActiveStyle : isNotActiveStyle
					}
				>
					<FiShoppingCart size={20} />
					Stores
				</NavLink>
				<NavLink
					to='/payments'
					className={({ isActive }) =>
						isActive ? isActiveStyle : isNotActiveStyle
					}
				>
					<FiCreditCard size={20} />
					Payment
				</NavLink>
				<NavLink
					to='/settings'
					className={({ isActive }) =>
						isActive ? isActiveStyle : isNotActiveStyle
					}
				>
					<FiSettings size={20} />
					Settings
				</NavLink>
			</div>
		</div>
	);
};

export default Sidebar;
