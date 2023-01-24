import React from 'react'
import SubPlanCon from './subComponents/SubPlanCon'

const Plans = ({steps,setSteps,prev,next,planType,setPlanType}) => {
  return (
    <section className='routes-sec'>
      <h2 className="text-2xl font-bold text-MarineBlue">Select your plan</h2>
      <p className="text-sm font-normal text-LightGray mt-1">
        You have the option of monthly or yearly billing.
      </p>
      <SubPlanCon 
        steps={steps} 
        setSteps={setSteps} 
        prev={prev} 
        next={next}
        planType={planType}
        setPlanType={setPlanType}
      />
    </section>
  )
}

export default Plans