import React from 'react'
import Paragraph from '../../components/landing page/paragraph'
import Logo from "../../assets/logo-yellow transparent.png"
import Footer from '../../components/Footer/Footer'
const LandingPage = () => {
    const paragraphContexts =[
        {
            number:"01",
            head:"ҮЕМ гэж юу вэ?",
            para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris massa, iaculis eget ligula non, mattis hendrerit urna. Curabitur id ante tristique, rutrum odio et, lacinia odio. Vivamus arcu dolor, gravida non tellus quis, blandit lobortis libero. Pellentesque a convallis ex. Cras ac mi at nibh commodo auctor a eget erat. Morbi a ipsum nibh. Sed ullamcorper turpis lectus, sed posuere nisi ultricies eu. Integer rutrum nulla vitae nunc egestas, fringilla fermentum sem rutrum.",
            btnDisplay:false
        },
        {
            number:"02",
            head:"Төслүүд",
            para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris massa, iaculis eget ligula non, mattis hendrerit urna. Curabitur id ante tristique, rutrum odio et, lacinia odio. Vivamus arcu dolor, gravida non tellus quis, blandit lobortis libero. Pellentesque a convallis ex. Cras ac mi at nibh commodo auctor a eget erat. Morbi a ipsum nibh. Sed ullamcorper turpis lectus, sed posuere nisi ultricies eu. Integer rutrum nulla vitae nunc egestas, fringilla fermentum sem rutrum.",
            btnDisplay:true
        },
        {
            number:"03",
            head:"Блог",
            para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris massa, iaculis eget ligula non, mattis hendrerit urna. Curabitur id ante tristique, rutrum odio et, lacinia odio. Vivamus arcu dolor, gravida non tellus quis, blandit lobortis libero. Pellentesque a convallis ex. Cras ac mi at nibh commodo auctor a eget erat. Morbi a ipsum nibh. Sed ullamcorper turpis lectus, sed posuere nisi ultricies eu. Integer rutrum nulla vitae nunc egestas, fringilla fermentum sem rutrum.",
            btnDisplay:true
        }
    ]

  return (
    <main className='w-full h-auto flex flex-col items-center text-slate-50'>
        <header className="w-full h-screen flex flex-col justify-center items-center text-center gap-3 mb-24 md:mb-20 first:border-t-1 first:border-slate-300" id="main_background_image">
                <img className="w-[80%] md:w-[20%]" src={Logo} alt=""/>
            <section className="w-auto flex flex-col justify-center items-center gap-3">
                <h1 className="text-[40px]">Young Engineers Mongolia</h1>
                <h3 className="w-[90%] text-base text-balance md:text-center">Young Engineers Mongolia нь 2024 онд байгуулагдсан. Ирээдүйн Монголын инженерүүдийг бэлтгэх зорилготой төрийн бус байгууллага юм</h3>
                <button className="w-auto h-auto px-4 py-2 text-base bg-[#ff8d23] text-[#fff5ee] mt-4 rounded-md hover:scale-[1.05] duration-300">Илүү ихийг харах</button>
            </section>
         </header>
         <article id="display" className="w-full h-auto flex flex-col items-center justify-center gap-8">
         {
            paragraphContexts.map((context)=>{
                return(
                    <Paragraph 
                        number={context.number}
                        head={context.head}
                        para={context.para}
                        displayBtn={context.btnDisplay}
                    />
                )
            })
    
        }   
        </article>
        <Footer/>
    </main>
  )
}

export default LandingPage