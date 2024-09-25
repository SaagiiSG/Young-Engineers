// const Display = document.getElementById("display")

// const paragraphContexts =[
//     {
//         number:"01",
//         head:"ҮЕМ гэж юу вэ?",
//         para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris massa, iaculis eget ligula non, mattis hendrerit urna. Curabitur id ante tristique, rutrum odio et, lacinia odio. Vivamus arcu dolor, gravida non tellus quis, blandit lobortis libero. Pellentesque a convallis ex. Cras ac mi at nibh commodo auctor a eget erat. Morbi a ipsum nibh. Sed ullamcorper turpis lectus, sed posuere nisi ultricies eu. Integer rutrum nulla vitae nunc egestas, fringilla fermentum sem rutrum.",
//         btnDisplay:false
//     },
//     {
//         number:"02",
//         head:"Төслүүд",
//         para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris massa, iaculis eget ligula non, mattis hendrerit urna. Curabitur id ante tristique, rutrum odio et, lacinia odio. Vivamus arcu dolor, gravida non tellus quis, blandit lobortis libero. Pellentesque a convallis ex. Cras ac mi at nibh commodo auctor a eget erat. Morbi a ipsum nibh. Sed ullamcorper turpis lectus, sed posuere nisi ultricies eu. Integer rutrum nulla vitae nunc egestas, fringilla fermentum sem rutrum.",
//         btnDisplay:true
//     },
//     {
//         number:"03",
//         head:"Блог",
//         para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris massa, iaculis eget ligula non, mattis hendrerit urna. Curabitur id ante tristique, rutrum odio et, lacinia odio. Vivamus arcu dolor, gravida non tellus quis, blandit lobortis libero. Pellentesque a convallis ex. Cras ac mi at nibh commodo auctor a eget erat. Morbi a ipsum nibh. Sed ullamcorper turpis lectus, sed posuere nisi ultricies eu. Integer rutrum nulla vitae nunc egestas, fringilla fermentum sem rutrum.",
//         btnDisplay:true
//     }
// ]

// function Ext(data){
//     const Paragraph = ``
//     const button = ``
   
//     for(let i = 0; i++; i<data.length){
//         Paragraph =+ `
//         <article className="w-[80%] h-auto flex flex-col md:flex-row justify-center items-center gap-6 border-b py-[16px] border-slate-300">
//             <section className="w-full h-auto flex flex-col">
//                 <div className="h-[140px] relative">
//                     <h1 className="w-[130px] text-[126px] opacity-35 align-text-top leading-[140px]">${data[i].number}</h1>
//                     <h3 className="w-auto h-auto text-[32px] bottom-4 absolute font-bold">${data[i].head}</h3>        
//                 </div>
//                     <p className="md:ml-4">${data[i].para}</p>
//             </section>
//             <img className="w-full md:w-[40%]" src="https://static.vecteezy.com/system/resources/previews/014/833/463/original/gear-logo-images-vector.jpg" alt=""/>
//         </article>`
// }
//     Display.innerHTML = Paragraph
// }


// Display.innerHTML = `<p>hello</p>`
// Ext(paragraphContexts);