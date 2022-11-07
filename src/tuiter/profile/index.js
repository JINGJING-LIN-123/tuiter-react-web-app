import React from "react";
import {useSelector} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";


const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile)
    return(
        <div className="row  align-items-center">
            <div className="col-2 ">
                <i className="bi bi-arrow-left wd-padding-leftArrow wd_name-font"></i>
            </div>
            <div className="col-10">
                <div className="row wd_name-font">{profile.firstName} {profile.lastName}</div>
                <div className="row wd-font-secondary wd-padding-top">{profile.tweets} Tweets</div>
            </div>

            <div className="position-relative">
            <img width="100%" className="img-fluid" src={`/images/${profile.bannerPicture}`}/>

            <div className="row">
            <div className="col-8">
                <img width="100%" className="wd-padding-left wd-avatar-size img-fluid rounded-pill position-absolute wd-nudge-up2" src={`/images/${profile.profilePicture}`}/>
            </div>
            <div className="col-4">
                <Link to='/tuiter/EditProfile'>
                <button className="rounded-pill btn btn-outline-dark float-end mt-2 ps-3 pe-3 btn-sm fw-bold">
                    <span className="wd_name-fontButton">Edit profile</span>
                </button>
                </Link>
            </div>
            </div>
        </div>

            <div className="ms-2">
                    <div className="row wd_name-font2 mt-3">{profile.firstName} {profile.lastName}</div>
                    <div className="row wd-font-secondary wd-padding-top">{profile.handle}</div>
                    <div className="row wd-font-secondary wd-padding-top">{profile.website}</div>
                </div>

            <div className="pt-3">
                <span className="wd_name-font3">{profile.bio}</span>
            </div>

            <div className="row  align-items-left pt-2">
                <div className="col-3 ">
                    <i className="bi bi-geo-alt"></i>
                    <span className="wd-font-secondary ps-1">{profile.location}</span>
                </div>
                <div className="col-4 me-2">
                    <i className="bi bi-balloon"></i>
                    <span className="wd-font-secondary ps-1">Born: {profile.dateOfBirth}</span>
                </div>
                <div className="col-4">
                    <i className="bi bi-calendar3"></i>
                    <span className="wd-font-secondary ps-1">Joined {profile.dateJoined}</span>
                </div>
            </div>

            <div className="row  align-items-left pt-2">
                <div className="col-3 ">
                    <span className="wd_name-font4 ps-1">{profile.followingCount}</span>
                    <span className="wd-font-secondary ps-1">Following</span>
                </div>
                <div className="col-3">
                    <span className="wd_name-font4 ps-1">{profile.followersCount}</span>
                    <span className="wd-font-secondary ps-1">Followers</span>
                </div>

            </div>
        </div>

    );
};
export default ProfileComponent;


