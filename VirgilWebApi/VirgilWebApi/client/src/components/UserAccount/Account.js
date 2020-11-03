import React, { useContext, useEffect, useState } from "react";
import { UserProfileContext } from "../apiManager/UserProfileApi";
import { Button } from "reactstrap";



const Account = () => {

    const { deleteUser } = useContext(UserProfileContext);
    const username = sessionStorage.getItem("username");
    const userId = sessionStorage.getItem("id");



    const deleteAccount = () => {
        if (window.confirm("Are you sure?")) {
            deleteUser(userId).then(() => {
                window.location.href = "/login";
                sessionStorage.clear();
            });
        }
    }



    return (
        <>
            <div className="container pt-5">
                <div className="card col-md12">
                    <h3 className="mt-3 text-primary text-center card-title">{username}</h3>
                    <form className="mt-5 card-body">


                        <div className="form-group">
                            <Button onClick={deleteAccount} color="danger">Delete</Button>

                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Account;