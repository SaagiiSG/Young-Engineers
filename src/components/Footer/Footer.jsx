import React from 'react'
import "../../index.css"
const Footer = () => {
  return (
    <footer className='w-[80%] h-auto py-6 gap-12 flex flex-col-reverse items-center justify-center md:flex-row'>
        <section className='w-[55%] items-start justify-center flex flex-col gap-8'>
                <h1 className='text-3xl'>Холбогдох</h1>
            <form action="" className='w-full flex flex-col gap-4'>
              
                        <div className='flex flex-col md:flex-row gap-5 text-[16px]'>
                            <div className='w-1/2 flex flex-col gap-4 text-[18px]'>
                                <label htmlFor="name">Name</label>
                                <input type="text" id='name' className='bg-transparent border-b-2 border-slate-400 outline-none pb-2'/>
                            </div>
                            <div className='w-1/2 flex flex-col gap-4 text-[18px]'>
                                <label htmlFor="email">Email</label>
                                <input type="text" id='email' className='bg-transparent border-b-2 border-slate-400 outline-none pb-2'/>
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-4 text-[18px]'>
                            <label htmlFor="mes">Message</label>
                            <textarea name="" id="mes" rows={4} className='h-auto bg-transparent border-b-2 border-slate-400 outline-none resize-none pb-2'></textarea>
                        </div>
                    
                    <button className='w-44 px-6 py-4 bg-slate-500 rounded-xl hover:scale-105 duration-300 hover:bg-slate-400'>Send</button>
            </form>
        </section>
        <section className='w-[45%] items-start justify-center flex flex-col gap-8'>
            <h1 className='text-3xl'>FOLLOW</h1>
            <section className='w-full'>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
            </section>
        </section>
    </footer>
  )
}

export default Footer