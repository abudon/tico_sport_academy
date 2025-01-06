import {Link} from "react-router-dom";
import {ArrowBackTwoTone, CalendarMonth, Timer} from "@mui/icons-material";
import {Grid2, Typography} from "@mui/material";
import logo from "../../../assets/images/Logo01.png";
import {Copyright} from "../sign-in/SignIn.jsx";
import {useState} from "react";

export function Signup() {

    const [date, setDate] = useState('Date of Birth');

    return (
        <>
            <div className={'absolute top-1 w-full h-[4rem] backdrop-blur-lg  flex  items-center z-10 bg-white opacity-80'}>
                <div>
                    <Link to={'/'}>
                        <div className={'flex items-center ml-8'}>
                            <ArrowBackTwoTone className={'text-blue-900'}/>
                             <Typography sx={{
                                 fontSize:{
                                     xs:10,
                                     md:12,
                                     lg:16
                                 }
                             }} className={'text-blue-900'} ml={2}>Back to main site</Typography>
                        </div>
                    </Link>
                </div>
                <div className={'w-[6rem] h-[6rem] absolute left-[50%]  '}>
                    <img src={logo} alt="logo"/>
                </div>
            </div>
            <div className={'login_cover'}>

                <div className={'login_form'}>
                    <h1>Join Our Community</h1>
                    <Grid2 container columnSpacing={2}>
                        <Grid2 item size={{md:4}}>
                                <input type="text" placeholder="First Name" className={'focus:h-[3rem] focus:w-[100%]'} required />
                        </Grid2>
                        <Grid2 size={{md:4}}>
                            <input type="text" placeholder="Last Name" className={'focus:h-[3rem] focus:w-[100%]'} required />
                        </Grid2>
                        <Grid2 size={{md:4}}>
                        <input type="email" placeholder="Email Address" className={'focus:h-[3rem] focus:w-[100%]'} required />
                        </Grid2>

                        <Grid2 size={{md:4}}>
                            <input type="password" placeholder="Password" className={'focus:h-[3rem] focus:w-[100%]'} required/>
                        </Grid2>
                        <Grid2 size={{md:4}}>
                            <input type="password" placeholder="Confirm Password" className={'focus:h-[3rem] focus:w-[100%]'} required/>
                        </Grid2>
                        <Grid2 size={{md:4}}>
                            <div className={'dob relative flex items-center justify-between'}>
                                <p>{date}</p>
                                <input type="date"
                                       placeholder="Date of Birth"
                                       className={'absolute top-[0.8] right-1 opacity-0'}
                                       onChange={(event)=>setDate(event.target.value)}
                                       required />
                                <CalendarMonth/>
                            </div>
                        </Grid2>
                        <Grid2 size={{md:4}}>
                            <input type="text" placeholder="State of Residence" className={'focus:h-[3rem] focus:w-[100%]'} required/>
                        </Grid2>
                        <Grid2 size={{md:4}}>
                            <input type="text" placeholder="Local Government of Residence" className={'focus:h-[3rem] focus:w-[100%]'} required/>
                        </Grid2>
                        <Grid2 size={{md:4}}>
                            <input type="text" placeholder="Country of Residence" className={'focus:h-[3rem] focus:w-[100%]'} required/>
                        </Grid2>
                    </Grid2>


                    <div className={'flex flex-row items-center justify-between'}>
                        <div className={" w-[3rem] h-[3rem]"}>
                            <input type={'checkbox'} />
                        </div>
                        <div className={'flex flex-row items-center justify-between'}>
                            <p className={'text-white  ml-3'}>
                                I want to receive emails from Tico Academy FC about club news, ticket availability,
                                competitions, offers and product and services from official sponsors and partners
                            </p>
                        </div>
                    </div>
                    <div className={'mb-4'}>
                        <button type={"submit"} className={'bg-white text-gray-900 w-[100%] rounded-3xl mt-5 h-[2.5rem] font-bold'}>
                            Join us
                        </button>
                    </div>
                    <div>
                        <h4 className={'text-center text-white font-bold'}>Already have an account? <a className={'reg'} href="#">Login</a></h4>
                    </div>

                </div>
                <Copyright/>
            </div>
        </>
    )
}
