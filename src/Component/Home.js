import React from 'react'

function Home() {
    return (
        <div className=' h-[749px] bg-win'>
            <div className='flex'>
                <div className='w-[560px]'>
                </div>
                <div className='flex h-[749px] items-center'>
                    <div className='flex flex-col gap-[120px] h-[600px] w-[862px] bg-blank'>
                        <div className='flex justify-between'>
                            <p className='text-white w-[200px] font-bold mt-[5px] ml-[25px]' >
                                About Me
                            </p>
                            <button className='h-[35px] w-[35px]' ></button>
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
        </div>
    )
}

export default Home