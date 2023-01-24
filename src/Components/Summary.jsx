import React from 'react'
import thankYou from '../assets/icon-thank-you.svg'

const Summary = () => {
  return (
    <section className='routes-sec flex flex-col items-center space-y-5'>
      <img src={thankYou} alt="" className='w-24 mt-10 cursor-pointer hover:animate-bounce md:w-32 md:mt-14'/>
      <h2 className="text-2xl font-bold text-MarineBlue">Thank you</h2>
      <p className="text-base text-LightGray mt-1 text-center font-medium">
        Thanks for confirming your subscription!
        We hope you have fun using our platform.
        if you ever need support, 
        please feel free to email us at
        support@loremgaming.com
      </p>
    </section>
  )
}

export default Summary 