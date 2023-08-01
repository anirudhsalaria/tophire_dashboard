import React from 'react'

const Header = () => {
  return (
    <div className='container md:flex sm:inline-block w-full  p-6 px-20 '>
        <div>
            <img src="https://d383au3bye3rv1.cloudfront.net/static/images/logo/main.png" alt="Logo" className='h-[28px]'/>
        </div>
        <div className='md:flex sm:inline-block gap-9 ml-auto text-blue font-bold'>
            <div className=' cursor-pointer'>For Employers</div>
            <div className=' cursor-pointer'>Refer & Earn ₹15K</div>
            <div className=' cursor-pointer'>Login</div>
            <div className=' cursor-pointer'>SignUp</div>
        </div>
    </div>
  )
}

export default Header
