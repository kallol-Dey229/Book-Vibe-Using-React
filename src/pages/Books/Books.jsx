import React, { useContext } from 'react';
import { bookContext } from '../../Context/BookContext';

const Books = () => {
    const { storedBooks } = useContext(bookContext);
    return (
        <div>
            <h2>Books</h2>
        </div>
    );
};

export default Books;