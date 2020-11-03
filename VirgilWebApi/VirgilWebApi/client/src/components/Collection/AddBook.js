import { useParams, useHistory } from "react-router";
import React, { useContext, useState, useEffect } from 'react';
import { BookContext } from "../apiManager/BookApi";
import {CollectionContext} from "../apiManager/CollectionApi";


const AddBook = () => {

    const { getAllBooks, book } = useContext(BookContext);
    const { addBookToCollection } = useContext(CollectionContext);
    const [collectionBook, setCollectionBook] = useState([]);
    const userId = sessionStorage.getItem("id");
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...collectionBook};
        stateToChange[evt.target.id] = evt.target.value;
        setCollectionBook(stateToChange);
    }


    const addBook = (evt) => {
        evt.preventDefault();
        if(collectionBook == "NA" || collectionBook == NaN) {
            window.alert("Must select a name");
        }

        else {
        setIsLoading(true);

            addBookToCollection(parseInt(collectionBook.book), (id)).then(() => {
                window.location.href = `/collection/${id}/detail`;
            })
        }
    }
    

    useEffect(() => {
        getAllBooks(userId);

    }, [])



    return (
        <>
            <div className="container pt-5">
                <div className="card col-md12">
                    <h3 className="mt-3 text-primary text-center card-title">Add a Book</h3>
                    <form className="mt-5 card-body">
                        <div className="form-group">
                            <label htmlFor="book">Book</label>
                            <br />
                            <select name="book" id="book" onChange={handleFieldChange}>
                                <option value="NA">Select a value</option>
                                {book.map(element => <option key={element.id} value={element.id}>{element.bookName}</option>)}
                            </select>

                        </div>



                        <div className="form-group">
                            <input type="button" value="Add" className="btn btn-primary btn-block" onClick={addBook} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default AddBook;