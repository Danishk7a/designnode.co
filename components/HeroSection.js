import Image from "next/image"
export default function HeroSection(){
   
    return (
       <div>
         <div className="w-full flex justify-around  items-center h-[70vh] ml-3">
               <div className="sm:text-[80px] text-[60px] text-white  ">
                 Human 
                 <div className="mb-10 mt-[-30px]">Centric Solutions</div>
                 <p className="sm:w-[50%] text-[18px] text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laudantium vitae quos aliquid inventore ullam? Eius a inventore vero possimus minus. Soluta, labore.</p>
               </div>

              
        </div>
        <Section></Section>
       </div>
    )
}


function Section(){
    return ( <div className="sm:p-20 p-2 flex justify-center">
    <div className="bg-[#101010] h-[60vh] sm:w-[70%] w-[100%] flex justify-center items-center shadow-[0px_-49px_123px_36px_#9672e9] rounded-2xl">
    {/* <Image src='/pr1.png' width="800" height="100"/> */}
    <video autoPlay muted loop src="/promo.mp4" height={200} width={400}></video>
    </div>
  </div>)
}