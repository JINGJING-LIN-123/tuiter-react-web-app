import PostItem from "./PostItem.js";
import posts from "./post.js"
const PostList = () => {
    let str = `
        <ul class="list-group">  
`;
    for(var i=0; i<posts.length; i++) {
        str += PostItem(posts[i]);
    }
    str += '</ul>';
    return str;
}

export default PostList;