import React from 'react';
import Image from 'next/image';

function Navbar() {
    return (
        <main>
            <div className='flex justify-between items-center py-2 px-7 bg-green-400'>
                <div className='w-[70%]'>
                    <ul className='flex flex-row gap-4'>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='w-[30%] flex justify-end'>
                    <div className='rounded-full overflow-hidden'>
                        <Image
                            src="/profile.png"
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Navbar;
