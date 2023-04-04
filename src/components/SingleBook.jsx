import React from 'react';
import { Link } from 'react-router-dom';

const SingleBook = ({ book }) => {
    const { image, isbn13, title, subtitle } = book;
    return (
        <Link to={`/books/${isbn13}`}>
            <div className='overflow-hidden relative bg-white rounded-md shadow hover:shadow-2xl mb-4 transition duration-200 transform hover:-translate-y-2'>
                <img src={image} alt="Book Image" className='cursor-pointer object-cover w-full' />
                <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 p-4 absolute inset-0 transition duration-200 flex flex-col justify-center items-center'>
                    <h2 className='text-xl font-medium text-slate-300'>{title}</h2>
                    <p className='text-slate-400 mt-3'>{subtitle.substring(0, 100)}</p>
                </div>
            </div>
        </Link>
    );
};

export default SingleBook;