import React from 'react';
import Lottie from 'lottie-react'
import bookLover from '../assets/bookLover.json'
import { Link } from 'react-router-dom';
import {ShoppingCartIcon} from '@heroicons/react/24/solid'
const Home = () => {
    return (
        <div className='flex justify-between items-center px-0 flex-col gap-6 md:flex-row'>
            <div className='md:w-1/2 p-4'>
                <span className='font-medium text-xs text-slate-600 uppercase bg-yellow-300 py-1 px-4 rounded-xl'>on sale!</span>
                <h1 className='font-bold text-4xl my-4 tracking-wide ' >A reader lives a <br /> thousand lives <span className='text-blue-600'>before he dies</span></h1>
                <p className='text-lg'>
                    Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren't very new after all. The man who does not read good books is no better than the man who can't.
                </p>
                <button className='btn bg-blue-600 py-2 px-4 rounded-md text-white font-semibold tracking-wide hover:bg-blue-500 mt-4'><Link to='/books'>
                    Visit Store <ShoppingCartIcon className='w-6 inline'/>
                </Link></button>
                <button className='ms-4 font-medium hover:text-blue-600'>
                    <Link to='/about'>Learn More</Link>
                </button>
            </div>
            <div className=''>
                <Lottie animationData={bookLover} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default Home;