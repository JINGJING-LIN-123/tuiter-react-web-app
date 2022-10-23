import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js"
const PostSummaryList = () => {
    let str = `
        <ul class="list-group">  
`;
    for(var i=0; i<post.length; i++) {
        str += PostSummaryItem(post[i]);
    }
    str += '</ul>';
    return str;
}

export default PostSummaryList;