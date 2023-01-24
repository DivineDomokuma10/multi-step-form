import React from 'react'
import Info from './Info';
import Plans from './Plans';
import Add from './Add';
import Summary from './Summary';
import Option from './subComponents/Option';
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'


const Main =()=> {
  const [planType,setPlanType] = useState('monthly');
  const [steps, setSteps] = useState([
    {
      no: 1,
      step: 'Step 1',
      text: 'Your info',
      active: true
    },
    {
      no: 2,
      step: 'Step 2',
      text: ' Select plan',
      active: false
    },
    {
      no: 3,
      step: 'Step 3',
      text: ' Add-ons',
      active: false
    },
    {
      no: 4,
      step: 'Step 4',
      text: ' Summary',
      active: false
    }
  ]);



  return (
    <main className='w-full h-full bg-white flex flex-col md:flex-row md:w-3/4 md:h-3/4 md:rounded-lg md:p-3'>
        <div className='w-full h-1/4 bg-mobile bg-cover space-x-4 flex justify-center bg-no-repeat 
        md:w-1/3 md:h-full md:bg-desktop md:rounded-lg md:flex-col md:items-start md:justify-start md:space-x-0 md:pl-3'>
          {(steps.map(step => (<Option key={step.no} data={step}/>)))}
        </div>
        <div className='w-full h-3/4 md:h-full '>
            <Routes>
              <Route path='/' element={
                <Info 
                  steps={steps} 
                  setSteps={setSteps} 
                  next={steps[1]}
                />
              }></Route>
              <Route path='/Plans' element={
                <Plans 
                  steps={steps} 
                  setSteps={setSteps} 
                  prev={steps[0]} 
                  next={steps[2]}
                  planType={planType}
                  setPlanType={setPlanType}
                />
              }></Route>
              <Route path='/Add' element={
                <Add
                  steps={steps} 
                  setSteps={setSteps} 
                  prev={steps[1]} 
                  next={steps[3]}
                  planType={planType}
                />
              }></Route>
              <Route path='/Summary' element={<Summary/>}></Route>
            </Routes>
        </div>
    </main>
  )
}
// </>


export default Main