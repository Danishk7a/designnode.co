import Image from 'next/image';
import Link from 'next/link';

export default function product(){
 
 const products = [
    {name:'p2x', desc:'Powerful tool for image processing', platform:'chrome',tags:'visual', link:'/products/p2x',img:'/p2x.png'},
    {name:'3dev', desc:'Allow to add 3D Elements to your website', platform:'chrome',tags:'visual',link:'/products/3ddev',img:'/3d.png'},
    {name:'TypeCode', desc:'Make Coding tutorial videos', platform:'chrome',tags:'visual',link:'/products/typeit',img:'/typeit.png'},
    {name:'ColorUI', desc:'Choose Right Colors for your Design', platform:'chrome',tags:'visual',link:'/products/colors',img:'/colorui.png'},
 ]
    return(
        <div>
         <div className='flex justify-center mt-10 sm:flex-row flex-col gap-20 fixed bottom-5 left-[30%] '>
        
           <div className='text-[13px] flex gap-10 items-center bg-[#1b1b1b] px-10 h-[40px]  rounded-2xl'>
            <div className='cursor-pointer bg-[#8566CD] px-4 rounded-2xl text-black'>All</div>
            <div className='cursor-pointer'>Scripts</div>
            <div className='cursor-pointer'>Courses</div>
            <div className='cursor-pointer'>Extensions</div>
            <div className='cursor-pointer'>Apps</div>
          </div>
          <input className='rounded-2xl' type="text" placeholder='Search' />
         </div>
          <div className=" flex  justify-center w-full items-center py-20">
            
          <div className="flex  gap-12 justify-center flex-wrap sm:p-20 p-2 ">
              {products.map((e , index)=>{
                return <Link  href={e.link} key={index} className=" shadow-[1px_3px_16px_1px_#00000033] hover:scale-[1.1] border-gray-300 cursor-pointer  flex flex-col  rounded-2xl w-[270px] h-[250px] sm:w-[200px] sm:h-[200px] overflow-hidden ">
                    <img style={{height:'300px',width:'300px'}} src={e.img}/>
                    <div className="text-white text ml-2 mt-2">{e.name}</div>
                    <div className="text-[13px] ml-2 ">{e.desc}</div>
                    <svg className='ml-[280px]' width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.50048 0H8.00048V6.5H7.00048V1.707L0.854485 7.854L0.146484 7.146L6.29348 1H1.50048V0Z" fill="#CDCDCD"/>
</svg>

                    {/* <div>{e.platform}</div> */}

                </Link>
            })}
          </div>

            </div>
        </div>
    )
}

