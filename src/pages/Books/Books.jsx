import React, { useContext } from 'react';
import { bookContext } from '../../Context/BookContext';

const Books = () => {
    const { storedBooks, wishList } = useContext(bookContext);
    return (
        <div className='container mx-auto'>
            Read list : {storedBooks.length} <br />
            Wish list : {wishList.length}
        </div>
    );
};

export default Books;