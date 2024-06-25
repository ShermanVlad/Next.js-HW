import React, {FC} from 'react';
import {IPost} from "../../types";
import Link from "next/link";

interface IProps{
    post: IPost
}

const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </div>
    );
};

export default PostComponent;