import React from 'react';
import Loading from './Loading';
import SingleBook from './SingleBook'
import { useLoaderData, useNavigation } from 'react-router-dom';

const Books = () => {
    const {books} = useLoaderData();
    const navigation = useNavigation()
    if(navigation.state === 'loading') {
        return <Loading></Loading>
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                books.map(book =>(
                    <SingleBook key={book.isbn13} book={book}/>
                ))
            }
           
        </div>
    );
};

export default Books;