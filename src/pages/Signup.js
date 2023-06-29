import Template from '../Components/Template';
import image from '../assets/signup.png';
function Signup({isLogin,setisLogin}){
    return(
        <div>
        <Template h1="Join the millions learning to code with StudyNotion for free" desc1="Build skills for today, tomorrow, and beyond." desc2="Education to future-proof your career." image={image} formtype="signup" isLogin={isLogin} setisLogin={setisLogin}/>
    </div>
    )
}
export default Signup;