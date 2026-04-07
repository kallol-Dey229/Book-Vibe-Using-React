import React, { createContext, useState } from 'react';

export const bookContext = createContext();

const BookContext = ({ children }) => {

    const [storedBooks, setStoredBook] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        //1:store book id
        //2.where to store
        //3.array or collection
        //4.If book is already exist then show an alert
        //5.if not then add the the book in the array 

        const isExistBook = storedBooks.find(book => book.bookId == currentBook.bookId);

        if (isExistBook) {
            alert('Book is Already Exist')
        }
        else {
            setStoredBook([...storedBooks, currentBook]);
            alert(`${currentBook.bookName} is added to list`)
        }
    }


    const data = { storedBooks, setStoredBook, handleMarkAsRead }
    return <bookContext.Provider value={data}>
        {children}
    </bookContext.Provider>
};

export default BookContext;