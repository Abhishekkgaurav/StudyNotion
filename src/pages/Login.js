import Template from '../Components/Template';
import image from '../assets/login.png';

function Login({isLogin,setisLogin}){
return(
    <div>
        <Template h1="Welcome Back" desc1="Build skills for today, tomorrow, and beyond." desc2="Education to future-proof your career." image={image} formtype="login" isLogin={isLogin} setisLogin={setisLogin}/>
    </div>
)
}
export default Login;