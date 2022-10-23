import React from "react";
import './postList-home.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment,faRetweet,faArrowUpFromBracket,faHeart} from '@fortawesome/free-solid-svg-icons'


const PostListItem = (
    {
        post = { avatarIcon: 'nasa.png', userName: 'Elon Musk', handle: 'NASA', time: '23h',title: 'Amazing show about <span class=\'text-primary\'>@Inspiration4x</span> mission!',
            image: "../../images/spacex-inspiration4-img.jpeg",
            cite: {
                title: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                content: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the frist all-civilian orbital space ...\n",
                link: "netflix.com",
            },
            comment: "4.2K",
            retweet: "3.5K",
            like: "37.5K"}
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 px-0">
                    <img src={`${post.avatarIcon}`} className="img-fluid rounded-circle" width="100%"/>
                </div>

                <div className="col-11">
                    <div>
                        <div className="row">
                            <div className="col-11">
                                <span className="fw-bolder"> {post.userName} </span>
                                <i className="fa-sharp fa-solid fa-circle-check"></i>
                                <span className="text-secondary">{post.handle} {post.time}</span>
                            </div>
                            <div className="col-1">
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                    </div>

                    <div className="py-0 pb-2" dangerouslySetInnerHTML={{__html: post.title}}/>



        <div className={post.cite? "list-group wd-round_corner" : "d-none"}>
            <div className="list-group-item p-0 " >
                <img src={`${post.image}`} className="img-fluid wd-round_corner_top" width="100%"/>
            </div>
            <div className="list-group-item px-2 wd-post-border-top">
                <div className="wd-post-font-size2">
                {post.cite? post.cite.title : ''}
                </div>
                <div className="text-secondary">
                {post.cite? post.cite.content : ''}
                </div>
                <div className="text-secondary wd-post-font-size" >
                <i class="fa-solid fa-link"></i>
                {post.cite? post.cite.link : ''}
                </div>
            </div>
        </div>
                    <div className={post.cite ? "d-none" : "d-block"}>
                            <img src={`${post.image}`} className="img-fluid rounded-3" width="100%"/>
                    </div>


                    <div className="pt-2">
                        <div className="row">
                            <div className="col-3 text-secondary">
                                <FontAwesomeIcon icon={faComment} />
                                <span className="px-2">{post.comment}</span>
                            </div>
                            <div className="col-3 text-secondary">
                                <FontAwesomeIcon icon={faRetweet} />
                                <span className="px-2">{post.retweet}</span>
                            </div>
                            <div className="col-3 text-secondary">
                                <FontAwesomeIcon icon={faHeart} />
                                <span className="px-2">{post.like}</span>
                            </div>
                            <div className="col-3 text-secondary">
                                <FontAwesomeIcon icon={faArrowUpFromBracket} />
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </li>
    );
};
export default PostListItem;














