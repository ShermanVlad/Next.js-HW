import {IPost} from "../../types";

const baseUrl: string='https://jsonplaceholder.typicode.com'

const postUrls={
    postsBaseUrl: '/posts',
    allPOsts: () => baseUrl + postUrls.postsBaseUrl,
    singlePost: (id: number | string)=> baseUrl + postUrls.postsBaseUrl+'/'+ id
}

export const postService={
    getAllPosts: async (): Promise<IPost[]> => {
        return await fetch(postUrls.allPOsts())
            .then(users => users.json())
    },

    getPostById: async (id: number | string):Promise<IPost | null>=>{
        return await fetch(postUrls.singlePost(id))
            .then(user=>user.json())
    }
}
