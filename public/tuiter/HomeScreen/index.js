import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../explore/PostSummaryList/index.js";
import PostList from "../PostList/index.js";

function homeComponent() {
    $('#wd-home').append(`
       <h2>Home</h2>
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
   <!--<h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar('home')}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 text-white">
       ${PostList()} 
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
    <!--h3>WhoToFollowList </h3>-->
    <!--在explore/index里 call WhoToFollowList/index.js-->
    ${PostSummaryList()} 
   </div>
  </div>
   `);
}
$(homeComponent);
