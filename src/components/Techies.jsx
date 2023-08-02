import React from 'react'


const Techies = () => {
  return (
    <div className='w-full techiesimg border'>
      <div className='container py-8'>
        <div className='border text-center'>
          <div className='font-bold text-4xl border'>Techies 💘 TopHire</div>
          <div className='border mt-6 text-lg text-jacarta-700'>A better love story than twilight. Check the video below to find out why.</div>
          <div className='border mt-14'>
            <img className='m-auto' src="https://cdn.jwplayer.com/v2/media/CAQeMfpE/poster.jpg?width=640" alt="img" height={303} width={540} />
          </div>
        </div>


        <div className='container border mt-16 grid grid-cols-3 p-3 gap-9 px-12'>

          <div className='border'>
            <div className='border'>
              <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/cred.png?123" alt="img" height={40} width={118} />
            </div>

            <div className='flex border mt-5 gap-3'>
              <div>
                <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/yadhu_manoharan.jpg?123" alt="img" height={50} width={50} className='rounded-full' />
              </div>
              <div className='border'>
                <div className='font-semibold text-[16px]'>Yadhu Manoharan</div>
                <div className='text-[14px] font-light'>Sr. iOS Engineer</div>
              </div>
            </div>

            <div className='border mt-5 text-jacarta-600'>
              TopHire was able to make the process really easy. They were able to schedule interviews with the best companies in the industry and drove the entire process smoothly.
            </div>
          </div>


          <div className='border'>
            <div className='border'>
              <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/dream11.png?123" alt="img" height={40} width={137} />
            </div>

            <div className='flex border mt-5 gap-3'>
              <div>
                <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/santosh_nain.jpeg?123" alt="img" height={50} width={50} className='rounded-full' />
              </div>
              <div className='border'>
                <div className='font-semibold text-[16px]'>Santosh Nain</div>
                <div className='text-[14px] font-light'>SDE-2</div>
              </div>
            </div>

            <div className='border mt-5 text-jacarta-600'>
              A friend of mine told me about TopHire when I started looking for new opportunities. The TopHire team was extremely helpful, professional and quick with everything.
            </div>
          </div>


          <div className='border'>
            <div className='border'>
              <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/curefit.png?123" alt="img" height={40} width={112} />
            </div>

            <div className='flex border mt-5 gap-3'>
              <div>
                <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/tarun_dugar.jpeg?123" alt="img" height={50} width={50} className='rounded-full' />
              </div>
              <div className='border'>
                <div className='font-semibold text-[16px]'>Tarun Dugar</div>
                <div className='text-[14px] font-light'>Sr. Software Engineer</div>
              </div>
            </div>

            <div className='border mt-5 text-jacarta-600'>
              Compared to other job portals, what stood out for me was that TopHire, on top of providing really good opportunities, helped me in negotiations with the companies too.
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Techies
