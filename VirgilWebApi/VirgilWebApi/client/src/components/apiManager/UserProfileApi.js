import React, { useState, createContext } from "react";
import {useHistory} from "react-router-dom";

export const UserProfileContext = createContext();


const UserProfileManager = (props) => {
    const history = useHistory();

    const userProfile = sessionStorage.getItem("userProfile");
    const [profile, setProfile] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(userProfile != null); 
    
const apiUrl = "/api/UserLogIn";

   async function getUserProfile(name) {
        
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
           history.push("/")
           }
           else {
               alert ("Invalid username")
           }
           
        })
    
    }

    return (
        <UserProfileContext.Provider value={{profile, isLoggedIn, getUserProfile}}>
            {props.children}
        </UserProfileContext.Provider>
    )

}


export default UserProfileManager;