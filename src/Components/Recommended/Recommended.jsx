import React from "react"
import './Recommended.css'
import { Link } from 'react-router-dom'
import thumbnail1 from '../../Assets/thumbnail1.png'
import thumbnail2 from '../../Assets/thumbnail2.png'
import thumbnail3 from '../../Assets/thumbnail3.png'
import thumbnail4 from '../../Assets/thumbnail4.png'
import thumbnail5 from '../../Assets/thumbnail5.png'
import thumbnail6 from '../../Assets/thumbnail6.png'
import thumbnail7 from '../../Assets/thumbnail7.png'
import thumbnail8 from '../../Assets/thumbnail8.png'
import VideoList from '../../Pages/Video/VideoList.js';

import Epitech from '../../Assets/1.png'
import ICN from '../../Assets/2.png'

import NUIG from '../../Assets/4.png'
import ICN2 from '../../Assets/5.png'
import Bichat from '../../Assets/6.png'
import CB from '../../Assets/7.png'
import Tafsquare from '../../Assets/8.png'
import Coco from '../../Assets/9.png'
import Adobe from '../../Assets/10.png'
import Soft from '../../Assets/11.png'
import TOEFL from '../../Assets/12.png'

import Reactp from '../../Assets/19.png'

const Recommended = () => {
    return (
        <div className='recommended'>
            <Link to={`/video/20/0`} className='side-video-list'>
                <img src={Epitech} alt='' />
                <div className='video-info'>
                    <h4>Cursus MSc Pro</h4>
                    <p>Epitech</p>
                    <p>16k Views</p>
                </div>  
            </Link> 
            <Link to={`/video/20/1`} className='side-video-list'>
                <img src={ICN} alt='' />
                <div className='video-info'>
                    <h4>Master - Programme Grande Ecole</h4>
                    <p>ICN - Business School</p>
                    <p>10k Views</p>
                </div>  
            </Link> 
            <Link to={`/video/20/15`} className='side-video-list'>
                <img src={Reactp} alt='' />
                <div className='video-info'>
                    <h4>React</h4>
                    <p>Framework</p>
                    <p>900k Views</p>
                </div>  
            </Link>
            <Link to={`/video/20/3`} className='side-video-list'>
                <img src={NUIG} alt='' />
                <div className='video-info'>
                    <h4>Degree in Marketing</h4>
                    <p>National University of Ireland</p>
                    <p>10k Views</p>
                </div>  
            </Link>
            <Link to={`/video/20/4`} className='side-video-list'>
                <img src={ICN2} alt='' />
                <div className='video-info'>
                    <h4>Bachelor en Management</h4>
                    <p>ICN - Business School</p>
                    <p>10k Views</p>
                </div>  
            </Link> 
            <Link to={`/video/20/5`} className='side-video-list'>
                <img src={Bichat} alt='' />
                <div className='video-info'>
                    <h4>Baccalauréat Scientifique</h4>
                    <p>Lycée Ernest Bichat</p>
                    <p>10k Views</p>
                </div>  
            </Link>
            <Link to={`/video/20/6`} className='side-video-list'>
                <img src={CB} alt='' />
                <div className='video-info'>
                    <h4>Alternant Marketing Digital</h4>
                    <p>CB Consulting</p>
                    <p>10k Views</p>
                </div>  
            </Link>
            <Link to={`/video/20/7`} className='side-video-list'>
                <img src={Tafsquare} alt='' />
                <div className='video-info'>
                    <h4>Stage en Marketing Digital</h4>
                    <p>Tafsquare</p>
                    <p>10k Views</p>
                </div>  
            </Link>
            <Link to={`/video/20/8`} className='side-video-list'>
                <img src={Coco} alt='' />
                <div className='video-info'>
                    <h4>Stage en Marketing Digital et Communication</h4>
                    <p>The Coco World</p>
                    <p>10k Views</p>
                </div>  
            </Link>
            <Link to={`/video/20/9`} className='side-video-list'>
                <img src={Adobe} alt='' />
                <div className='video-info'>
                    <h4>Adobe Premiere Pro</h4>
                    <p>Suite Adobe</p>
                    <p>10k Views</p>
                </div>  
            </Link>
            <Link to={`/video/20/10`} className='side-video-list'>
                <img src={Soft} alt='' />
                <div className='video-info'>
                    <h4>Top 5 : Soft Skills</h4>
                    <p>Soft Skills</p>
                    <p>10k Views</p>
                </div>  
            </Link>
            <Link to={`/video/20/11`} className='side-video-list'>
                <img src={TOEFL} alt='' />
                <div className='video-info'>
                    <h4>TOEFL 82 - Anglais</h4>
                    <p>English</p>
                    <p>10k Views</p>
                </div>  
            </Link> 
        </div>
    )
}

export default Recommended