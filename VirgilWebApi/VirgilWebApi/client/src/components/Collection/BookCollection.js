import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";


const BookCard = (props) => {
console.log(props.book.col)

    const history = useHistory();

    

    const Details = () => {
        history.push(`/book/${props.book.id}/detail`)
    }

    return (
        <tr>
            <td>{props.book.bookName}</td>
            <td>
               
               <>
                <Button onClick={() => { props.delete(props.book.id) }} color="danger">Delete</Button>
                
                <Button color="info" onClick={Details}>Details</Button>
                </>
    
            </td>
        </tr>
    )
}


export default BookCard;


