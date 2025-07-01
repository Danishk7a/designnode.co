export default function insights(){
  
  const posts = [
    {title:'All Image Effects Explained', desc: 'explain all image effects', img:'/post1'},
    {title:'Design Theory', desc: 'explain all image effects', img:'/post2'},
    {title:'Psychology of Good Design', desc: 'explain all image effects', img:'/post3'},
    {title:'UI/UX Essentials', desc: 'explain all image effects', img:'/post4'},
    {title:'Top 5 Mistakes Designers Do', desc: 'explain all image effects', img:'/post5'}
  ]
  
  return (
          <div className=" py-20 flex justify-center items-center gap-20 flex-wrap">
            
            {posts.map((e)=>{
              return <div className="flex hover:scale-[1.1] flex-col bg-black gap-3 rounded-2xl p-10" >
                <div className="text-white" >{e.title}</div>
                <div className="text-[14px]">{e.desc}</div>

              </div>
            })}
            </div>
    )
}