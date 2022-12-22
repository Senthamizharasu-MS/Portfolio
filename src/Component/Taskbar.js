import React from 'react'
import { useState } from 'react';
import start from "./Img/start.png"
import Clock from 'react-live-clock';

function Taskbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='h-[50px] bg-[rgb(36,93,218)] flex justify-between'>
            <button className='' onClick={() => setIsOpen(true)} >
                <img className='h-[50px]' src={start} alt='' />
            </button>

            

            <div className='h-[50px] w-[100px] rounded-rad bg-[#009ff5] flex justify-center items-center text-white font-bold '   >
                <Clock format={'HH:mm A'} ticking={true} />
            </div>
        </div>
    )
}

export default Taskbar