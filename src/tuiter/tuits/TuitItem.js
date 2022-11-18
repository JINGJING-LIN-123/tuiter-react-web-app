import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
//import {deleteTuit} from "../tuits/tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";


const TuitItem = (
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
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        //dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 px-0">
                    <img src={`${tuit.image}`} className="img-fluid rounded-circle" width="100%"/>
                </div>

                <div className="col-11">
                    <div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <div className="row">
                            <div className="col-11">
                                <span className="fw-bolder"> {tuit.userName} </span>
                                <i className="fa-sharp fa-solid fa-circle-check"></i>
                                <span className="text-secondary">{tuit.handle} {tuit.time}</span>
                            </div>

                            <div className="col-1">
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                    </div>

                    <div className="py-0 pb-2" dangerouslySetInnerHTML={{__html: tuit.tuit}}/>


                    <TuitStats tuit={tuit}/>




                </div>

            </div>
        </li>
    );
};
export default TuitItem;