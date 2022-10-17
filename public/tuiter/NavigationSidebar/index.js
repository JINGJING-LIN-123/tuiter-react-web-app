const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="#">
       <i class="fab fa-twitter"></i></a>
                 <div class = "list-group-item list-group-item-action ${active==='home'? 'active' : ''}" style="cursor: pointer" onclick="window.location='../HomeScreen/index.html'">
                      <div class="list-group" >
                          <div class="row">
                              <div class="col-2">
                                  <i class="fa-solid fa-house-chimney"></i>
                              </div>
                              <div class="col-10 d-none d-xl-block">
                                  <a> Home </a>
                              </div>
                          </div>
                      </div>
                 </div>
                 <div class = "list-group-item list-group-item-action ${active==='explore'? 'active' : ''}" style="cursor: pointer" onclick="window.location='../explore/index.html'">
                      <div class="list-group" >
                          <div class="row">
                              <div class="col-2">
                                  <i class="fa-light fa-hashtag"></i>
                              </div>
                              <div class="col-10 d-none d-xl-block">
                                  <a> Explore </a>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div href="#" class = "list-group-item list-group-item-action">
                      <div class="list-group">
                          <div class="row">
                              <div class="col-2">
                                  <i class="fa-regular fa-bell"></i>
                              </div>
                              <div class="col-10 d-none d-xl-block">
                                  <a> Notifications </a>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div href="#" class = "list-group-item list-group-item-action">
                      <div class="list-group">
                          <div class="row">
                              <div class="col-2">
                                  <i class="fa-solid fa-envelope"></i>
                              </div>
                              <div class="col-10 d-none d-xl-block">
                                  <a> Messages </a>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div href="#" class = "list-group-item list-group-item-action">
                      <div class="list-group">
                          <div class="row">
                              <div class="col-2">
                                  <i class="fa-solid fa-bookmark"></i>
                              </div>
                              <div class="col-10 d-none d-xl-block">
                                  <a> Bookmarks </a>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div href="#" class = "list-group-item list-group-item-action">
                      <div class="list-group">
                          <div class="row">
                              <div class="col-2">
                                  <i class="fa-solid fa-list"></i>
                              </div>
                              <div class="col-10 d-none d-xl-block">
                                  <a> Lists </a>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div href="#" class = "list-group-item list-group-item-action">
                      <div class="list-group">
                          <div class="row">
                              <div class="col-2">
                                  <i class="fa-solid fa-user"></i>
                              </div>
                              <div class="col-10 d-none d-xl-block">
                                  <a> Profile </a>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div href="#" class = "list-group-item list-group-item-action">
                      <div class="list-group">
                          <div class="row">
                              <div class="col-2">
                                  <i class="fa-solid fa-comment-dots"></i>
                              </div>
                              <div class="col-10 d-none d-xl-block">
                                  <a> More </a>
                              </div>
                          </div>
                      </div>
                  </div> 
       
       
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;


