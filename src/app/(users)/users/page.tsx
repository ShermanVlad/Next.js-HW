import React from 'react';
import {IUser} from "../../../../types";
import {userService} from "@/services/users.api.service";
import UserComponent from "@/components/UserComponent";

const UsersPage = async () => {
    let allUsers = await userService.getAllUsers()
    return (
        <div>
            <ul>
                {
                    allUsers.map((user: IUser) => (<li key={user.id}><UserComponent user={user}/></li>))
                }
            </ul>
        </div>
    );
};

export default UsersPage;