import {useState} from 'react';
import {AiOutlineEye} from "react-icons/ai";
import {AiOutlineEyeInvisible} from 'react-icons/ai';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Loginform({isLogin,setisLogin}){
    const [formdata,setformdata]=useState({
        email:"",
        password:""
    })
    const [showpassword,setshowpassword]=useState(false);
    const Navigate=useNavigate();
    function changeHandler(event){
        setformdata((prev)=>({
            ...prev, [event.target.name]:event.target.value
        }))
    }
    function submitHandler(event){
        event.preventDefault();
        setisLogin(true);
        toast.success("log In");
        Navigate('/dashboard');


    }
    return(
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
        <div className='w-full flex flex-col'>
            <label htmlFor='email' className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email Address<sup className='text-pink-200'>*</sup>
            </label>
            <input
                required
                type="text"
                placeholder="enter email address"
                value={formdata.email}
                name="email"
                id="email"
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            
        </div>

        <div className='w-full flex flex-col'>
            <label htmlFor='password' className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Password<sup className='text-pink-200'>*</sup>
            </label>
            <div className='relative'>
            <input
                required
                type={showpassword?"text":"password"}
                placeholder="Enter Password"
                value={formdata.password}
                name="password"
                id="password"
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

            <span onClick={()=>{setshowpassword(!showpassword)}} className="absolute right-3 translate-y-[50%] cursor-pointer">{
                showpassword?(
                    <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>
                ):(
                    <AiOutlineEye fontSize={24} fill='#AFB2BF'/>
                )
            }</span>
            </div>
            <p
            className='text-xs mt-1 text-blue-100 max-w-max ml-auto'
            >Forgot Password?</p>
            
        </div>

        <button
        className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'
        >Sign In</button>


        </form>
    )
}
export default Loginform;