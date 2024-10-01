import React, { useState } from "react";
import './Sidebar.css';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import Mail from '../../assets/mail.png';
import Tel from '../../assets/telephone.png';
import Linkedin from '../../assets/linkedin.png';
import carte from '../../assets/carte.png';

const Sidebar = ({ sidebar, category, setCategory }) => {
    const [activePopup, setActivePopup] = useState(null);

    const handlePopupClick = (popupType) => {
        setActivePopup(prev => prev === popupType ? null : popupType);
    };

    const closePopup = () => {
        setActivePopup(null);
    };

    return (
        <div className={`sidebar ${sidebar ? "sidebar" : "small-sidebar"}`}>
            <div className="shortcut-links">
                <div className={`side-links ${category === 0 ? "active" : ""}`} onClick={() => setCategory(0)}>
                    <img src={home} alt="" /><p>Home</p>
                </div>
                <div className={`side-links ${category === 20 ? "active" : ""}`} onClick={() => setCategory(20)}>
                    <img src={game_icon} alt="" /><p>Formations</p>
                </div>
                <div className={`side-links ${category === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
                    <img src={automobiles} alt="" /><p>Expériences</p>
                </div>
                <div className={`side-links ${category === 17 ? "active" : ""}`} onClick={() => setCategory(17)}>
                    <img src={sports} alt="" /><p>Skills</p>
                </div>
                <div className={`side-links ${category === 24 ? "active" : ""}`} onClick={() => setCategory(24)}>
                    <img src={entertainment} alt="" /><p>Langues</p>
                </div>
                <div className={`side-links ${category === 28 ? "active" : ""}`} onClick={() => setCategory(28)}>
                    <img src={blogs} alt="" /><p>Techno</p>
                </div>
                <div className={`side-links ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
                    <img src={music} alt="" /><p>Hobbies</p>
                </div>
                <div className={`side-links ${category === 22 ? "active" : ""}`} onClick={() => setCategory(22)}>
                    <img src={tech} alt="" /><p>Portfolio</p>
                </div>
                <div className={`side-links ${category === 25 ? "active" : ""}`} onClick={() => setCategory(25)}>
                    <img src={news} alt="" /><p>À propos</p>
                </div>
                <hr />
            </div>

            <div className='subscribed-list'>
                <h3>Me contacter</h3>
                <div className='side-links' onClick={() => handlePopupClick('mail')}>
                    <img src={Mail} alt='' /><p>Mail</p>
                </div>
                <div className='side-links' onClick={() => handlePopupClick('tel')}>
                    <img src={Tel} alt='' /><p>Tél.</p>
                </div>
                <a style={{ color: 'black' }} href='https://www.linkedin.com/in/joaquim-fontinha/'>
                    <div className='side-links'>
                        <img src={Linkedin} alt='' /><p>Linkedin</p>
                    </div>
                </a>
                <div className='side-links' onClick={() => handlePopupClick('secteurs')}>
                    <img src={carte} alt='' /><p>Secteurs</p>
                </div>
            </div>

            {activePopup === 'mail' && (
                <div className='popup'>
                    <div className='popup-content'>
                        <h2>Contactez-moi</h2>
                        <p>Email :<br />joaquim.fontinha@epitech.eu</p>
                        <button onClick={closePopup}>Fermer</button>
                    </div>
                </div>
            )}

            {activePopup === 'tel' && (
                <div className='popup'>
                    <div className='popup-content'>
                        <h2>Contactez-moi</h2>
                        <p style={{ fontWeight: 'bold' }}>Téléphone :</p>
                            <p>(+33)6 35 46 06 23</p>
                        <button onClick={closePopup}>Fermer</button>
                    </div>
                </div>
            )}

            {activePopup === 'secteurs' && (
                <div className='popup'>
                    <div className='popup-content'>
                        <h2>Secteurs</h2>
                        <p>Grand Est, Nancy, Metz, Luxembourg, Paris.</p>
                        <button onClick={closePopup}>Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
