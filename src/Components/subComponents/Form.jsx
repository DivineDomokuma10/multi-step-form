import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ActiveState from '../module/activeStateModule';

const Form = ({handleInput,errMsg,value,steps,setSteps,next}) => {
  const navigateTo = useNavigate();
  const [canSubmit, setCanSubmit] = useState(false);
  const active = new ActiveState(steps,setSteps,next);
  const inputs = [
    {id:1, name:'name', err:errMsg.name, type:'text', label:'Name', placeholder:'e.g John Mark'},
    {id:2, name:'email', err:errMsg.email, type:'email', label:'Email', placeholder:'e.g johnmark@gmail.com'},
    {id:3, name:'phone', err:errMsg.phone, type:'text', label:'Phone', placeholder:'e.g +234-80434567894', maxLength:11}
  ]
  
  const handleSubmit = (e) =>{

    e.preventDefault();

    inputs.forEach(i=>{
      if(i.err !== '' && value.name == '' ||value.email == '' || value.phone == ''){
        setCanSubmit(false)
      }
      else{
        setCanSubmit(true)
        setTimeout(() =>{ 
          active.activStep()
          navigateTo('/Plans'); 
        },200)
      }
    })
  }

  return (
    <form className='w-full flex flex-col mt-2 overflow-hidden' onSubmit={handleSubmit}>
      {
        inputs.map(input => (
          <div key={input.id} className='flex flex-col mb-5'>
              <div className='flex justify-between'>
                  <label htmlFor="n" className='text-sm text-MarineBlue font-semibold'>{input.label}</label>
                  <p className='text-sm text-StrawberryRed font-semibold'>{input.err}</p>
              </div>
              <input className='inpt' onChange={handleInput} {...input}/>
          </div>

        ))
      }
      <button type='submit' className='btn'>Next Step</button>
    </form>
  )
}

export default Form