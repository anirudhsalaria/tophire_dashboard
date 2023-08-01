import React from 'react'

const Hero = () => {
    return (
        <div className='w-full  heroimage'>
            <div className='container  p-12 md:pt-[115px] sm:py-10'>
                <div className=' text-center'>
                    <div className=' font-semibold md:text-[45px] sm:text-5xl text-jacarta-700'>Find your next top tech job in 1 week.</div>
                    <div className=' md:text-[22px] py-6 md:px-40 sm:px-0'><span className=' bg-yellow font-semibold'>Are you a top 2%</span> Software Engineer, Product Manager or Data Scientist?
                        Let leading Indian technology <span className='bg-yellow font-semibold'>companies compete to hire you.</span></div>
                    <div className=' py-6'>
                        <button className='rounded-lg font-semibold py-3 px-8 bg-blue text-white'>APPLY TO JOIN</button>
                        <div className=' text-sm mt-2 font-light'>100% free. It takes only 5 minutes
                        </div>
                    </div>
                </div>

                <div className=' md:grid grid-cols-3 sm:grid-rows-1 mt-16 p-6 gap-10'>
                    <div className='text-center '>
                        <div className='flex '>
                            <img className='p-2 heroIcon m-auto' src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png" alt="img" height={76} width={76} />
                        </div>
                        <div className='font-semibold py-5'>
                            STEP 1: COMPLETE PROFILE
                        </div>
                        <div className='text-[15px] text-jacarta-600'>
                            Once you are approved, we showcase you to leading Indian technology startups
                        </div>
                    </div>

                    <div className='text-center  md:my-0 sm:my-5'>
                        <div className='flex '>
                            <img className='heroIcon p-2  m-auto' src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png" alt="img" height={76} width={76} />
                        </div>
                        <div className='font-semibold py-5'>
                            STEP 2: RECEIVE JOB OFFERS
                        </div>
                        <div className='text-[15px] text-jacarta-600'>
                            Companies start sending interview requests. Talk to only the ones you like.
                        </div>
                    </div>

                    <div className='text-center '>
                        <div className='flex '>
                            <img className='heroIcon p-2 m-auto' src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png" alt="img" height={76} width={76} />
                        </div>
                        <div className='font-semibold py-5'>
                            STEP 3: ACCEPT DREAM JOB
                        </div>
                        <div className=' text-jacarta-600 text-[15px]'>
                            Compare your offers and accept the best one. Hired!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
