import React, { useState } from 'react'
import pro from '../../assets/icon-pro.svg'
import arcade from '../../assets/icon-arcade.svg'
import advanced from '../../assets/icon-advanced.svg'
import toggleOn from '../../assets/toggle_on.svg'
import toggleOff from '../../assets/toggle_off.svg'
import ActiveState from '../module/activeStateModule'
import Plantype from '../module/planModule'
import makeActive from '../module/àctive'
import { useNavigate } from 'react-router-dom'

const SubPlanCon = ({steps,setSteps,prev,next,planType,setPlanType}) => {
    const navigateTo = useNavigate(); 
    const Next = new ActiveState(steps,setSteps,next);
    const Prev = new ActiveState(steps,setSteps,prev);
    
    const [plans,setPlans] = useState([
        {id:1, title:'Arcade', Mprice:'9/mo', Yprice:'90/yr', icon:arcade, free:'2 months free', active:false},
        {id:2, title:'Advanced', Mprice:'12/mo', Yprice:'120/yr', icon:advanced, free:'2 months free', active:false},
        {id:3, title:'Pro', Mprice:'15/mo', Yprice:'150/yr', icon:pro, free:'2 months free', active:false}
    ])
    const planT = new Plantype(planType,setPlanType);
    

    const handleNext=()=> {
        setTimeout(() => {
            Next.activStep()
            navigateTo('/Add');
        }, 500);
    }
    const handlePrev=()=> {
        setTimeout(() => {
            Prev.activStep()
            navigateTo('/');
        }, 500);
    }
  return (
    <section className='w-full flex flex-col mt-2 overflow-hidden'>
        <div className="w-full flex flex-col md:flex-row md:space-x-5 md:mt-10">
            <Monthly setPlans={setPlans} plan={plans} planType={planType}/>
        </div>

        <div className="w-full p-2 bg-gray-100 rounded-md flex items-center justify-center">
            <p className={planType === 'monthly' ? 'text-sm mx-2 font-semibold text-MarineBlue' : 'text-sm mx-2 font-semibold text-CoolGray'}>Monthly</p>
            <img src={planType === 'monthly' ? toggleOff : toggleOn} onClick={()=> planT.handlePlanType()} className='w-8 cursor-pointer' alt="" />
            <p className={planType === 'yearly' ? 'text-sm mx-2 font-semibold text-MarineBlue' : 'text-sm mx-2 font-semibold text-CoolGray'}>Yearly</p>
        </div>

        <div className='w-full p-1 mt-4 flex justify-between flex-row-reverse'>
            <button className='px-3 py-2 bg-MarineBlue text-White font-medium text-sm rounded-md 
            hover:bg-btnHover' onClick={handleNext}>Next Step</button>
            <button className='px-3 py-2 text-CoolGray font-medium text-sm 
            hover:text-MarineBlue'  onClick={handlePrev}>Go Back</button>
        </div>

    </section>
  )
}

const Monthly = ({plan,setPlans,planType})=>{
    return (
        <>
            {plan.map(i => ( 
                <div key={i.id} className={i.active === true ? 'active-plan' : 'inactive-plan'} onClick={()=> makeActive(i.id,plan,setPlans)}>
                    <img src={i.icon} alt="" />
                    <div className='ml-5 md:ml-0 md:mt-10 md:space-y-3'>
                        <h2 className='font-bold text-MarineBlue'>{i.title}</h2>
                        <p className='text-xs font-medium text-CoolGray'>${i.Mprice}</p>
                        {planType === 'yearly' ?  <p className='text-xs font-semibold text-MarineBlue'>{i.free}</p> : ''}
                    </div>
                </div>
            ))}
        </>
    )
}


export default SubPlanCon