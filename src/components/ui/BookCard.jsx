import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
                            <figure className='p-6'>
                                <img
                                    src={book.image}
                                    alt={book.bookName} className='rounded-xl h-62.5' />
                            </figure>
                            <div className="card-body">
                                    <div className='flex items-center gap-2'>
                                        {book.tags.map((tag,index) => <div key={index} className="badge badge-success text-white">{tag}</div>) }
                                    </div>
                                <h2 className="card-title font-bold text-2xl">
                                    {book.bookName}
                                </h2>
                                <p className='font-semibold text-lg'>{book.author}</p>
                                
                                <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
                                    <div className="font-semibold">{book.category}</div>
                                    <div className="flex justify-center items-center gap-1">{book.rating}<FaRegStar /></div>
                                </div>
                            </div>
                        </Link>
    );
};

export default BookCard;