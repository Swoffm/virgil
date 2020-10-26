import React, { useState, useContext, createContext } from "react";

export const UserProfileContext = createContext();


const UserProfileManager = (props) => {
    const [profile, setProfile] = useState([]);
    
    
const apiUrl = "/api/UserLogIn";

    const getUserProfile = (name) => {
        return fetch(`${apiUrl}/${name}`, {
            method: "GET",
            
        }).then((data) => data.json).then(setProfile)
    }

    return (
        <UserProfileContext.Provider value={{profile, getUserProfile}}>
            {props.children}
        </UserProfileContext.Provider>
    )

}


export default UserProfileManager;