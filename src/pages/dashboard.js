import { Input, Progress, Select } from 'antd';
import React from 'react';
import { MdOutlineCheck, MdOutlineClose } from "react-icons/md";

const Dashboard = () => {
    const creditScoreChartColors = {
        '0%': '#ec0000',
        '30%': '#d7c70e',
        '100%': '#04db00'
    }
    return (
        <div className='text-white font-[Poppins]'>
            {/* Navbar start */}
            <div className='my-6 mx-10 flex items-center justify-between'>
                <div className='w-full'>Secure</div>
                <div className='w-full flex justify-end'>
                    <button className='bg-white lg:text-base text-sm font-[Poppins] font-semibold rounded-full text-black px-6 py-2'>
                        0xA98237NDB
                    </button>
                </div>
            </div>
            {/* Navbar end */}
            <div className='flex items-center justify-center w-full mb-11'>
                <div className='lg:w-[50%] lg:mx-0 mx-4 space-y-10'>
                    <div className='flex flex-col lg:flex-row items-center gap-x-6 w-full'>
                        <div className='w-full'>
                            <h1 className='text-sm font-semibold'>Liquidity Pool</h1>
                            <div className='my-2 border-[1px] rounded-xl px-24 py-14 border-[#ffffff4d]'>
                                <p className='text-3xl text-center font-[Poppins] text-[#00D1FF]'>$98,467.21</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-auto">
                            <h1 className='text-sm font-semibold'>Credit Score</h1>
                            <div className='w-full flex items-center justify-center my-2 border-[1px] rounded-xl px-16  py-4 border-[#ffffff4d]'>
                                <Progress format={percent => 625} type='dashboard' percent={(625 / 1000) * 100} strokeWidth={10} strokeColor={creditScoreChartColors} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-sm font-semibold'>Borrow</h1>
                        <div className='my-2 border-[1px] rounded-xl p-8 border-[#ffffff4d]'>
                            <form className='flex flex-col gap-y-6' onSubmit={e => e.preventDefault()}>
                                <div className='flex flex-col gap-y-1'>
                                    <label htmlFor='amount' className='text-xs'>Token</label>
                                    <Input id='amount' placeholder='Token Amount' />
                                </div>
                                <div className='flex flex-col gap-y-1'>
                                    <label htmlFor='amount' className='text-xs'>Select Chain</label>
                                    <Select id='amount' placeholder='Select a chain' ></Select>
                                </div>
                                <div className='w-full flex'>
                                    <button className='bg-[#141414] w-full py-2 text-sm rounded-md uppercase text-[#C9C9C999]'>
                                        Request
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='flex flex-col gap-y-3'>
                            <div className='grid grid-cols-12 gap-x-1 text-sm text-[#FFFFFF99]'>
                                <div className='col-span-2'>SI No.</div>
                                <div className='col-span-4'>Address</div>
                                <div className='col-span-2'>Token</div>
                                <div className='col-span-3'>Credit Score</div>
                                <div className='col-span-1'></div>
                            </div>
                            <div className='grid grid-cols-12 gap-x-1 border-[#ffffff4d] border-[1px] px-4 py-3 rounded-lg'>
                                <div className='col-span-2'>1</div>
                                <div className='col-span-4'>0x873247A...</div>
                                <div className='col-span-2'>9ETH</div>
                                <div className='col-span-3'>768</div>
                                <div className='col-span-1'>
                                    <div className='flex items-center h-full gap-x-5 w-full justify-between'>
                                        <MdOutlineCheck className='text-lg cursor-pointer text-[#00DC72]' />
                                        <MdOutlineClose className='text-lg cursor-pointer text-[#E10606]' />
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-12 gap-x-1 border-[#ffffff4d] border-[1px] px-4 py-3 rounded-lg'>
                                <div className='col-span-2'>2</div>
                                <div className='col-span-4'>0x873247A...</div>
                                <div className='col-span-2'>9ETH</div>
                                <div className='col-span-3'>768</div>
                                <div className='col-span-1'>
                                    <div className='flex items-center h-full gap-x-5 w-full justify-between'>
                                        <MdOutlineCheck className='text-lg cursor-pointer text-[#00DC72]' />
                                        <MdOutlineClose className='text-lg cursor-pointer text-[#E10606]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;