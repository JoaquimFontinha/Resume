import React from "react"
import './PlayVideo.css'
import { useEffect } from 'react'
import video1 from '../../Assets/video.mp4'
import like from '../../Assets/like.png'
import dislike from '../../Assets/dislike.png'
import share from '../../Assets/share.png'
import save from '../../Assets/save.png'
import jack from '../../Assets/jack.png'
import user_profile from '../../Assets/user_profile.jpg'
import VideoList from '../../Pages/Video/VideoList.js'

const PlayVideo = ({vid, title, views, uploaded, channelname, description, likes, imgyoutubers, Subscribers, description2, description3, commentaire1, photocomm1, likecomm1, commentaire2, photocomm2, likecomm2, commentaire3, photocomm3, likecomm3, commentaire4, photocomm4, likecomm4, commentaire5, photocomm5, likecomm5, commentaire6, photocomm6, likecomm6, nomcomm1, nomcomm2, nomcomm3, nomcomm4, nomcomm5, nomcomm6 }) => {

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

    return (
        <div className='play-video'>
            <video src={vid}controls autoPlay muted></video>
            <h3>{title}</h3>
            <div className='play-video-info'>
                <p>{views} Views &bull; {uploaded}</p>
                <div>
                    <span><img src={like} alt=""/>{likes}</span>
                    <span><img src={dislike} alt=""/>0</span>
                    <span><img src={share} alt=""/>Share</span>
                    <span><img src={save} alt=""/>Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={imgyoutubers} alt=""/>
                <div>
                    <p>{channelname}</p>
                    <span>{Subscribers} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{description}</p>
                <p>{description2}</p>
                <p>{description3}</p>
                <hr />
                <h4>6 Comments</h4>
                <div className="comment">
                    <img src={photocomm1} alt=""/>
                    <div>
                        <h3>{nomcomm1} <span>1 day ago</span></h3>
                        <p>{commentaire1}</p>
                        <div className="comment-actions">
                            <img src={like} alt=""/>
                            <span>{likecomm1}</span>
                            <img src={dislike} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={photocomm2} alt=""/>
                    <div>
                        <h3>{nomcomm2} <span>1 day ago</span></h3>
                        <p>{commentaire2}</p>
                        <div className="comment-actions">
                            <img src={like} alt=""/>
                            <span>{likecomm2}</span>
                            <img src={dislike} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={photocomm3} alt=""/>
                    <div>
                        <h3>{nomcomm3} <span>1 day ago</span></h3>
                        <p>{commentaire3}</p>
                        <div className="comment-actions">
                            <img src={like} alt=""/>
                            <span>{likecomm3}</span>
                            <img src={dislike} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={photocomm4} alt=""/>
                    <div>
                        <h3>{nomcomm4} <span>1 day ago</span></h3>
                        <p>{commentaire4}</p>
                        <div className="comment-actions">
                            <img src={like} alt=""/>
                            <span>{likecomm4}</span>
                            <img src={dislike} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={photocomm5} alt=""/>
                    <div>
                        <h3>{nomcomm5} <span>1 day ago</span></h3>
                        <p>{commentaire5}</p>
                        <div className="comment-actions">
                            <img src={like} alt=""/>
                            <span>{likecomm5}</span>
                            <img src={dislike} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={photocomm6} alt=""/>
                    <div>
                        <h3>{nomcomm6} <span>1 day ago</span></h3>
                        <p>{commentaire6}</p>
                        <div className="comment-actions">
                            <img src={like} alt=""/>
                            <span>{likecomm6}</span>
                            <img src={dislike} alt=""/>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default PlayVideo