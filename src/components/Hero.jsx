import React from 'react'

const Hero = () => {
    return (
        <div className='w-full border heroimage'>
            <div className='container border p-12 py-32'>
                <div className='border text-center'>
                    <div className='border font-semibold text-[45px] text-jacarta-700'>Find your next top tech job in 1 week.</div>
                    <div className='border text-[22px] py-6 px-40'><span className=' bg-orange font-semibold'>Are you a top 2%</span> Software Engineer, Product Manager or Data Scientist?
                        Let leading Indian technology <span className='bg-orange font-semibold'>companies compete to hire you.</span></div>
                    <div className='border py-6'>
                        <button className='rounded-lg font-semibold py-3 px-8 bg-blue text-white'>APPLY TO JOIN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
