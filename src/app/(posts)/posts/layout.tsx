import React from 'react';
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Posts"
};

const PostsLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default PostsLayout;