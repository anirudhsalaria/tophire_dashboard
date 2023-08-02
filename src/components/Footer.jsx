import React from 'react'

const Footer = () => {
    return (
        <div className='w-full p-8 myFooter h-[200px]'>
            <div className='container border flex'>
                <div className='border md:w-[300px] text-[#8493a2]'>
                    <div>
                        <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/Tophire%20Logo_Website%20Horizontal%20White_350x75.png" alt="img" width={100} height={21} />
                    </div>
                    <div className='text-sm mt-3'>
                        TopHire is on a mission to make it dead simple for leading Indian startups to hire the top 2% of tech talent.
                    </div>
                </div>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Footer
