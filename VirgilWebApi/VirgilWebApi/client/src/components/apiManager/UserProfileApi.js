import React, { useState, createContext } from "react";
import {useHistory} from "react-router-dom";

export const UserProfileContext = createContext();


const UserProfileManager = (props) => {
    const history = useHistory();

    const userProfile = sessionStorage.getItem("userProfile");
    const [profile, setProfile] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(userProfile != null); 
    
const apiUrl = "/api/UserLogIn";

    const getUserProfile = (name) => {
        
        return fetch(`${apiUrl}/${name}`, {
            method: "GET",
            headers : {
                'Content-Type': 'application/json'
            },
            
        }
           )
         .then(result => result.json())
        .then((data) => {
           
           setProfile(data);
           if(data.userName != null) {
           sessionStorage.setItem("userName", JSON.stringify(data));
           setIsLoggedIn(true);
           console.log(isLoggedIn);
           }
           else {
               alert ("Invalid username")
           }
           
        }).then(() => {history.push("/"); console.log(isLoggedIn); })
    
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        getUserProfile(profile.username);
    }

    const logOut = () => {
        setIsLoggedIn(false);
        sessionStorage.clear();
    }

    return (
        <UserProfileContext.Provider value={{profile, setProfile, loginSubmit, isLoggedIn, logOut, setIsLoggedIn, getUserProfile}}>
            {props.children}
        </UserProfileContext.Provider>
    )

}


export default UserProfileManager;