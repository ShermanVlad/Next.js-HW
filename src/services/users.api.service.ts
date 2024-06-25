import {IUser} from "../../types";

const baseUrl: string='https://jsonplaceholder.typicode.com'

const userUrls={
    userBaseUrl: '/users',
    allUsers: () => baseUrl + userUrls.userBaseUrl,
    singleUser: (id: number | string)=> baseUrl + userUrls.userBaseUrl+'/'+ id
}

export const userService={
    getAllUsers: async (): Promise<IUser[]> => {
        return await fetch(userUrls.allUsers())
            .then(users => users.json())
    },

    getUserById: async (id: number | string):Promise<IUser | null>=>{
        return await fetch(userUrls.singleUser(id))
            .then(user=>user.json())
}
}
