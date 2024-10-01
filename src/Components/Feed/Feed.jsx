import React, { useEffect, useState } from "react";
import './Feed.css';
import { Link } from "react-router-dom";
import VideoList from '../../Pages/Video/VideoList.js';

const Feed = ({ category }) => {
    const [data, setData] = useState([]);

    const fetchData = () => {
        // Filtre les vidéos en fonction de la catégorie sélectionnée
        const filteredVideos = VideoList.videos.filter(video => video.category === category || category === 0);
        console.log("Filtered Videos:", filteredVideos);
        setData(filteredVideos);
    };

    useEffect(() => {
        console.log("Selected category:", category)
        fetchData();
    }, [category]); // Actualise les vidéos à chaque changement de catégorie

    return (
        <div className='feed'>
            {data.map((video, index) => (
                <Link key={index} to={`video/1/${video.url}`} className='card'>
                    <img src={video.img} alt="image" />
                    <h2>{video.title}</h2>
                    <h3>{video.channelname}</h3>
                    <p>{video.views} &bull; {video.uploaded}</p>
                </Link>
            ))}
        </div>
    );
}

export default Feed;
