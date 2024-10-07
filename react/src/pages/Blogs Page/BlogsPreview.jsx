import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import articleData from "../../data/article.json"
const BlogsPreview = () => {
  const data = articleData.articles[0]
  console.log(data);
  
  return (
    <article className=' w-[100%] flex flex-col items-center text-white gap-14'>
      <Navbar />
      <section className='w-full pt-32 flex flex-col items-center gap-12'>
        <div className='w-[80%] flex flex-col justify-center'>
          <h3 className='text-[#ff8d23] text-2xl font-semibold'>YEM Software Engineering article</h3>
          <h1 className='text-4xl font-bold mt-4 mb-3'>These are the blogs about Sofware engineering</h1>
          <p className='text-sm text-slate-200 leading-4\5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nobis accusantium, hic architecto expedita quae voluptatibus omnis, in commodi odio libero molestiae laudantium cumque a ab, harum adipisci nesciunt earum?
          Magni, necessitatibus alias perferendis soluta qui, cumque corrupti eligendi ad magnam nemo error delectus, natus quidem omnis atque aperiam quasi rem nihil nisi distinctio impedit! Eius laborum minus ad. Cumque.
          Sed dolorum consectetur soluta, voluptatum aliquid quos vel! Deleniti aliquid id porro commodi, quisquam ullam tempore error aperiam ab facere. Debitis consequatur necessitatibus quisquam harum repudiandae nobis obcaecati minus itaque.</p>
        </div>
        <div className='w-[80%] h-screen p-5 bg-slate-600 rounded-xl overflow-auto flex flex-col gap-5'>
          <a href="" className='p-4 rounded-md bg-slate-100 flex flex-col md:flex-row gap-4'>            
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F20512141-vector-illustration-of-random-square-pattern-background&psig=AOvVaw0fUiy3AXwTWwDimWzKphw7&ust=1728009541685000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCjx6qX8YgDFQAAAAAdAAAAABAE" alt=""  className='w-[80%] md:w-[40%] aspect-square'/>
              <div className='flex flex-col items-start justify-start gap-3 text-black'>
                <h2 className='text-xl font=semibold'>{data.title}</h2>
                <h3 className=' text-slate-600'>{data.date}</h3>
                <p>{data.preVeiwLine}</p>
              </div>
          </a>
         
        </div>
      </section>
      {/* <Footer /> */}
    </article>
  )
}

export default BlogsPreview