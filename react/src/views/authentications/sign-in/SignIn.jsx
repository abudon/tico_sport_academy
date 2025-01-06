import logo from '../../../assets/images/Logo01.png'
import {Link} from "react-router-dom";
import {useState} from "react";
import { ArrowBackTwoTone} from "@mui/icons-material";
import {Typography} from "@mui/material";

 export const Copyright = ()=>(
    <div className={'copyright'}>
        <p className={'text-sm'}>
            {'Copyright © '}
            <Link className={'text-blue-900 text-lg'} to="https://www.ticosportingacademy.ng/">
                Tico Academy
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </p>
    </div>
)


export function SignIn() {

    // Variable
    const [check, setCheck] = useState(false);
    // Functions
    const handleCheck = ()=>{
        setCheck(prevState => !prevState)
    }



    return (
        <>
            <div className={'absolute top-1 w-full h-[4rem] backdrop-blur-lg  flex items-center z-10 bg-white opacity-80'}>
                <Link to={'/'}>
                    <div className={'flex items-center ml-8'}>
                        <ArrowBackTwoTone className={'text-blue-900'}/>
                        <Typography className={'text-blue-900'} ml={2}>Back to main site</Typography>
                    </div>
                </Link>
            </div>
            <div className={'login_cover'}>

                <div className={'login_form'}>
                    <div className={' w-full flex justify-center'}>
                      <Link to={'/'}>
                          <img className={'w-[100px] h-[100px]'} src={logo} alt={'logo'}/>
                      </Link>
                    </div>
                    <h1>Login</h1>
                    <div>
                        <input type="text" placeholder="Username" className={'focus:h-[3rem] focus:w-[150%]'} />
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className={'flex flex-row items-center justify-between'}>
                        <div className={'flex flex-row items-center justify-between'}>
                            <input type={'checkbox'} checked={check} onChange={handleCheck}/>
                            <h4 className={'text-white font-bold italic ml-3'}>Remember me</h4>
                        </div>
                        <div className={'ml-[10px]'}><a className={'text-white font-bold italic'} href="#">Forgot Password?</a></div>
                    </div>
                    <div className={'mb-4'}>
                        <button type={"submit"} className={'bg-white text-gray-900 w-[100%] rounded-3xl mt-5 h-[2.5rem] font-bold'}>
                            Login
                        </button>
                    </div>
                    <div>
                        <h4 className={'text-center text-white font-bold'}>Don't have an account? <a className={'reg'} href="#">Register</a></h4>
                    </div>

                </div>
                <Copyright/>
            </div>
        </>
    )
}
