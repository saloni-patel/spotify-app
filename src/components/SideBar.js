import React from 'react'
import '../App.css';
 import logo from '../assets/spotify2019-830x350.jpg';
import HomeLogo from "../assets/HomeLogo.svg";
import SearchLogo from "../assets/SearchLogo.svg";
 import LibraryLogo from "../assets/LibraryLogo.svg";
 import CreatePlaylistLogo from "../assets/CreatePlaylistLogo.svg";
import LikeLogo from "../assets/LikeLogo.svg";
const SideBar = () => {
    return (
        <div className="SideBar">
         <div className="logo">
            <img src={logo} alt="spotify"/>
        </div>
        <div className="main-menu">

                    <a className="menu-item">
                    <img class="menu-icons" src={HomeLogo} />
                    <label className="Home-active">Home</label>
                    </a>
                    
                    <a className="menu-item">
                    <img class="menu-icons" src={SearchLogo} />
                    <label>Search</label>
                    </a>

                    <a className="menu-item">
                    <img class="menu-icons" src={LibraryLogo} />
                    <label>Your Library</label>
                    </a>

                    <a className="menu-item">
                    <img class="menu-icons" src={CreatePlaylistLogo} />
                    <label>Create PlayList</label>
                    </a>

                    <a className="menu-item">
                    <img class="menu-icons" src={LikeLogo} />
                    <label>Liked Songs</label>
                    </a>
        </div>
        <div className="divider"></div>
     
        </div>
    );
};

export default SideBar
