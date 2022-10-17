const PostItem = (post) => {
    let str = `
  
  <li class="list-group-item">    
  <div class="row">
    <div class="col-1 px-0">
         <img src=${post.avatarIcon} class="img-fluid rounded-circle" width="100%">
    </div>
    
    <div class="col-11">
        <div>
            <div class="row">
            <div class="col-11">
            <span class="fw-bolder"> ${post.userName} </span> 
            <i class="fa-sharp fa-solid fa-circle-check"></i>
            <span class="text-secondary">${post.handle} ${post.time}</span>
            </div>
            <div class="col-1">
            <i class="fa-solid fa-ellipsis" ></i>
            </div>
            </div>
        </div>
        <div class="py-0 pb-2">
            ${post.title}
        </div>
 `;
    if (post.cite) {
        str += `
        <div class="list-group " style="border:1px solid lightslategray">
            <div class="list-group-item p-0" style="border-bottom: 1px solid lightslategray">
                 <img src=${post.image} class="img-fluid rounded-3" width="100%">
            </div>
            <div class="list-group-item px-2" >
                <div style="font-size: 15px">
                ${post.cite.title}
                </div>
                <div class="text-secondary" style="font-size: 14px">
                ${post.cite.content}
                </div>
                <div class="text-secondary"  style="font-size: 14px">
                <i class="fa-solid fa-link"></i>
                ${post.cite.link}
                </div>
            </div>
        </div>
        `;
    } else {
        str += `
        <div class="list-group-item p-0" style="border-bottom: 1px solid lightslategray">
             <img src=${post.image} class="img-fluid rounded-3" width="100%">
        </div>
        `;
    }
    str += `
        <div class="pt-2">
        <div class="row">
        <div class="col-3 text-secondary">
        <i class="fa-regular fa-comment"></i>
        <span class="px-2">${post.comment}</span>
        </div>
        <div class="col-3 text-secondary">
        <i class="fa-solid fa-retweet"></i>
        <span class="px-2">${post.retweet}</span>
        </div>
        <div class="col-3 text-secondary">
        <i class="fa-regular fa-heart"></i>
        <span class="px-2">${post.like}</span>
        </div>
        <div class="col-3 text-secondary">
        <i class="fa-solid fa-arrow-up-from-bracket"></i>
        </div>
  
       </div>
       </div>
   
    </div>  
    <div class="col-1">
    </div>    
  </div>  
  </li>
    `;
    return str;
}
export default PostItem;