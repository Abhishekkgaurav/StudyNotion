import {useState} from 'react';
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';


function Signupform({isLogin,setisLogin}){
    const Navigate=useNavigate();
    const [accountType, setAccountType] = useState("student");
    const [formdata,setformdata]=useState({
        firstname:"",
        lastname:"",
        email:"",
        createpassword:"",
        confirmpassword:""
    
    }
    )
    const [showpassword1,setshowpassword1]=useState(false);
    const [showpassword2,setshowpassword2]=useState(false);
    function changeHandler(event){
        setformdata((prev)=>({
            ...prev, [event.target.name]:event.target.value
        }))
    }
    function submitHandler(event){
        event.preventDefault();
        if(formdata.createpassword!==formdata.confirmpassword)
        {
            toast.error("Password do not match!")
            return;

        }
        else{
            setisLogin(true);
            toast.success("Account Created.");
            Navigate('/dashboard');

        }
        
    }
    return(
        
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <div className={`${accountType === "student" 
            ?
              "bg-richblack-900 text-richblack-5 cursor-pointer"
            :"bg-transparent text-richblack-200"} py-2 px-5 cursor-pointer rounded-full transition-all duration-200`}
            onClick={()=>{setAccountType("student")}}
            >Student</div>
            <div
            className={`${accountType === "instructor" 
            ?
              "bg-richblack-900 text-richblack-5 cursor-pointer"
            :"bg-transparent text-richblack-200"} py-2 cursor-pointer px-5 rounded-full transition-all duration-200`}
            onClick={()=>{setAccountType("instructor")}}
            >Instructor</div>
        </div>
        <div className='flex justify-between gap-6'>
            <div className='w-full flex flex-col'>
            <label htmlFor='firstname' className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            First Name<sup className='text-pink-200'>*</sup>
            </label>
            <input
                required
                type="text"
                placeholder="Enter First Name"
                value={formdata.firstname}
                name="firstname"
                id="firstname"
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            </div>

            <div className='w-full flex flex-col'>
            <label htmlFor='lastname' className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Last Name<sup className='text-pink-200'>*</sup>
            </label>
            <input
                required
                type="text"
                placeholder="Enter Last Name"
                value={formdata.lastname}
                name="lastname"
                id="lastname"
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            </div>

        </div>
        <div className='w-full flex flex-col'>
            <label htmlFor='email' className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email Address<sup className='text-pink-200'>*</sup>
            </label>
            <input
                required
                type="email"
                placeholder="Enter Email Name"
                value={formdata.email}
                name="email"
                id="email"
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </div>

        <div className='flex justify-between gap-6'>
                <div className='w-full flex flex-col relative'>
                    <label htmlFor='createpassword' className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Create Password<sup className='text-pink-200'>*</sup>
                    </label>
                    <input
                        required
                        type={showpassword1?"text":"password"}
                        placeholder="Enter Password"
                        value={formdata.createpassword}
                        name="createpassword"
                        id="createpassword"
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span className='absolute right-3 translate-y-[150%]' onClick={()=>{setshowpassword1(!showpassword1)}}>{
                    showpassword1?(
                    <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>
                    ):(
                    <AiOutlineEye fontSize={24} fill='#AFB2BF'/>
                    )
                    }</span>
                </div>

                <div className='w-full flex flex-col relative'>
                    <label htmlFor='confirmpassword' className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Confirm Password<sup className='text-pink-200'>*</sup>
                    </label>
                    <input
                        required
                        type={showpassword2?"text":"password"}
                        placeholder="Confirm Password"
                        value={formdata.confirmpassword}
                        name="confirmpassword"
                        id="confirmpassword"
                        onChange={changeHandler}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span className='absolute right-3 translate-y-[150%]' onClick={()=>{setshowpassword2(!showpassword2)}}>{
                    showpassword2?(
                    <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>
                    ):(
                    <AiOutlineEye fontSize={24} fill='#AFB2BF'/>
                    )
                    }</span>
                    
                    
                </div>

        </div>
        <button
        className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'
        >Create Account</button>

        
        </form>

    )
}
export default Signupform;