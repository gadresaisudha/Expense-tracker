import { NavLink } from 'react-router-dom';
import { REFRESH_TOKEN,ACCESS_TOKEN } from '../constants';

const Header = () => {
  const isAuthenticated = !!localStorage.getItem(ACCESS_TOKEN); 
  return (
    <div className="flex mt-5">
      <div>
        <h1 className="ml-5 text-4xl bg-white text-blue-500">MYM</h1>
      </div>
      {isAuthenticated ?(
      <div className='flex w-full justify-between'>
        <div className='justify-start'>
          <ul className="flex border-b ml-[50px]">
            <li className="-mb-px mr-1">
              
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-white inline-block py-2 px-4 text-blue-700 font-semibold border-l border-t border-r rounded-t'
                    : 'bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold'
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mr-1">
              <NavLink
                to="/income"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-white inline-block py-2 px-4 text-blue-700 font-semibold border-l border-t border-r rounded-t'
                    : 'bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold'
                }
              >
                Income
              </NavLink>
            </li>
            <li className="mr-1">
              <NavLink
                to="/expense"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-white inline-block py-2 px-4 text-blue-700 font-semibold border-l border-t border-r rounded-t'
                    : 'bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold'
                }
              >
                Expense
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='justify-end'>
        <NavLink
                to="/logout"
                className='bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold'
              >
                Logout
              </NavLink>
        </div>
      </div>
        ) : (
      <div className='flex justify-end w-full'>
      <div className='mr-2'>
      <NavLink
              to="/login"
              className='bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold'
            >
              Log In
            </NavLink>
      </div>
      <div className='mr-2'>
      <NavLink
              to="/register"
              className='bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold'
            >
              Sign In
            </NavLink>
      </div>
      </div>) 
      }
    </div>
  );
};

export default Header;