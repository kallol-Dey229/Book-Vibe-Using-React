import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { bookId: bookParamsId } = useParams();
    const books = useLoaderData();
    const expectedBook = books.find(book => book.bookId === Number(bookParamsId));
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = expectedBook;
    console.log(bookId);
    return (
        <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8">
            <figure className='w-full flex items-center justify-center bg-gray-100 rounded-xl'>
                <img
                    src={image}
                    alt="Album"
                    className='h-100 ' />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <h2 className="card-title">By: {author}</h2>
                <p className='py-2 border-y'>{category}</p>
                <p>Review: {review}</p>
                <div className='flex items-center gap-2'>
                    {
                    tags.map((tag, index) => <div key={index} className="badge badge-success text-white">{tag}</div>)
                    }
                </div>
                <div className="border-t space-y-3">
                    <div className='flex justify-between items-center gap-2'>
                        <span>Number of pages: <span>{totalPages}</span></span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Publisher: <span>{publisher}</span></span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Rating: <span>{rating}</span></span>
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <span>Year of publish: <span>{yearOfPublishing}</span></span>
                    </div>

                    <div className='flex items-center gap-2'>
                    <button className="btn btn-ghost btn-outline">Read</button>
                    <button className="btn btn-accent">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;