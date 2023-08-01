import React from 'react'

const Works = () => {
    return (
        <div className='container border my-20'>
            <div className='text-center text-xl font-semibold text-jacarta-700'>HOW IT WORKS</div>


            <div className='md:flex sm:inline-block border md:p-6 md:py-16 sm:p-0 '>
                <div className='border md:w-1/2 sm:w-full px-8'>
                    <div className='stylishLine'></div>
                    <div className='border mt-8 md:w-[95%] sm:w-full'>
                        <div className='font-semibold text-2xl text-lightblue'>
                            Create your free candidate profile
                        </div>
                        <div className='py-8 text-[18px] text-jacarta-600'>
                            Answer a few questions about yourself - it takes less than 5 minutes.
                        </div>
                        <div className=' italic text-jacarta-600'>
                            <div>🏅 What is your biggest achievement?</div>
                            <div>👑️ What does your ideal opportunity look like?</div>
                        </div>
                    </div>
                </div>

                <div className='md:w-1/2 sm:w-full border'>
                    <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Create%20Profile.png" alt="img" />
                </div>
            </div>

            {/* --------------------------------------------------------------------------------------------------------------------- */}

            <div className='md:flex sm:inline-block border md:p-6 md:py-16 sm:p-0 '>
                <div className='md:w-1/2 sm:w-full border'>
                    <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Companies%20Compete.png" alt="img" />
                </div>

                <div className='border md:w-1/2 sm:w-full px-8'>
                    <div className='stylishLine'></div>
                    <div className='border mt-8 md:w-[95%] sm:w-full'>
                        <div className='font-semibold text-2xl text-lightblue'>
                            Sit back while companies compete to hire you
                        </div>
                        <div className='py-8 text-[18px] text-jacarta-600'>
                            Don’t waste your time reaching out to companies or dealing with recruiters.
                        </div>
                        <div className=' italic text-jacarta-600'>
                            <div>💨 We fast-track your profile to hiring managers.</div>
                            <div>🙆‍♂️ Get multiple interview requests with upfront salary offers within days.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------------------------------------------------------------------------------------------------------------- */}
            <div className='md:flex sm:inline-block border md:p-6 md:py-16 sm:p-0 '>
                <div className='border md:w-1/2 sm:w-full px-8'>
                    <div className='stylishLine'></div>
                    <div className='border mt-8 md:w-[95%] sm:w-full'>
                        <div className='font-semibold text-2xl text-lightblue'>
                            Salary & Role transparency
                        </div>
                        <div className='py-8 text-[18px] text-jacarta-600'>
                            Interview requests from companies mention salary and role details upfront - before you decide to accept or decline them.
                        </div>
                        {/* <div className=' italic text-jacarta-600'>
                            <div>💨 We fast-track your profile to hiring managers.</div>
                            <div>🙆‍♂️ Get multiple interview requests with upfront salary offers within days.</div>
                        </div> */}
                    </div>
                </div>

                <div className='md:w-1/2 sm:w-full border'>
                    <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Transparency.png" alt="img" />
                </div>
            </div>

            {/* -------------------------------------------------------------------------------------------------------------------- */}
            <div className='md:flex sm:inline-block border md:p-6 md:py-16 sm:p-0 '>
                <div className='md:w-1/2 sm:w-full border'>
                    <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Dedicated%20Talent%20Advocate.png" alt="img" />
                </div>

                <div className='border md:w-1/2 sm:w-full px-8'>
                    <div className='stylishLine'></div>
                    <div className='border mt-8 md:w-[95%] sm:w-full'>
                        <div className='font-semibold text-2xl text-lightblue'>
                            A dedicated talent advocate
                        </div>
                        <div className='py-8 text-[18px] text-jacarta-600'>
                            Your Talent Advocate will guide you through the entire process. From polishing your profile, providing interview tips to helping negotiate offers!
                        </div>
                        {/* <div className=' italic text-jacarta-600'>
                            <div>💨 We fast-track your profile to hiring managers.</div>
                            <div>🙆‍♂️ Get multiple interview requests with upfront salary offers within days.</div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* -------------------------------------------------------------------------------------------------------------------- */}
            <div className='md:flex sm:inline-block border md:p-6 md:py-16 sm:p-0 '>
                <div className='border md:w-1/2 sm:w-full px-8'>
                    <div className='stylishLine'></div>
                    <div className='border mt-8 md:w-[95%] sm:w-full'>
                        <div className='font-semibold text-2xl text-lightblue'>
                        Current and past employers can’t see your profile
                        </div>
                        <div className='py-8 text-[18px] text-jacarta-600'>
                        By default, we hide your profile from any employers that you list as your current and past employer.
                        </div>
                        <div className=' italic text-jacarta-600'>
                            <div>🕵 Privacy Assured.</div>
                            {/* <div>🙆‍♂️ Get multiple interview requests with upfront salary offers within days.</div> */}
                        </div>
                    </div>
                </div>

                <div className='md:w-1/2 sm:w-full border'>
                    <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Privacy.png" alt="img" />
                </div>
            </div>

            {/* -------------------------------------------------------------------------------------------------------------------- */}

        </div>
    )
}

export default Works
