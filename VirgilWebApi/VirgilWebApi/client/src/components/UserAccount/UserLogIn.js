import React, {useContext} from 'react';
import {UserProfileContext} from "../apiManager/UserProfileApi";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from "react-router-dom";

const UserLogIn = () => {
    const {userProfile, getUserProfile} = useContext(UserProfileContext);

    

    return (
        <Form className="container">
        <fieldset>
          <FormGroup>
            <Label for="email">Username</Label>
            <Input id="email" type="text"  />
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