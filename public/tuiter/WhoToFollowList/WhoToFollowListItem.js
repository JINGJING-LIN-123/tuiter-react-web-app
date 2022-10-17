const WhoToFollowListItem = (who) => {
    return(`
    
    <a href="#" class="list-group-item list-group-item-action">
                      <div class="list-group">

                              <div class="row px-lg-3">
                                  <div class="col-2 text-center p-0 col-xl-3 col-xxl-3">
                                      <div class ="d-block d-xl-none d-xxl-none">
                                          <img src=${who.avatarIcon} class="img-fluid rounded-circle" style="background-color: transparent" width="100%">
                                      </div>
                                      <div class ="d-none d-xl-block">
                                          <img src=${who.avatarIcon} class="img-fluid rounded-circle " style="background-color: transparent" width="70%">
                                      </div>
                                  </div>
                                  <div class="col-7 px-0 col-lg-8 col-xl-6 col-xxl-6" style="z-index: 2">
                                      <div class="fw-bolder">
                                          <div>
                                          ${who.userName}
                                              <i class="fa-sharp fa-solid fa-circle-check"></i>
                                          </div>
                                      </div>
                                      <div class="col">
                                          @${who.handle}
                                  </div>
                                  </div>
                                  <div class="d-lg-none d-xl-block col-3  ps-0 " style="z-index: 1" >
                                      <button type="button" class="btn btn-primary mt-2 rounded-pill" width="100%" >Follow</button>
                                  </div>
                                  <div class="d-none d-lg-block d-xl-none  col-lg-2 ps-0 position-absolute" style="left:68%; z-index: 1" >
                                      <button type="button" class="btn btn-primary mt-2 rounded-pill" width="100%" >Follow</button>
                                  </div>
                              </div>
                      </div>
                  </a>


 `);
}
export default WhoToFollowListItem;


