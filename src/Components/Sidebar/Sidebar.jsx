import React, { useState } from "react";
import './Sidebar.css';
import home from '../../Assets/home.png';
import game_icon from '../../Assets/game_icon.png';
import automobiles from '../../Assets/automobiles.png';
import sports from '../../Assets/sports.png';
import entertainment from '../../Assets/entertainment.png';
import tech from '../../Assets/tech.png';
import music from '../../Assets/music.png';
import blogs from '../../Assets/blogs.png';
import news from '../../Assets/news.png';
import Mail from '../../Assets/mail.png';
import Tel from '../../Assets/telephone.png';
import Linkedin from '../../Assets/linkedin.png';
import carte from '../../Assets/carte.png';

const Sidebar = ({ sidebar, category, setCategory }) => {
    const [activePopup, setActivePopup] = useState(null);

    const handlePopupClick = (popupType) => {
        setActivePopup(prev => prev === popupType ? null : popupType);
    };

    const closePopup = () => {
        setActivePopup(null);
    };

    const handleCategoryClick = (cat) => {
        setCategory(cat); // Met à jour la catégorie
    };

    return (
        <div className={`sidebar ${sidebar ? "sidebar" : "small-sidebar"}`}>
            <div className="shortcut-links">
                <div className={`side-links ${category === 0 ? "active" : ""}`} onClick={() => handleCategoryClick(0)}>
                    <img src={home} alt="" /><p>Home</p>
                </div>
                <div className={`side-links ${category === "Formations" ? "active" : ""}`} onClick={() => handleCategoryClick("Formations")}>
                    <img src={game_icon} alt="" /><p>Formations</p>
                </div>
                <div className={`side-links ${category === "Expériences" ? "active" : ""}`} onClick={() => handleCategoryClick("Expériences")}>
                    <img src={automobiles} alt="" /><p>Expériences</p>
                </div>
                <div className={`side-links ${category === "Skills" ? "active" : ""}`} onClick={() => handleCategoryClick("Skills")}>
                    <img src={sports} alt="" /><p>Skills</p>
                </div>
                <div className={`side-links ${category === "Langues" ? "active" : ""}`} onClick={() => handleCategoryClick("Langues")}>
                    <img src={entertainment} alt="" /><p>Langues</p>
                </div>
                <div className={`side-links ${category === "Techno" ? "active" : ""}`} onClick={() => handleCategoryClick("Techno")}>
                    <img src={blogs} alt="" /><p>Techno</p>
                </div>
                <div className={`side-links ${category === "Hobbies" ? "active" : ""}`} onClick={() => handleCategoryClick("Hobbies")}>
                    <img src={music} alt="" /><p>Hobbies</p>
                </div>
                <div className={`side-links ${category === "Portfolio" ? "active" : ""}`} onClick={() => handleCategoryClick("Portfolio")}>
                    <img src={tech} alt="" /><p>Portfolio</p>
                </div>
                <div className={`side-links ${category === "À propos" ? "active" : ""}`} onClick={() => handleCategoryClick("À propos")}>
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
                <a style={{ color: 'black' }} href='https://www.linkedin.com/in/joaquim-fontinha/' target="_blank" rel="noopener noreferrer">
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
