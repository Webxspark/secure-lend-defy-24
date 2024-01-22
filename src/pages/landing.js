import React from 'react';
import { Link } from 'react-router-dom';
import heroAbstractSvg from '../assets/hero.svg';
import ellipse from '../assets/ellipse.png';

const LandingPage = () => {
    return (
        <div className='text-white font-[Inter] relative h-screen'>
            {/* Navbar start */}
            <div className='my-6 mx-10 flex items-center justify-between'>
                <div className='w-full'>Secure</div>
                <div className='w-full hidden md:flex items-center justify-center gap-x-4 uppercase'>
                    <Link className='hover:underline underline-offset-4'>Home</Link>
                    <Link className='hover:underline underline-offset-4'>About us</Link>
                </div>
                <div className='w-full flex justify-end'>
                    <button className='bg-white lg:text-base text-sm font-[Poppins] font-semibold rounded-full text-black px-6 py-2'>
                        Connect Wallet
                    </button>
                </div>
            </div>
            {/* Navbar end */}

            <div className='items-center my-28 flex justify-center flex-col'>
                <div className='lg:w-[50%] w-[80%] text-center font-[Poppins]'>
                    <h1 className='text-[#7F00FE] lg:leading-[50px] leading-[30px] font-semibold text-xl lg:text-4xl'>Experience the future of decentralized finance with SecureLend</h1>
                    <p className='my-8'>Manage , borrow and lend funds seamlessly</p>
                </div>
                <div>
                    <button className='bg-white font-[Poppins] font-semibold rounded-full text-black px-6 py-2'>
                        Sign in with Gmail
                    </button>
                </div>
            </div>
            <img src={heroAbstractSvg} alt='hero' className='w-full lg:block hidden absolute bottom-0 h-64' />
            <img src={ellipse} alt='ellipse' className='w-1/2 absolute bottom-16 left-10' />
        </div>
    );
};

export default LandingPage;