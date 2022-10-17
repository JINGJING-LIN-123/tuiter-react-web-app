const PostSummaryItem = (post) => {
    return(`
    
     <li class="list-group-item">
                      <div class="row ps-1 pe-2">
                      <div class="col-10 col-sm-9">
                          <div class="text-secondary">
                          ${post.topic}
                          </div>
                          <div class="fw-bolder">
                          ${post.userName}
                              <i class="fa-sharp fa-solid fa-circle-check"></i>
                              <span class="text-secondary">-${post.time}</span>
                          </div>
                          <div class="fw-bolder">
                          ${post.title}
                          </div>
                      </div>
                      <div class="col-2 col-sm-3">
                          <img class="img-fluid rounded-3" src=${post.image} width="100%" >
                       </div>
                      </div>
                   </li>

 `);
}
export default PostSummaryItem;









