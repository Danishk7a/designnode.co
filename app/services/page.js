import Image from 'next/image';

export default function services(){
 
 const services = [
    {name:'Design',
       desc:'Transform your brand’s online presence with our bespoke website designs. We focus on creating visually stunning and user-friendly websites that engage and convert visitors. Transform your brand’s online presence with our bespoke website designs. We focus on creating visually stunning and user-friendly websites that engage and convert visitors."Transform your brand’s online presence with our bespoke website designs. We focus on creating visually stunning and user-friendly websites that engage and convert visitors."', platform:'chrome',tags:'visual',img:'/design2.jpg'},
   
   
    {name:'Development', desc:'Transform your brand’s online presence with our bespoke website designs. We focus on creating visually stunning and user-friendly websites that engage and convert visitors. Transform your brand’s online presence with our bespoke website designs. We focus on creating visually stunning and user-friendly websites that engage and convert visitors."Transform your brand’s online presence with our bespoke website designs. We focus on creating visually stunning and user-friendly websites that engage and convert visitors.', platform:'chrome',tags:'visual',img:'/Design3.jpg'},


    {name:'Cloud & Infra', desc:'Transform your brand’s online presence with our bespoke website designs. We focus on creating visually stunning and user-friendly websites that engage and convert visitors. Transform your brand’s online presence with our bespoke website designs. We focus on creating visually stunning and user-friendly websites that engage and convert visitors."Transform your brand’s online presence with our bespoke website designs. We focus on creating visually stunning and user-friendly websites that engage and convert visitors.', platform:'chrome',tags:'visual',img:'/design5.jpg'},

 ]
    return(

    <div>
                {/* <div className='text-white text-4xl text-center mt-20'>Services</div> */}

          <div className="flex justify-center items-center sm:p-20 py-20 ">
            
          <div className="flex gap-20 flex-col sm:p-20]">
              {services.map((e , index)=>{
                return <div key={index} className=" sm:w-[70%] cursor-pointer  flex flex-col     rounded-2xl w-full h-[500px] overflow-hidden ">
                    <div className="text-white text-4xl ml-5">{e.name}</div>
                    <div className="text-[13px] ml-5 mt-8 mb-8">{e.desc}</div>
                    <img src={e.img} />  


                </div>
            })}
          </div>

            </div>
    </div>
    )
}