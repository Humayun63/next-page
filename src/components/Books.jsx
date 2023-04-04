import React from 'react';
import Loading from './Loading';
import { useLoaderData, useNavigation } from 'react-router-dom';

const Books = () => {
    const {books} = useLoaderData();
    const navigation = useNavigation()
    console.log(books, navigation.state);
    if(navigation.state === 'loading') {
        return <Loading></Loading>
    }
    return (
        <div>
            
            Books
        </div>
    );
};

export default Books;