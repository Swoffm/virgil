import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";


const CategoryCard = (props) => {
    const history = useHistory();
  
  
    const Edit = () => {
      history.push(`category/${props.category.id}/edit`)
    }

    

    
  
    return (
      <tr>
        <td>{props.category.name}</td>
        <td>
         
          {props.category.name.toLowerCase() !== "other" ? <Button onClick={() => { props.delete(props.category.id) }} color="danger">Delete</Button> : null}
          {props.category.name.toLowerCase() !== "other" ?  <Button color="warning" onClick={Edit}>Edit</Button> : null}
        </td>
      </tr>
    )
  }
  
  export default CategoryCard;