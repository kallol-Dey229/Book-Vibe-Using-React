import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const bookContext = createContext();

const BookContext = ({ children }) => {

    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        //1:store book id
        //2.where to store
        //3.array or collection
        //4.If book is already exist then show an alert
        //5.if not then add the the book in the array 

        const isExistBook = readList.find(book => book.bookId == currentBook.bookId);

        if (isExistBook) {
            toast.error('Book is Already Exist')
        }
        else {
            setReadList([...readList, currentBook]);
            toast.success(`${currentBook.bookName} is added to read list`)
        }
    }
    const handleWishList = (currentBook) => {
        //1:store book id
        //2.where to store
        //3.array or collection
        //4.If book is already exist then show an alert
        //5.if not then add the the book in the array 

        const isExistInReadList = readList.find((book) => book.bookId == currentBook.bookId);

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


    const data = { readList, setReadList, handleMarkAsRead, wishList, setWishList, handleWishList }
    return <bookContext.Provider value={data}>
        {children}
    </bookContext.Provider>
};

export default BookContext;