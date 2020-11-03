import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../apiManager/CategoryApi";
import { useParams, useHistory } from "react-router";
import {BookContext} from "../apiManager/BookApi";


const BookEdit = () => {

    const [book, setBook] = useState();
    const {getAllCategories, category} = useContext(CategoryContext);
    const [isLoading, setIsLoading] = useState(false);
    const { getBookById, updateBook } = useContext(BookContext);
    const { id } = useParams();
    const history = useHistory();
    const userId = sessionStorage.getItem("id");


    const handleFieldChange = evt => {
        const stateToChange = { ...book};
        stateToChange[evt.target.id] = evt.target.value;
        setBook(stateToChange);
        
       
    }


    const update = evt => {
        evt.preventDefault();
        if(book.category == "NA" || book.category == null || book.details == "" ||
        book.bookLink == "" || book.bookName == ""){
            window.alert("Must input a name");
        }
        
        else {
        setIsLoading(true);
        //===============MAKE SURE TO ADD USERID TO THE OBJECT
        const newBook = {
            id: book.id,
            bookName: book.bookName,
            userId: parseInt(userId),
            bookLink: book.bookLink,
            details: book.details,
            categoryId: parseInt(book.category)
        }
        console.log(newBook)
            updateBook(newBook).then(() => {
                history.push("/book")
            });
        }
    }

    useEffect(()=> {
        getAllCategories(userId);

        getBookById(parseInt(id), userId).then(setBook);
    }, [])



if (!book) {
    return null;
}


    return (
        <>
            <div className="container pt-5">
                <div className="card col-md12">
                    <h3 className="mt-3 text-primary text-center card-title">Update Book</h3>
                    <form className="mt-5 card-body">
                        <div className="form-group">
                            <label htmlFor="Name">Book Name</label>
                            <input value={book.bookName} className="form-control" id="bookName" onChange={handleFieldChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <br />
                            <select name="category" id="category" onChange={handleFieldChange}>
                                <option value="NA">Select a value</option>
    {category.map(element => <option key={element.id} value={element.id}>{element.name}</option>)}
                            </select>
                            
                        </div>

                        <div className="form-group">
                            <label htmlFor="Link">Insert Book Link</label>
                            <input value={book.bookLink} className="form-control" id="bookLink" onChange={handleFieldChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="bookDetails">Book Details</label>
                            <textarea value={book.details} rows="5" className="form-control" id="details" onChange={handleFieldChange}/>
                        </div>


                        <div className="form-group">
                            <input type="button" value="Add" className="btn btn-primary btn-block" onClick={update}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default BookEdit;

