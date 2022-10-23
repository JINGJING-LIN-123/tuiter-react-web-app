import NavigationSidebar from "./navigation-sidebar";
import PostList from "../PostList";
import PostSummaryList from "../post-summary-list";

function homeComponent() {
    return(

      <div className="row mt-2">
       <div className="col-2 col-md-2 col-lg-1 col-xl-2">
           <NavigationSidebar active="home"/>
       </div>
       <div className="col-10 col-lg-7 col-xl-6 text-white">
           <PostList/>>
       </div>
       <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 text-white">
        <PostSummaryList/>
       </div>
      </div>

    );
}

export default homeComponent;