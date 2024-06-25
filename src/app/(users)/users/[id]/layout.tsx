import React from 'react';
import type {Metadata} from "next";
import {userService} from "@/services/users.api.service";


export const generateMetadata= async ({params}:{params:{id: string}}) : Promise<Metadata> =>{
    let user = await userService.getUserById(params.id)
    return {title:`${user?.name}`}
}

const UserLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default UserLayout;