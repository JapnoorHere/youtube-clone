import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { CiBellOn } from 'react-icons/ci';
import { FaMicrophone, FaYoutube } from 'react-icons/fa';
import { RiVideoAddLine } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-14 h-20 opacity-95 sticky'>
            <div className=' flex gap-8 items-center text-3xl text-white'>
                <div>
                    <RxHamburgerMenu />
                </div>
                <div className='flex gap-1 items-center justify-center'>
                    <FaYoutube className='text-5xl text-red-500' />
                    <span className='text-2xl font-bold'>YouTube <sup className='font-thin'>IN</sup></span>
                </div>
            </div>
                <div className='flex items-center justify-center'>
                    <form action='flex items-center justify-center gap-5'>
                        <div className='flex items-center bg-[#121212]  pr-0 rounded-full '>
                            <div className='flex gap-5 px-4 pl-7 items-center h-14 pr-5 border border-gray-600 border-opacity-50 rounded-l-full'>
                                <input type="text" placeholder='Search' className='w-[40rem] bg-[#121212] focus:outline-none border-none' />
                            </div>
                            <button className='h-14 w-20 flex items-center justify-center rounded-r-full bg-zinc-800'>
                                <AiOutlineSearch className='flex items-center text-3xl ' />
                            </button>
                        </div>
                    </form>
                    <div className=' text-2xl bg-zinc-800 rounded-full p-4 ml-4'>
                    <FaMicrophone/>
                    </div>
                </div>
                <div className='flex text-3xl gap-8 items-center justify-center'>
                <RiVideoAddLine />
                <CiBellOn />
                <img src="https://japnoorportfolio.netlify.app/static/media/heroImage.0fe258e8865c400b57a5.png" alt="" className='w-12 h-12 rounded-full'/>
                </div>
        </div>
    )
}

export default Navbar
