import Image from "next/image"
export default function HeroSection(){
   
    return (
       <div className="w-full  my-[180px] ">
       
         <div className="mx-auto px-6 max-w-7xl flex flex-col justify-center gap-8 items-center">
          
             <h1 className="sm:text-[80px]  text-[50px] max-w-2xl text-center  text-[#f2f2f2] font-bold "> think  different </h1>
             <p className="max-w-lg text-center">Live Purposefully think Better dolor sit amet, consectetur adipisicing elit. Doloribus illum sapiente, dolore, ut placeat, perspiciatis quod ipsa consequatur eveniet corporis asperiores omnis nisi.</p>
             
            <div className="flex gap-4"> <button className="bg-[#f2f2f2] cursor-pointer font-medium shadow-[0px_0px_15px_0px_#d8d8fa] rounded-2xl py-1 text-black px-7">Start a Project</button>
             <button className="bg-[#242424] cursor-pointer rounded-2xl py-1 text-white px-7">Portfolio</button></div>

              
        </div>
        {/* <Section></Section> */}
       </div>
    )
}


function Section(){
    return ( 
    <div className="bg-[#101010]  mt-[120px] mx-auto max-w-7xl  flex justify-center items-center shadow-[0px_-49px_123px_36px_#066dff] rounded-2xl">
  
    {/* <video autoPlay muted loop src="/promo.mp4" height={200} width={400}></video> */}
  
    </div>
  )

}