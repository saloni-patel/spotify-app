import React from 'react'
import '../App.css';
 import logo from '../assets/logo/spotify.png';
// import HomeLogo from "../assets/HomeLogo.svg";
// import SearchLogo from "../assets/SearchLogo.svg";
// import LibraryLogo from "../assets/LibraryLogo.svg";
// import CreatePlaylistLogo from "../assets/CreatePlaylistLogo.svg";
// import LikeLogo from "../assets/LikeLogo.svg";
const SideBar = () => {
    return (
        <div className="SideBar">
         <div className="logo">
            <img src={logo} alt="spotify"/>
        </div>
        <ul>
            <li>Home</li>
            <li>Search</li>
            <li>Your Library</li>
        </ul>
        </div>
    );
};

export default SideBar
