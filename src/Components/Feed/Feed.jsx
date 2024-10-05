import React, { useEffect, useState } from "react";
import './Feed.css';
import { Link } from "react-router-dom";
import VideoList from '../../Pages/Video/VideoList.js';

const Feed = ({ category }) => {
    const [videosByCategory, setVideosByCategory] = useState({});

    const categoryIcons = {
        "Formations": "🎓",
        "Expériences": "🌟",
        "Skills": "🛠️",
        "Langues": "🌍",
        "Techno": "💻",
        "Hobbies": "🎮",
        "Portfolio": "📁",
        "À propos": "📰",
        
    };

    const fetchData = () => {
        const groupedVideos = VideoList.videos.reduce((acc, video) => {
            if (!acc[video.category]) {
                acc[video.category] = [];
            }
            acc[video.category].push(video);
            return acc;
        }, {});
        setVideosByCategory(groupedVideos);
    };

    useEffect(() => {
        fetchData();
    }, []); // Charge les vidéos une seule fois au montage

    const categories = Object.keys(videosByCategory);

    return (
        <div className='feed'>
            {category === 0 ? (
                categories.map((cat, categoryIndex) => (
                    <div key={categoryIndex} className='category-section'>
                        <div className='category-header'>
                        <i className='category-icon'>{categoryIcons[cat] || "🔗"}</i> {/* Icône par défaut */}
                        <h2 className='category-title'>{cat}</h2>
                        <hr className='category-line' />
                            
                        </div>

                        <div className='video-row'>
                            {videosByCategory[cat].map((video, videoIndex) => (
                                <Link key={videoIndex} to={`video/${cat}/${video.url}`} className='card'>
                                    <img src={video.img} alt="image" />
                                    <h2>{video.title}</h2>
                                    <h3>{video.channelname}</h3>
                                    <p>{video.views} &bull; {video.uploaded}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <div className='category-section'>
                    <div className='category-header'>
                    <i className='category-icon'>{categoryIcons[category] || "🔗"}</i> {/* Icône par défaut */}
                    <h2 className='category-title'>{category}</h2>
                    <hr className='category-line' />
                        
                    </div>

                    <div className='video-row'>
                        {videosByCategory[category]?.map((video, videoIndex) => (
                            <Link key={videoIndex} to={`video/${category}/${video.url}`} className='card'>
                                <img src={video.img} alt="image" />
                                <h2>{video.title}</h2>
                                <h3>{video.channelname}</h3>
                                <p>{video.views} &bull; {video.uploaded}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Feed;
