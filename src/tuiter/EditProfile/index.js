import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import {updateProfile} from "../profile/profile-reducer"
import {Link} from "react-router-dom";
import {createTuit, deleteTuit} from "../tuits/tuits-reducer";


const EditProfileComponent = () => {
    const profile = useSelector((state) => state.profile)
    const [bio, setBio] = useState(profile.bio)
    const [firstName, setFirstName] = useState(profile.firstName)
    const [lastName, setLastName] = useState(profile.lastName)
    const [location, setLocation] = useState(profile.location)
    const [website, setWebsite] = useState(profile.website)
    const [birthDate, setBirthDate] = useState(profile.dateOfBirth)
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch();
    const saveClickHandler = () => {
        const newProfile = {
            firstName: firstName,
            lastName: lastName,
            handle: profile.handle,
            profilePicture: profile.profilePicture,
            bannerPicture: profile.bannerPicture,
            tweets: profile.tweets,
            bio: bio,
            website: website,
            location: location,
            dateOfBirth: birthDate,
            dateJoined: profile.dateJoined,
            followingCount: profile.followingCount,
            followersCount: profile.followersCount
        }
        dispatch(updateProfile(newProfile));
    }
    const editDateOfBirth = () => {
        setEdit(true);
    }
    return(
        <div className="row  align-items-center">
            <div className="col-1">
                <Link to='/tuiter/profile' className="wd-link">
                <i className="bi bi-x-lg ms-3 wd_crossIcon"></i>
                </Link>
            </div>
            <div className="col-8">
                <span className="row wd_EditProfile-font ms-2">Edit profile</span>
            </div>
            <div className="col-3 mb-3 pe-4">
                <button className="rounded-pill btn btn-dark float-end" onClick={saveClickHandler}>
                    <span className="wd-saveButton-colr">Save</span>
                </button>
            </div>

            <div className="position-relative">
                <img width="100%" className="img-fluid" src={`/images/${profile.bannerPicture}`}/>
                <i className="bi bi-camera-fill position-absolute wd-nudge-up4 wd-icon-camera-size wd-saveButton-colr"></i>
                <i className="bi bi-x-lg position-absolute wd-nudge-up5 wd-icon-camera-size wd-saveButton-colr"></i>


                <div className="row">
                    <div className="col-8">
                        <img width="100%" className="wd-padding-left wd-avatar-size img-fluid rounded-pill position-absolute wd-nudge-up6" src={`/images/${profile.profilePicture}`}/>
                        <i className="bi bi-camera-fill position-absolute wd-nudge-up3 wd-icon-camera-size wd-saveButton-colr"></i>

                    </div>
                </div>
            </div>
            <div className="mt-5 mb-3 wd-border" >
                <label className="wd-label-font">Name</label>
                <div className="wd-no-border">
                <textarea
                    className = "wd-no-border2"
                    rows="1"
                    value={firstName}
                    onChange={
                    (e) => setFirstName(e.target.value)
                }></textarea>
                    <textarea
                        className = "wd-no-border2"
                        rows="1"
                        value={lastName}
                        onChange={
                            (e) => setLastName(e.target.value)
                        }></textarea>
                </div>
            </div>
            <div className="my-3 wd-border">
                <label className="wd-label-font">Bio</label>
                <textarea
                    className="wd-no-border"
                    value={bio}
                    onChange={
                        (e) => setBio(e.target.value)
                    }></textarea>
            </div>
            <div className="my-3 wd-border">
                <label className="wd-label-font">Location</label>
                <textarea
                    className="wd-no-border"
                    rows="1"
                    value={location}
                    onChange={
                        (e) => setLocation(e.target.value)
                    }></textarea>
            </div>
            <textarea
                className="my-3 py-3"
                rows="1"
                value={website}
                onChange={
                    (e) => setWebsite(e.target.value)
                }></textarea>
            <div className="my-3 px-0">
                <label className="wd-label-font">Birth data</label>
                <i className="bi bi-dot"></i>
                <label className="wd-label" onClick={() => editDateOfBirth()}>Edit</label>
                <div>
                <span className={edit? "d-none":"d-block"}>{birthDate}</span>
                <input
                    className={edit? "wd-no-border d-block": "wd-no-border d-none"}
                    type = "date"
                    value={birthDate}
                    onChange={
                        (e) => setBirthDate(e.target.value)
                    }></input>
                </div>
            </div>
            <div className="my-3 px-0 wd-text-font">
                <span>Switch to Professional</span>
                <i className="bi bi-chevron-right ms-3 float-end"></i>
            </div>
        </div>

    );
};
export default EditProfileComponent;


