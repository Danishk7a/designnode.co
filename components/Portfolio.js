import Image from "next/image"
import FadeInWhenVisible from "./FadeInWhenVisible"
export default function Portfolio(){
    return(
        <div>
             <FadeInWhenVisible>  <div className="max-w-7xl mx-auto flex gap-3 flex-wrap">
               
    <Image className="rounded-2xl" src='/design2.jpg' width={400} height={400} />
    <Image className="rounded-2xl" src='/Design3.jpg' width={600} height={600}/>
    <Image className="rounded-2xl" src='/design4.jpg' width={700} height={700}/>
    <Image className="rounded-2xl" src='/design5.jpg' width={400} height={300}/>
    

  </div></FadeInWhenVisible>
        </div>

    )
}