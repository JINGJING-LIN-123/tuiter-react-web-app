import PostSummaryList from "./PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`

<div class="row">
                  <div class="col-11">
              <div class="position-relative">
              <input class="ps-5 form-control p-1 rounded-pill" width="90%" placeholder="Search Tuiter"/>
                 <span class="position-absolute wd-search-icon" width="100%"> <i class="fa fa-search"></i></span>
              </div>
                  </div>
                  <div class="col-1">
                      <div class="wd-search-gear wd-icon-gear"><i class="fa-solid fa-gear"=></i></div>
                  </div>
              </div>
              
              <ul class="nav nav-tabs mt-2 mb-2">
                  <li class="nav-item">
                      <a class="nav-link active" href="#">For you</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Trending</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">News</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">Sports</a>
                  </li>
                  <li class="nav-item d-none d-md-block">
                      <a class="nav-link" href="#" tabindex="-1">Entertainment</a>
                  </li>
              </ul>

              <div class="position-relative">
              <img src="../../images/starship.jpeg" width="100%">
              <div class="position-absolute bottom-0 left-0 text-black" style="color: black"><h3>SpaceX's Starship</h3></div>
              </div>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
