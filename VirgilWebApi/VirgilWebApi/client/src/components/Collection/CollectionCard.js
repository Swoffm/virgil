import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";


const CollectionCard = props => {

    const history = useHistory();

    const Edit = () => {
        history.push(`collection/${props.collection.id}/edit`)
    }

    const Details = () => {
        history.push(`collection/${props.collection.id}/detail`)
    }



return (
    <tr>
    <td>{props.collection.name}</td>
    <td></td>
    <td>
        <Button onClick={() => { props.delete(props.collection.id) }} color="danger">Delete</Button>
        <Button color="warning" onClick={Edit}>Edit</Button>
        <Button color="info" onClick={Details}>Details</Button>
    </td>
</tr>
)
}

export default CollectionCard;