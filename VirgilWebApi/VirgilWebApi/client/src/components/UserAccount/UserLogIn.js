import React, {useContext, useState} from 'react';
import {UserProfileContext} from "../apiManager/UserProfileApi";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useHistory, Link} from "react-router-dom";

const UserLogIn = () => {
    const history = useHistory();
    const {setProfile, loginSubmit, profile} = useContext(UserProfileContext);
    // const [profile, setProfile] = useState();
    
    const handleFieldChange = evt => {
        const stateToChange = { ...profile};
        stateToChange[evt.target.id] = evt.target.value;
        setProfile(stateToChange);
    }
  
   

    return (
        <Form onSubmit={loginSubmit} className="container">
        <fieldset>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input onChange={handleFieldChange} id="username" type="text"  />
          </FormGroup>
          <FormGroup>
            <Button>Login</Button>
          </FormGroup>
          <em>
            Not registered? <Link to="register">Register</Link>
          </em>
        </fieldset>
      </Form>
    )
}



export default UserLogIn;