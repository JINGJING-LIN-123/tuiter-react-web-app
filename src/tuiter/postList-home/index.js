import React from "react";
import PostArray from './post.json';
import PostListItem from "./PostItem.js";

const PostListHome = () => {
    return(
        <ul className="list-group">
            {
                PostArray.map(post =>
                    <PostListItem
                        key={post._id}
                        post={post}/>
                )
            }
        </ul>
    );
};

export default PostListHome;


