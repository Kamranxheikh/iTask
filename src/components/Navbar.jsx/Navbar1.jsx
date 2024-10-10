import React from 'react'

const Navbar1 = () => {
    return (
        <nav className='bg-violet-600 flex justify-between hover:font-bold  items-center p-4 text-white px-16'>
            
                <div className='font-bold text-xl hover:underline cursor-pointer'>
                    iTask
                </div>
                <div className='font-semibold text-lg space-x-4  '>
                    <a href="#" className='hover:font-bold hover:underline'>Home</a>
                    <a href="#" className='hover:font-bold hover:underline'>Your tasks</a>
                </div>
            
        </nav>
    )
}

export default Navbar1