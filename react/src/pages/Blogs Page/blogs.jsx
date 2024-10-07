import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import aData from "../../data/article.json"
const Blogs = () => {
  const data = aData.articles[0]
  const Paradata = data.Programs
  const displayList = Paradata.list_true
  function List(){
    if(displayList){
      Paradata.map((data)=>{
        return(
          <ul className='gap-2 flex flex-col list-disc' key={data.id}>
                    <header className='font-semibold mb-3'>{data.requirments}</header>
                    <li className='pl-3 ml-8'>{data.list_item_1}</li>
                    <li className='pl-3 ml-8'>{data.list_item_2}</li>
                    <li className='pl-3 ml-8'>{data.list_item_3}</li>
                    <li className='pl-3 ml-8'>{data.list_item_4}</li>
                    <li className='pl-3 ml-8'>{data.list_item_5}</li>
                  </ul>
        )
      })
    }
  }
  
  return (
    <article className='w-[78%] text-white flex flex-col items-center justify-center text-center'>
      <Navbar />
      <header className='pt-32 w-full text-left flex flex-col gap-8 pb-12'>
        <h1 className='text-[#ff8d23] text-2xl font-semibold'>YEM</h1>
        <h3 className='text-4xl font-bold mt-4 mb-3'>{data.title}</h3>
        {/* <img src="" alt="blog image" /> */}
      </header>
      <section className='text-base text-left flex flex-col gap-12'>
        <div>
          {/* <h1>{data.intro.header}</h1> */}
          <p>{data.intro.body}</p>
        </div>
        <section className=' text-[18px] flex flex-col gap-6'>
          {Paradata.map((data)=>{
            return(
              
                <div key={data.id}>
                  <header className='font-semibold mb-3'>{data.header}</header>
                  <p className='pl-3'>{data.para1}</p>
                  <p className='pl-3'>{data.para2}</p>
                  <p className='pl-3 mb-3'>{data.para3}</p>
                  <a href={data.program_link} className='pl-3 underline'>{data.program_link_cover}</a>
                </div>
                
              
            )
          })}
          <List />
          
        </section>
        <div>
          <h1>{data.outro.header}</h1>
          <p>{data.outro.body}</p>
          <a href={data.outro.url}></a>
        </div>
      </section>
    </article>
  )
}

export default Blogs