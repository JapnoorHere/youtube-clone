import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { MdWatchLater } from "react-icons/md";

const Sidebar = () => {

    const mainLinks = [
        {
            icon : <GoHomeFill/>,
            name : 'Home'
        },
        {
            icon : <SiYoutubeshorts/>,
            name : 'Shorts'
        },
        {
            icon : <MdSubscriptions />,
            name : 'Subscriptions'
        },
    ]

    const otherLinks = [
        {
            icon : <FaHistory/>,
            name : 'History'
        },
        {
            icon : <BiLike/>,
            name : 'Liked Videos'
        },
        {
            icon : <MdWatchLater />,
            name : 'Watch Later'
        },
    ]

  return (
    <div className='w-2/12 pr-5 overflow-auto pb-8 mt-4'>
        <ul className='mx-2 flex flex-col border-b-2 pb-3 border-[#3f3f3f]'>
            {mainLinks.map((link)=>(
                <li key={link.name} className={`rounded-xl pl-6 py-3 hover:bg-[#272727] ${link.name === 'Home'  ? "bg-[#272727]" : ""}`}>
                    <a  href="#" className='flex items-center gap-6 text-2xl '>
                        {link.icon}
                        <span className='text-xl'>{link.name}</span>
                    </a>
                </li>
            ))}
        </ul>
        <ul className='mx-2 mt-4 flex flex-col border-b-2 pb-3 border-[#3f3f3f]'>
            {otherLinks.map((link)=>(
                <li key={link.name} className={`rounded-xl pl-6 py-3 hover:bg-[#272727]`}>
                    <a  href="#" className='flex items-center gap-6 text-2xl '>
                        {link.icon}
                        <span className='text-xl'>{link.name}</span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar
