import React, { useContext, useEffect, useState } from "react";
import {UserProfileContext} from "../apiManager/UserProfileApi";




const Register = () => {


        const [userAccount, setUserAccount] = useState([]);
        const {profile, checkUser, addUser} = useContext(UserProfileContext);
        const [isLoading, setIsLoading] = useState(false);

        

        const handleFieldChange = evt => {
            const stateToChange = { ...userAccount};
            stateToChange[evt.target.id] = evt.target.value;
            setUserAccount(stateToChange);
        }



        const newUser = evt => {
            evt.preventDefault();
            console.log(userAccount)
        
            
            if(userAccount.Name == ""){
                window.alert("Must input a name");
            }
            else {
                checkUser(userAccount.Name).then((data) => {
                    console.log(data.userName)
                    if(data.userName == null) {
                        addUser(userAccount).then(() => {

                    // window.location.href = "/"
                });
                    }
                    else {
                        alert("username taken")
                    }
                })
            }
                
            
        }


    return (
           <div className="container pt-5">
                <div className="card col-md12">
                    <h3 className="mt-3 text-primary text-center card-title">Register</h3>
                    <form className="mt-5 card-body">
                        <div className="form-group">
                            <input className="form-control" id="Name" onChange={handleFieldChange}/>
                        </div>
                        <div className="form-group">
                            <input type="button" value="Add" className="btn btn-primary btn-block" onClick={newUser}/>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default Register;