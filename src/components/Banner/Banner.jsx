import React from 'react';

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto mt-20 flex flex-col md:flex-row gap-5'>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex items-center justify-between overflow-hidden rounded-2xl'>
                <div>
                    <img src="/public/vector1.png" alt="" />
                </div>
                <div className='text-center text-white'>
                    <p className='text-[16px] md:text-[20px]'>In-Progress</p>
                    <h className='text-[40px] md:text-[52px] font-bold'>0</h>
                </div>
                <div>
                    <img src="/public/vector1.png" alt="" className='scale-x-[-1]' />
                </div>
            </div>

            <div className='bg-gradient-to-r from-[#54CF68] to-[#00827A] flex items-center justify-between overflow-hidden rounded-2xl'>
                <div>
                    <img src="/public/vector1.png" alt="" />
                </div>
                <div className='text-center text-white'>
                    <p className='text-[16px] md:text-[20px]'>Resolved</p>
                    <h className='text-[40px] md:text-[52px] font-bold'>0</h>
                </div>
                <div>
                    <img src="/public/vector1.png" alt="" className='scale-x-[-1]' />
                </div>
            </div>
        </div>
    );
};

export default Banner;