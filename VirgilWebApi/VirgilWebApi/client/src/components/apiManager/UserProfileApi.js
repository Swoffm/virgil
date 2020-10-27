import React, { useState, useContext, createContext } from "react";

export const UserProfileContext = createContext();


const UserProfileManager = (props) => {
    const userProfile = sessionStorage.getItem("userProfile");
    const [profile, setProfile] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(userProfile != null); 
    
const apiUrl = "/api/UserLogIn";

    const getUserProfile = (name) => {
        
        return fetch(`${apiUrl}/${name}`, {
            method: "GET",
            headers : {
                'Content-Type': 'application/json'
            }
        }
           )
         .then(result => result.json())
        .then((data) => {

            console.log(data);
        })
    }

    return (
        <UserProfileContext.Provider value={{profile, isLoggedIn, getUserProfile}}>
            {props.children}
        </UserProfileContext.Provider>
    )

}


export default UserProfileManager;