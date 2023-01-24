import React from 'react'
import AddOns from './subComponents/AddOns'

const Add = ({ steps,setSteps,prev,next,planType}) => {
  return (
    <section className='routes-sec'>
      <h2 className="text-2xl font-bold text-MarineBlue">Pick add-ons</h2>
      <p className="text-sm font-normal text-LightGray mt-1">
        Add-ons help enhance your gaming exprience.
      </p>
      <AddOns
         steps={steps} 
         setSteps={setSteps} 
         prev={prev} 
         next={next}
         planType={planType}
      />
    </section>
  )
}

export default Add