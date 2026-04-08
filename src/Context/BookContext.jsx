import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const bookContext = createContext();

const BookContext = ({ children }) => {

    const [storedBooks, setStoredBook] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        //1:store book id
        //2.where to store
        //3.array or collection
        //4.If book is already exist then show an alert
        //5.if not then add the the book in the array 

        const isExistBook = storedBooks.find(book => book.bookId == currentBook.bookId);

        if (isExistBook) {
            toast.error('Book is Already Exist')
        }
        else {
            setStoredBook([...storedBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added to read list`)
        }
    }
    const handleWishList = (currentBook) => {
        //1:store book id
        //2.where to store
        //3.array or collection
        //4.If book is already exist then show an alert
        //5.if not then add the the book in the array 

        const isExistInReadList = storedBooks.find((book) => book.bookId == currentBook.bookId);

        if(isExistInReadList){
            toast.error('Already is in Read List');
            return;
        }

        const isExistBook = wishList.find(book => book.bookId == currentBook.bookId);

        if (isExistBook) {
            toast.error('Book is Already Exist')
        }
        else {
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to wish list`)
        }
    }


    const data = { storedBooks, setStoredBook, handleMarkAsRead, wishList, setWishList, handleWishList }
    return <bookContext.Provider value={data}>
        {children}
    </bookContext.Provider>
};

export default BookContext;