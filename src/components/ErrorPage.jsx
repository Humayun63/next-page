import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import {FaceFrownIcon} from '@heroicons/react/24/solid'

const ErrorPage = () => {
    const {error, status} = useRouteError();
    console.log(error, status);
    return (
        <div className='h-[100vh] w-full flex items-center justify-center flex-col'>
            <FaceFrownIcon className='w-36 text-yellow-400'></FaceFrownIcon>
            <h1 className='text-yellow-500 text-6xl font-bold'>{status || 404}</h1>
            <h2 className='text-2xl my-4 font-bold text-orange-700'>{error?.message}</h2>
            <button className='btn bg-blue-500 px-4 py-2 text-white font-medium rounded-md'> <Link to='/'>Go Back To Home</Link> </button>
        </div>
    );
};

export default ErrorPage;