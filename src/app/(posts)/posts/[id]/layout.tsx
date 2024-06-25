import React from 'react';
import {Metadata} from "next";
import {postService} from "@/services/posts.api.service";

export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {
    let post = await postService.getPostById(params.id);
    return {title: `Post: ${post?.id}`}
}

const PostLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default PostLayout;