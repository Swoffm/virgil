import React, {useContext, useState, useEffect} from 'react';
import { BookContext } from "../apiManager/BookApi";
import { Button } from "reactstrap";
import {Link} from "react-router-dom";
import BookCard from "./BookCard";
import {CategoryContext} from "../apiManager/CategoryApi";



const Book = () => {

const {getAllBooks, deleteBook, book} = useContext(BookContext);
const [userSelect, setUserSelect] = useState();
const {getAllCategories, deleteCategories, category} = useContext(CategoryContext);


const userId = sessionStorage.getItem("id");

const deleteBookFromList = (id) => {

    if(window.confirm("Are you sure?"))
    {
        deleteBook(id).then(() => {
        getAllBooks(parseInt(userId));
      });
    }

  }


  const handleFieldChange = evt => {
    const stateToChange = { ...userSelect };
    stateToChange[evt.target.id] = evt.target.value;
    setUserSelect(stateToChange);
    console.log(userSelect)
};




useEffect(()=> {

getAllBooks(parseInt(userId));
getAllCategories(userId);


}, [])
return (
    <>
    <div className="container">
    <h1>Books</h1>
    <p>
      <Link to="/book/add">
      <Button color="primary">Create</Button>
      </Link>
    </p>
    <select name="name" onClick={handleFieldChange} id="name">
                                <option value="NA">Select a value</option>
    {category.map(element => <option key={element.id} value={element.id}>{element.name}</option>)}
                            </select>
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Book Name</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
      { userSelect !== undefined ? book.map((element) => ( element.categoryId == userSelect.name || userSelect.name == "NA" ? 
           <BookCard key={element.id} delete={deleteBookFromList} book={element} /> 
       
            : null ) ) : book.map((element) => ( <BookCard key={element.id} delete={deleteBookFromList} book={element} /> ))  }
       
      </tbody>
    </table>
  </div>
    </>
)

}

export default Book;