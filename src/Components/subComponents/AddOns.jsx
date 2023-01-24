import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ActiveState from '../module/activeStateModule'
import check from '../../assets/icon-checkmark.svg'

const AddOns = ({ steps,setSteps,prev,next,planType}) => {
  const navigateTo = useNavigate();
  const Next = new ActiveState(steps,setSteps,next);
  const Prev = new ActiveState(steps,setSteps,prev);
  const [addOns,setAddOns] = useState([
    {id:1, title:'Online service', icon:check, text:'Access to multiplayer games', Mprice: '1/mo', Yprice: '10/yr', active:false },
    {id:2, title:'Large storage', icon:check, text:'Extra 1TB of cloud save', Mprice: '2/mo', Yprice: '20/yr', active:false },
    {id:3, title:'Customizable profile', icon:check, text:'Customize theme on your profile', Mprice: '2/mo', Yprice: '20/yr', active:false }
  ])

  const activeAddon =(id)=> {
    const hel = addOns.map(add=>{
      if (add.id === id && add.active === false) {
        return {...add,active: true}
      }
      else if (add.id !== id && add.active === false) {
        return {...add,active: false}
      }
      else if (add.id !== id && add.active === true) {
        return {...add,active: true}
      }
      else{
        return {...add,active: false}
      }
    })
    setAddOns(hel)
  };

  const handleNext=()=> {
    setTimeout(() => {
      Next.activStep()
      navigateTo('/Summary');
    }, 500);
  }
  const handlePrev=()=> {
      setTimeout(() => {
          Prev.activStep()
          navigateTo('/Plans');
      }, 500);
  }
  return (
    <section className='w-full flex flex-col mt-2 overflow-hidden'>
      <div className='w-full flex flex-col space-y-3 mt-2'>
        <Monthly addOns={addOns} setAddOns={setAddOns} planType={planType} func={activeAddon}/>
      </div>
      <div className='w-full p-1 mt-14 flex justify-between flex-row-reverse md:mt-11'>
            <button className='px-3 py-3 bg-MarineBlue text-White font-medium text-sm rounded-md 
            hover:bg-btnHover' onClick={handleNext}>Next Step</button>
            <button className='px-3 py-3 text-CoolGray font-medium text-sm 
            hover:text-MarineBlue' onClick={handlePrev}>Go Back</button>
        </div>
    </section>
  )
}


const Monthly =({addOns,setAddOns,planType,func})=>{
  return( 
    <>
      {
        addOns.map(i => (
          <div className={i.active === true ? 'addon-active' : 'addon-inactive'} key={i.id} onClick={()=> func(i.id)}>
            <span className={i.active === true ? 'addon-check-active' : 'addon-check-inactive'}>
              <img src={check} alt="" />
            </span>
            <span className='w-[67%]'>
              <h4 className='font-semibold text-base text-MarineBlue'>{i.title}</h4>
              <p className='font-normal text-sm text-CoolGray'>{i.text}</p>
            </span>
            <span className='text-xs text-PurplishBlue'>
              +${planType === 'monthly' ? i.Mprice : i.Yprice }
            </span>
          </div>
        ))
      }
    </>
  )
}

    
    

export default AddOns