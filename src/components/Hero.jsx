import React from 'react'

const Hero = () => {
    return (
        <div className='w-full border heroimage'>
            <div className='container border p-12 md:py-32 sm:py-10'>
                <div className='border text-center'>
                    <div className='border font-semibold md:text-[45px] sm:text-5xl text-jacarta-700'>Find your next top tech job in 1 week.</div>
                    <div className='border md:text-[22px] py-6 md:px-40 sm:px-0'><span className=' bg-yellow font-semibold'>Are you a top 2%</span> Software Engineer, Product Manager or Data Scientist?
                        Let leading Indian technology <span className='bg-yellow font-semibold'>companies compete to hire you.</span></div>
                    <div className='border py-6'>
                        <button className='rounded-lg font-semibold py-3 px-8 bg-blue text-white'>APPLY TO JOIN</button>
                        <div className=' text-sm mt-2 font-light'>100% free. It takes only 5 minutes
                        </div>
                    </div>
                </div>

                <div className='border grid grid-cols-3 mt-16 p-6 gap-10'>
                    <div className='text-center border'>
                        <div className='flex border'>
                            <img className='m-auto' src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png" alt="img" height={60} width={60} />
                        </div>
                        <div className='font-semibold py-5'>
                            STEP 1: COMPLETE PROFILE
                        </div>
                        <div className='text-[15px] text-jacarta-600'>
                            Once you are approved, we showcase you to leading Indian technology startups
                        </div>
                    </div>

                    <div className='text-center border'>
                        <div className='flex border'>
                            <img className='m-auto' src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png" alt="img" height={60} width={60} />
                        </div>
                        <div className='font-semibold py-5'>
                            STEP 2: RECEIVE JOB OFFERS
                        </div>
                        <div className='text-[15px] text-jacarta-600'>
                            Companies start sending interview requests. Talk to only the ones you like.
                        </div>
                    </div>

                    <div className='text-center border'>
                        <div className='flex border'>
                            <img className='m-auto' src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png" alt="img" height={60} width={60} />
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
