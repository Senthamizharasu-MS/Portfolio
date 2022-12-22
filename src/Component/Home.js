import React from 'react'
import { useState } from 'react';
import Com from "./Img/mycomp.png"
import Taskbar from "./Taskbar";

function Home() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex flex-col justify-between h-screen bg-win'>
            <div className='flex'>
                <div className=''>
                    <button className='mt-[20px] ml-[20px] font-semibold ' type='button' >
                        <img alt='' className='h-[60px] w-[60px]' src={Com} onClick={() => setIsOpen(true)}>
                        </img>
                        My Computer
                    </button>

                    {isOpen && (
                        <div className=' w-screen flex justify-center' >
                            <div className='flex items-center'>
                                <div className='flex flex-col gap-[120px] h-[600px] w-[862px] bg-blank'>
                                    <div className='flex justify-between'>
                                        <p className='text-white w-[200px] font-bold mt-[5px] ml-[25px]' >
                                            About Me
                                        </p>
                                        <button className='h-[35px] w-[35px]' onClick={() => setIsOpen(false)}  ></button>
                                    </div>

                                    <div className='flex ' >
                                        <div className='w-[550px]'>

                                        </div>
                                        <div className='text-[#ec43d3] text-center text-[30px]'>
                                            <p className=''>
                                                Hi👋 <br></br> Iam Senthamizharasu M S
                                            </p>
                                            <p className='mt-[20px]' >
                                                Software Developer <br></br>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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