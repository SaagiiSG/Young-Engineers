import React from 'react'
import Navbar from '../../components/navbar/Navbar'
const Charity = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center text-white'>
      <Navbar />
      <div className='w-[80%] mt-32 '>
        <h1 className='text-[#ff8d23] text-2xl font-semibold'>"Fund us for better future"</h1>
        <h3 className='mt-3 text-xl text-slate-100 leading-4\5 font-medium'>“Young Engineers Mongolia” байгууллага нь залуучуудын удирдсан байгууллага бөгөөд бид ирээдүйн Монголын инженерийн ажлын хүчийг нэмэгдүүлэх алсын хараатайгаар тууштай, хүчин төгс ажиллаж байна. Билний ажлын урсгалыг нэмэгдүүлж, юм хийе гэсэн залуучуудаа дэмжих хүсэлтэй байвал доор дансаар бидэнд хандив өргөөрэй.</h3>
      </div>
      <section className='w-[80%] mt-12 text-2xl text-slate-300 hover:text-white duration-300'>


        <h1 className='font-semibold tracking-[1.6px]'>5112419859</h1>
        <h3>Мөнхбатын Болормаа</h3>
      </section>

  </section>
  )
}

export default Charity