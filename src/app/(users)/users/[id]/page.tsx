import React from 'react';
import {userService} from "@/services/users.api.service";

const UserPage = async ({params}:{params: { id : string }}) => {
    let user = await userService.getUserById(params.id);
    return (
        <div>
            Info about {user?.name}
            <hr/>
            Id: {user?.id}
            <br/>
            Username: {user?.username}
        </div>
    );
};

export default UserPage;