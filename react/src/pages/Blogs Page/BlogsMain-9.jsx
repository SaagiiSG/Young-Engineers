import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from "../../components/Footer/Footer"
import { Link } from 'react-router-dom'
const BlogsMain = () => {
  return (
    <article className=' w-[100%] flex flex-col items-center text-white gap-14'>
      <Navbar />
      <section className='w-full pt-32 flex flex-col items-center gap-12'>
        <div className='w-[80%] flex flex-col justify-center'>
          <h3 className='text-[#ff8d23] text-2xl font-semibold'>"Young engiiners mongolia"</h3>
          <h1 className='text-4xl font-bold mt-5 mb-3'>9E for the Future</h1>
          <p className='text-md text-slate-200 leading-4\5'>Бид 9E-ээр буюу 9 инженерчлэлийн чиглэлийн хүрээнд залуучуудад чанартай бөгөөд уншихад хялбар блогуудыг бичиж оруулдаг. 7 хоног бүр тогтмол хуваарьтайгаар блогууд маань орж байгаа тул та бүхэн өдөр болгон вебсайтаа шалгаж байгаарай!</p>
        </div>
        <div className='w-[90%] flex flex-row items-center justify-center flex-wrap gap-12'>
          <div className='w-full md:w-[30%] aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-rose-400'>Software engineering</div>
          <div className='w-full md:w-[30%] aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-cyan-300'>mechanical engineering</div>
          <div className='w-full md:w-[30%] aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-teal-300'>nano engineering</div>
          <div className='w-full md:w-[30%] aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-pink-400'>eng1</div>
          <div className='w-full md:w-[30%] aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-fuchsia-400 '>eng1</div>
          <div className='w-full md:w-[30%] aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-blue-400'>eng1</div>
          <div className='w-full md:w-[30%] aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-sky-400'>eng1</div>
          <div className='w-full md:w-[30%] aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-emerald-400'>eng1</div>
          <div className='w-full md:w-[30%] aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-rose-300'>eng1</div>
          
          
        </div>
      </section>
      {/* <Footer /> */}
    </article>
  )
}

export default BlogsMain