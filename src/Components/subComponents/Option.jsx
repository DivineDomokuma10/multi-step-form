import React from 'react'


const Option = ({data}) => {
  
  return (
    <div className='w-fit h-fit flex justify-center items-center mt-3 md:w-32 md:justify-start'>
      <div className={data.active ? 'active' : 'inactive' }>{data.no}</div>
      <div className='hidden md:block ml-5'>
        <p className='text-xs text-CoolGray'>{data.step}</p>
        <p className='text-sm'>{data.text}</p>
      </div>
    </div>
  )
}

export default Option 