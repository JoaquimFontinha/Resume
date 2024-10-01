import React, { useState } from 'react';
import './Navbar.css';
import menu_icon from '../../Assets/menu.png';
import logo from '../../Assets/logo.png';
import search_icon from '../../Assets/search.png';
import upload_icon from '../../Assets/upload.png';
import more_icon from '../../Assets/more.png';
import notification_icon from '../../Assets/notification.png';
import profile_icon from '../../Assets/gojo.jpg';

const Navbar = ({ setSidebar }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleProfileClick = () => {
        setIsPopupOpen(prev => !prev);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img
                    className='menu-icon'
                    onClick={() => { setSidebar(prev => prev === false ? true : false); }}
                    src={menu_icon}
                    alt='Menu'
                />
                <a href='/'>
                    <img className='logo' src={logo} alt='Logo' />
                </a>
            </div>

            <div className='nav-middle flex-div'>
                <div className='search-box flex-div'>
                    <input type='text' placeholder='Search' />
                    <img src={search_icon} alt='Search Icon' />
                </div>
            </div>

            <div className='nav-right flex-div'>
                <img src={upload_icon} alt='Upload Icon' />
                <img src={more_icon} alt='More Icon' />
                <img src={notification_icon} alt='Notification Icon' />
                <img
                    src={profile_icon}
                    className='user-icon'
                    alt='Profile Icon'
                    onClick={handleProfileClick}  // Gestionnaire de clic sur l'icône de profil
                />
            </div>

            {isPopupOpen && (
                <div className='popup'>
                    <div className='popup-content'>
                        <h2>Me contacter :</h2><br />
                        <p style={{ fontWeight: 'bold' }}>Email :</p><p>joaquim.fontinha@epitech.eu</p><br />
                        <p style={{ fontWeight: 'bold' }}>Téléphone :</p><p> (+33)6 35 46 06 23</p>
                        <button onClick={closePopup}>Fermer</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
