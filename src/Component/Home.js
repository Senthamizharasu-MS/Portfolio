import React from 'react'
import { useState } from 'react';
import Com from "./Img/mycomp.png"
import web from "./Img/web.png"
import Taskbar from "./Taskbar";

function Home() {

    const [mycomputer, setmycomputer] = useState(false);
    const [myweb, setmyweb] = useState(false);

    return (
        <div className='flex flex-col justify-between h-screen bg-win'>
            <div className='flex'>
                <div className=''>
                    <button className='mt-[20px] ml-[20px] font-semibold ' type='button' >
                        <img alt='' className='h-[60px] w-[60px]' src={Com} onClick={() => { setmycomputer(true); setmyweb(false) }}>
                        </img>
                        My Computer
                        <br></br>
                        (About Me)
                    </button>

                    <button className='mt-[20px] ml-[20px] font-semibold ' type='button' >
                        <img alt='' className='h-[60px] w-[60px]' src={web} onClick={() => { setmyweb(true); setmycomputer(false) }}>
                        </img>
                        Web Browser
                        <br></br>
                        (Contact)
                    </button>

                    {mycomputer && (
                        <div className=' w-screen flex justify-center' >
                            <div className='flex items-center'>
                                <div className='flex flex-col gap-[120px] h-[600px] w-[862px] bg-blank'>
                                    <div className='flex justify-between'>
                                        <p className='text-white w-[200px] font-bold mt-[5px] ml-[25px]' >
                                            About Me
                                        </p>
                                        <button className='h-[35px] w-[35px]' onClick={() => setmycomputer(false)}  ></button>
                                    </div>

                                    <div className='flex ' >
                                        <div className='w-[220px]'></div>
                                        <div className='flex flex-col gap-[10px] w-[640px] text-black'>
                                            <p className='text-center text-[30px]'>
                                                Hi👋 <br></br> Iam Senthamizharasu M S
                                            </p>
                                            <p className='text-center text-[20px]'>
                                                Software Developer <br></br>
                                            </p>
                                            <p className='text-[18px]'>
                                                I am Senthamizharasu from Madukkarai. I'm a pre-final year Engineering Student at Sri Eshwar College of Engineering pursuing a degree majoring in Computer Science with a keen interest in programming, problem solving and technology.
                                                I have a good interpersonal skill and analytianalytical skills, who wish to position in a reputable organization to expand my learnings, knowledge, and skills, and also cater the knowledge I have for making a significant contribution to the success of the company.
                                            </p>
                                            <p className='mt-[20px]' >

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {myweb && (
                        <div className=' w-screen flex justify-center' >
                            <div className='flex items-center'>
                                <div className='flex flex-col gap-[120px] h-[600px] w-[862px] bg-blank'>
                                    <div className='flex justify-between'>
                                        <p className='text-white w-[200px] font-bold mt-[5px] ml-[25px]' >
                                            Contact Me
                                        </p>
                                        <button className='h-[35px] w-[35px]' onClick={() => setmyweb(false)}  ></button>
                                    </div>

                                    <div className='flex ' >
                                        <div className='w-[220px]'></div>
                                        <div className='text-black'>
                                            <p className='text-[40px]'>
                                                Contact
                                            </p>
                                            <p className='mt-[20px] text-[20px]' >

                                                <span>
                                                    Address :
                                                </span>
                                                <br></br>
                                                <span>
                                                    <a href='https://goo.gl/maps/FXKMhcX4g3b1NyGy7'>39, Bharati colony, Eachanari pirivu, Madukkarai market, CBE-105</a>

                                                </span>
                                                <br></br>
                                                <span>
                                                    Official Email : <a href='mailto:senthamizharasum.ms2020cse@sece.ac.in'> senthamizharasum.ms2020cse@sece.ac.in </a>
                                                </span>
                                                <br></br>
                                                <span>
                                                    Personal Email : <a href='mailto:senthamizharasu3mdk@gmail.com'> senthamizharasu3mdk@gmail.com </a>
                                                </span>
                                                <br></br>
                                                <span>
                                                    Phone : 9444745639
                                                </span>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}




                </div>
            </div>
            <Taskbar />
        </div>
    )
}

export default Home