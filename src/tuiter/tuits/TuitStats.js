import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket, faComment, faHeart, faRetweet} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const TuitStats = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "image": "teslaRed.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"

        }
    }
) => {
    return(
        <div className="pt-2">
            <div className="row">
                <div className="col-3 text-secondary">
                    <FontAwesomeIcon icon={faComment} />
                    <span className="px-2">{tuit.replies}</span>
                </div>
                <div className="col-3 text-secondary">
                    <FontAwesomeIcon icon={faRetweet} />
                    <span className="px-2">{tuit.retuits}</span>
                </div>
                <div className="col-3 text-secondary">
                    <FontAwesomeIcon icon={faHeart} color={tuit.liked?"red":"gray"}/>
                    <span className="px-2">{tuit.likes}</span>

                </div>
                <div className="col-3 text-secondary">
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                </div>

            </div>
        </div>
    );
};
export default TuitStats;