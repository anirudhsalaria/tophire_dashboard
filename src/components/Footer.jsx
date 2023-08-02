import React from 'react'

const Footer = () => {
    return (
        <div className='w-full px-16 pb-1 pt-12 myFooter sm:text-center md:text-left '>
            <div className='container  md:flex sm:inline-block gap-24 '>
                <div className=' md:w-[300px] text-[#8493a2]'>
                    <div>
                        <img className='sm:m-auto md:m-0' src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/Tophire%20Logo_Website%20Horizontal%20White_350x75.png" alt="img" width={100} height={21} />
                    </div>
                    <div className='text-sm mt-3'>
                        TopHire is on a mission to make it dead simple for leading Indian startups to hire the top 2% of tech talent.
                    </div>
                </div>

                <div className=' text-sm leading-6 cursor-pointer'>
                    <div className='text-[#445a70] font-semibold text-[13px]'>CANDIDATES</div>
                    <div className='text-[#8493a2] hover:text-white'>For Candidates</div>
                    <div className='text-[#8493a2] hover:text-white'>Candidate Sign Up</div>
                    <div className='text-[#8493a2] hover:text-white'>Invite & Earn ₹15k</div>
                    <div className='text-[#8493a2] hover:text-white'>Candidate FAQ</div>
                </div>

                <div className=' text-sm leading-6 cursor-pointer'>
                    <div className='text-[#445a70] font-semibold text-[13px]'>EMPLOYERS</div>
                    <div className='text-[#8493a2] hover:text-white'>For Employers</div>
                    <div className='text-[#8493a2] hover:text-white'>Employer Sign Up</div>
                    <div className='text-[#8493a2] hover:text-white'>Employer FAQ</div>
                </div>

                <div className=' text-sm leading-6 cursor-pointer'>
                    <div className='text-[#445a70] font-semibold text-[13px]'>COMPANY</div>
                    <div className='text-[#8493a2] hover:text-white'>Careers</div>
                    <div className='text-[#8493a2] hover:text-white'>Privacy Policy</div>
                </div>

                <div className=' leading-6'>
                    <div className='text-[#445a70] font-semibold text-[14px]'>Partners</div>
                    <div>
                        <img className='sm:m-auto' src="https://d383au3bye3rv1.cloudfront.net/static/images/landing/codechef-directi-for-lp.png" alt="img" height={45} width={116} />
                    </div>
                </div>
            </div>

            <div className=' text-center mt-28 text-xs text-[#8493a2]'>
                © 2023 SPSG TopHire. All Rights Reserved
            </div>
        </div>
    )
}

export default Footer
