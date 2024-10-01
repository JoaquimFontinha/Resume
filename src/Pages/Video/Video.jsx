import Reac from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
import VideosList from '../Video/VideoList.js'

const Video = () => {
    const {categoryId,videoId} = useParams()
    console.log(categoryId,videoId)
    const video = VideosList.videos[videoId]
    console.log(video)
    return (
        <div className='play-container'>
            <PlayVideo vid={video.vid} title={video.title} views={video.views} uploaded={video.uploaded} channelname={video.channelname} description={video.description} likes={video.likes} imgyoutubers={video.imgyoutubers} Subscribers={video.Subscribers} description2={video.description2} description3={video.description3} 
            commentaire1={video.commentaire1} photocomm1={video.photocomm1} likecomm1={video.likecomm1}
            commentaire2={video.commentaire2} photocomm2={video.photocomm2} likecomm2={video.likecomm2}
            commentaire3={video.commentaire3} photocomm3={video.photocomm3} likecomm3={video.likecomm3}
            commentaire4={video.commentaire4} photocomm4={video.photocomm4} likecomm4={video.likecomm4}
            commentaire5={video.commentaire5} photocomm5={video.photocomm5} likecomm5={video.likecomm5}
            commentaire6={video.commentaire6} photocomm6={video.photocomm6} likecomm6={video.likecomm6}
            nomcomm1={video.nomcomm1} nomcomm2={video.nomcomm2} nomcomm3={video.nomcomm3} nomcomm4={video.nomcomm4} nomcomm5={video.nomcomm5} nomcomm6={video.nomcomm6}
            url={video.url}/>
            <Recommended/>
        </div>
    )
}

export default Video