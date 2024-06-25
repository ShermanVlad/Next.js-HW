import React from 'react';
import {postService} from "@/services/posts.api.service";

const PostPage = async ({params}: { params: { id: string } }) => {
    let post = await postService.getPostById(params.id)
    return (
        <div>
            Info about {post?.title}
            <hr/>
            Id: {post?.id}
            <br/>
            Desc: {post?.body}
        </div>
    );
};

export default PostPage;