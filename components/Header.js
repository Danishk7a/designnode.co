"use client";
import Link from "next/link"
import { useState } from "react"
export default function Header(){
   const [showToggle, setshowToggle] = useState(false)
    return (
        <div className=" sticky top-0 z-50 backdrop-blur-md  flex sm:justify-around justify-between items-center h-[8vh]">
                <Link href="/" className="text-white ml-10">
                    Design.
                </Link>

                <div className="sm:flex hidden gap-10 items-center">
                    <Link href='/products'>Products</Link>
                    <Link  href='/services'>Services</Link>
                    <Link  href=''>Industries</Link>
                    <Link  href='/insights'>Insights</Link>
                    <button>Contact</button>
                </div>

                <svg onClick={(e)=>{setshowToggle((pre=>!pre))}} className={`transition-all duration-500 ease-in-out  sm:hidden cursor-pointer  mr-10 ${showToggle? 'rotate-90' :'rotate-0'} `} width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 4C0.446875 4 0 4.44687 0 5C0 5.55313 0.446875 6 1 6H13C13.5531 6 14 5.55313 14 5C14 4.44687 13.5531 4 13 4H1ZM1 0C0.446875 0 0 0.446875 0 1C0 1.55313 0.446875 2 1 2H13C13.5531 2 14 1.55313 14 1C14 0.446875 13.5531 0 13 0H1Z" fill="#B3B3B3"/>
</svg>
<MobileHeader showToggle={showToggle} />
        </div>
    )
}


function MobileHeader({showToggle}){
    return(
<div
  className={`fixed top-[8vh] left-0 h-[100vh] p-4 flex flex-col gap-7 backdrop-blur-md bg-[#000000]
    transition-all duration-500 ease-in-out 
    ${showToggle ? 'w-full' : 'w-0 overflow-hidden'}
    // ${showToggle ? 'opacity-100' : 'opacity-0'}
    ${showToggle ? '' : 'pointer-events-none'}
  `}
>

           <Link className="hover:bg-[#242424] p-3" href='/products'>Products</Link>
                    <Link className="hover:bg-[#242424] p-3" href='/services'>Services</Link>
                    <Link className="hover:bg-[#242424] p-3" href=''>Industries</Link>
                    <Link className="hover:bg-[#242424] p-3"  href='/insights'>Insights</Link>
                    {/* <button>Contact</button> */}

        </div>
    )
}