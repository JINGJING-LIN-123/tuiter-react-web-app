import {Link}
    from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar/index.js";
import WhoToFollowList from "./who-to-follow-list/index.js";
import PostSummaryList from "./post-summary-list/index.js";
import ExploreComponent from "./explore/index.js";
import {Routes, Route} from "react-router";
import HomeComponent from "./home/index.js";
import whoReducer
    from "./reducers/who-reducer";
import profileReducer
    from "./profile/profile-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile";
import EditProfileComponent from "./EditProfile";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer}});



function Tuiter() {
    return (
        <Provider store={store}>
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
            <Routes>
                <Route path="home"  element={<HomeComponent/>}/>
                <Route path="explore" element={<ExploreComponent/>}/>
                <Route path="profile" element={<ProfileComponent/>}/>
                <Route path="EditProfile"  element={<EditProfileComponent/>}/>
            </Routes>
             </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <Routes>
                    <Route path="explore" element={<WhoToFollowList/>}/>
                    <Route path="home"  element={<WhoToFollowList/>}/>
                    <Route path="profile"  element={<WhoToFollowList/>}/>
                    <Route path="EditProfile"  element={<WhoToFollowList/>}/>
                </Routes>

            </div>
        </div>
        </Provider>
    );
}

export default Tuiter;