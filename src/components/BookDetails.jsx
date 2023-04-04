import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const {image, url, year, title, desc, rating, publisher, authors, price} = useLoaderData()
    const [fold, setFold] = useState(true);
    console.log();
    return (
        <div className='md:flex justify-between items-center border rounded shadow-xl p-8 mt-4'>
            <img src={image} alt="Book Cover" className=''/>
            <div className='md:w-1/2'>
                <span className='bg-yellow-300 py-1 px-2 rounded-lg uppercase'>brand new</span>
                <h2 className='text-2xl font-medium my-3'>{title}</h2>
                <p>Authors: {authors}</p>
                <p>Publisher: {publisher}</p>
                <p>Year: {year}</p>
                <p>Rating: {rating}</p>
                {
                fold ? 
                <p className='my-4'>{desc.substring(0, 100)} ... <span onClick={()=> setFold(false)} className='cursor-pointer text-blue-500'>Read More</span></p> :
                <p className='my-4'>{desc} <span onClick={()=> setFold(true)} className='cursor-pointer text-blue-500'>Read Less</span></p> 
                }
                <div className='inline-flex items-center gap-3'>
                    
                <button className='btn bg-blue-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-600'><a href={url}>Buy Now</a></button>
                <p className='text-lg font-bold text-slate-600'>Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;