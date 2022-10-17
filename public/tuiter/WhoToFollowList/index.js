import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    let str = `
        <div class="list-group">
             <a href="#" class="list-group-item list-group-item-action">
                 <div class="fw-bolder">
                 Who to follow </div></a>     
`;
    for(var i=0; i<who.length; i++) {
        str += WhoToFollowListItem(who[i]);
    }
    str += "</div>";
    return str;
}

export default WhoToFollowList;