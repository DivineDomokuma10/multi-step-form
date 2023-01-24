import React, { useState } from 'react'
import Form from './subComponents/Form'


const Info = ({steps,setSteps,next}) => {
  const [inptValue,setInptValue] = useState({ name:'', email:'', phone:'' })
  const [err,setErr] = useState({ name:'', email:'', phone:'' })
  const handleInput =(e)=>{
    let value;
    let testStr;
    if(e.target.name === 'name'){
      value = e.target.value;
      if(value.length === 0){
        setErr({...err,name:'This field is required'})
      }
      else if(value.length < 7){
        setErr({...err,name:'Not up to 7 characters'})
      }
      else{
        setErr({...err,name:''})
        setInptValue({...inptValue,name: value})
      }
    }
    else if(e.target.name === 'email'){
      value = e.target.value;
      testStr = value.slice(value.length - 10)
      if(value.length === 0){
        setErr({...err,email:'This field is required'})
      }
      else if(testStr !== '@gmail.com' && testStr !== '@yahoo.com'){
        setErr({...err,email:'Email not Valid'})
      }
      else{
        setErr({...err, email:''})
        setInptValue({...inptValue,email: value})
      }
    }
    else if(e.target.name === 'phone') {
      value = e.target.value;
      testStr = parseInt(e.target.value)
      if(value.length === 0){
        setErr({...err,phone:'This field is required'})
      }
      else if(testStr !== testStr){
        setErr({...err,phone:'Provide a Number'})
      }
      else{
        setErr({...err, phone:''})
        setInptValue({...inptValue,phone: value})
      }
    }
    else{
      setErr({...err,name:'', email:'', phone:''})
    }
  }
  
  return (
    <section className='routes-sec'>
      <div className='pt-3'>
        <h2 className="text-2xl font-bold text-MarineBlue">Personal info</h2>
        <p className="text-base font-normal text-LightGray mt-1">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <Form 
        handleInput={handleInput} 
        errMsg={err} 
        value={inptValue}
        steps={steps} 
        setSteps={setSteps} 
        next={next}
      />
    </section>
  )
}

export default Info
