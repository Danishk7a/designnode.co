import Link from "next/link"
export default function Footer(){
   
    return (
        <div>
           <Section/>
       
          <div className="w-full flex-col sm:flex-row flex justify-center sm:gap-[120px] gap-16 items-center] sm:p-20 p-8 bg-[#171717]">
              
               <div className="flex flex-col gap-2">
                <div className="text-white  ">Industries</div>
                <Link  href="">industries</Link>
                <Link   href="">services</Link>
                <Link  href="">products</Link>
                <Link  href="">insights</Link>
               </div> 

                    <div className="flex flex-col gap-2">
                <div className="text-white  ">Industries</div>
                <Link  href="">industries</Link>
                <Link   href="">services</Link>
                <Link  href="">products</Link>
                <Link  href="">insights</Link>
               </div> 


                    <div className="flex flex-col gap-2">
                <div className="text-white  ">Industries</div>
                <Link  href="">industries</Link>
                <Link   href="">services</Link>
                <Link  href="">products</Link>
                <Link  href="">insights</Link>
               </div> 


                    <div className="flex flex-col gap-2">
                <div className="text-white  ">Industries</div>
                <Link  href="">industries</Link>
                <Link   href="">services</Link>
                <Link  href="">products</Link>
                <Link  href="">insights</Link>
               </div> 

      


               
           

        </div>
        {/* <Text /> */}
        </div>
    )
}

function Section(){
    return(    <div className="bg-[#f2f2f2]  sm:p-[200px] p-5 ">

      <div className="text-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet exercitationem nostrum magnam voluptate molestias dolor eaque repellat maiores excepturi <span className="text-black"> velit rem eos necessitatibus, quasi voluptatem veniam alias blanditiis voluptates consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> Dolorem odio debitis nihil amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci corrupti, sequi laboriosam perferendis eveniet nihil exercitationem dolores, commodi corporis nam consectetur expedita.</div>

    </div>)
}

function Text(){
    return (
        <div className="flex justify-center items-center sm:text-[200px] text-[120px]">
            Human Centric
        </div>
    )
}