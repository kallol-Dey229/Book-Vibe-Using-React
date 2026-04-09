import { toast } from "react-toastify";

const getAllReadListFromLocalDB = () => {
  const allReadList = localStorage.getItem("readList");
    if (allReadList) {
        return JSON.parse(allReadList);
    }

    return [];
}

const addReadListToLocalDB = (book) => {
  const allBooks = getAllReadListFromLocalDB();
  const isExistBook = allBooks.find((b) => b.bookId === book.bookId);

    if (!isExistBook) {
        allBooks.push(book);
        localStorage.setItem("readList", JSON.stringify(allBooks));
        toast.success(`${book.bookName} is added to LocalDB`)
    }
}

const getAllWishListFromLocalDB = () => {
    const allWishList = localStorage.getItem("wishList");
    if (allWishList) {
        return JSON.parse(allWishList);
    } 
    return [];

}

const addWishListToLocalDB = (book) => {
    const allBooks = getAllWishListFromLocalDB();
    const isExistBook = allBooks.find((b) => b.bookId === book.bookId);
    if (!isExistBook) {
        allBooks.push(book);
        localStorage.setItem("wishList", JSON.stringify(allBooks));
        toast.success(`${book.bookName} is added to LocalDB`)
    }
}


export { getAllReadListFromLocalDB, addReadListToLocalDB, getAllWishListFromLocalDB, addWishListToLocalDB };
