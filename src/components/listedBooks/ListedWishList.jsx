import React, { useContext, useMemo } from 'react';
import { bookContext } from '../../Context/BookContext';
import BookCard from '../ui/BookCard';

const ListedWishList = ({sortingType}) => {
    const { wishList } = useContext(bookContext);

    const filteredWishList = useMemo(() => {
        let sortedData = [...wishList];
        
        if(sortingType === 'pages'){
            sortedData = sortedData.sort((a,b) => a.totalPages - b.totalPages);
        } else if(sortingType === 'rating'){
            sortedData = sortedData.sort((a,b) => a.rating - b.rating);
        }
        
        return sortedData;
    }, [sortingType, wishList])
    

    if(filteredWishList.length === 0){
        return(
            <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                <h2 className='font-bold text-3xl'>No wish list data found</h2>
            </div>
        )
    }
        return (
            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                        filteredWishList.map((book, index) => <BookCard key={index} book={book}></BookCard>)
                    }
                </div>
            </div>
        );
};

export default ListedWishList;