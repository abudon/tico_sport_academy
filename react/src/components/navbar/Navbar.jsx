
import {PersonOutlined} from "@mui/icons-material";
import {Avatar, Typography} from "@mui/material";
import {social} from './data/social_media.jsx'
import logo from '../../assets/images/Logo01.png'
import Nav from './component/nav.jsx'
import {useState} from "react";
import Searchbar from "../searchbar/searchbar.jsx";
export default function Navbar() {

    return (
        <>
            {/*DESKTOP LAYOOUT*/}
            <div className={'flex w-full flex-col'}>
                {/*SOCIAL MEDIA AND LOGIN*/}
                <div className={'w-[vw] h-[3rem] bg-white flex items-center justify-between'}>
                    <div className={'ml-6'}>
                        <ul className={'flex items-center'}>
                            {
                                social.map((item, index) => {
                                    return <li key={index} className={'ml-5'}>
                                        <a href={item.url} target={'_blank'} rel={'noreferrer'}>
                                            {item.icon}
                                        </a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className={'flex items-center mr-6'}>
                        <Typography color={'success'} mx={1} component={'caption'} variant={'p'}>Signin</Typography>
                        <PersonOutlined  fontSize={'medium'} color={'success'}></PersonOutlined>

                    </div>
                </div>
                {/*MAIN NAVIGATION*/}
                <div className={'flex flex-row w-full justify-around items-center h-[6rem] bg-green-600'}>
                    {/*THE LOGO*/}
                    <div>
                        <Avatar sx={{height:56, width:56}} className={'bg-white'} src={logo}/>
                    </div>
                    <div>
                        {/*THE NAVIGATION*/}
                    <Nav/>
                    </div>
                    {/*THE SEARCH*/}
                    <div>
                        <Searchbar placeholder={'Enter your Search'} data={[]}/>
                    </div>
                </div>

            </div>

        </>
    )
}
