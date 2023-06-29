import frame from '../assets/frame.png';
import Loginform from './Loginform';
import Signupform from './Signupform';
import {FcGoogle} from 'react-icons/fc'
function Template({h1,desc1,desc2,image,formtype,isLogin,setisLogin}){
    return (
        <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
            <div className='w-11/12 max-w-[450px]'>
                <h2 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{h1}</h2>
                <p className='text-[1.125rem] leading[1.625rem] mt-4 text-richblack-100'>{desc1}</p>
                <p className='text-blue-100 italic'>{desc2}</p>
                { (formtype==="login")?
                (<Loginform isLogin={isLogin} setisLogin={setisLogin}/> ):
                (<Signupform isLogin={isLogin} setisLogin={setisLogin}/>)   
                }
                
                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                    <span className='text-richblack-700 font-medium leading[1.375rem]'>OR</span>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                </div>
                <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle/>
                Sign Up with Google
                </button>


            </div>
            <div className='w-11/12 max-w-[450px] '>
                <div className='w-full relative'>
                    <img src={frame} alt="" 
                    width={558}
                    height={504}
                    loading="lazy"/>
                    <img src={image} alt=""
                    width={558}
                    height={504}
                    loading="lazy"
                    className='absolute -top-4 right-4'
                    />
                </div>

            </div>
        </div>
    )
}
export default Template;