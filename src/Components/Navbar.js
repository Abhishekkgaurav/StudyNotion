import logo from '../assets/Logo.svg';
import { NavLink } from 'react-router-dom';
import {toast} from 'react-hot-toast';

function Navbar(props){
    let isLogin=props.isLogin;
    const setisLogin=props.setisLogin;
    function logoutHandler(){
        setisLogin(false);
        toast.success("Log Out");

    }
    return(
        <nav className='flex justify-between w-11/12 max-w-[1160px] py-4 mx-auto'>
            <NavLink to='/'>
                <img src={logo} alt='' width={160} height={32} loading="lazy"/>
            </NavLink>
            <div className='text-richblack-100 flex gap-x-6'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='#'>About</NavLink>
            <NavLink to='#'>Contact</NavLink>
            </div>
            <div>
            {isLogin?(
                <div className='flex items-center gap-x-4'>
                    <NavLink to='/' onClick={logoutHandler} className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Log Out</NavLink>
                    <NavLink to='/dashboard' className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</NavLink>
                </div>

            ):(
                <div className='flex items-center gap-x-4'>
                    <NavLink to='/login' className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Log In</NavLink>
                    <NavLink to='/signup' className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Sign Up</NavLink>
                </div>

            )}
                
                
            </div>
        </nav>
    ) 

}
export default Navbar;