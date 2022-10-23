import {Link}
    from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar/index.js";
import WhoToFollowList from "./who-to-follow-list/index.js";
import PostSummaryList from "./post-summary-list/index.js";
import ExploreComponent from "./explore/index.js";
import {Routes, Route} from "react-router";
import HomeComponent from "./home/index.js";


function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
            <Routes>
                <Route path="home"  element={<HomeComponent/>}/>
                <Route path="explore" element={<ExploreComponent/>}/>
            </Routes>
             </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <Routes>
                    <Route path="explore" element={<WhoToFollowList/>}/>
                    <Route path="home"  element={<PostSummaryList/>}/>
                </Routes>

            </div>
        </div>
    );
}

export default Tuiter;