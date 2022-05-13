import React from 'react';
import '../../styles/font.css';
import '../../styles/theme.css';
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <ul class="topnav">
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="resources/resume.pdf">Resume</a></li>
                <li><a href="views/ehp.html">Research</a></li>
                <li><a href="views/projects.html">Projects</a></li>
                <li><a href="views/album.html">Album</a></li>
            </ul>
        );
    }
}

export default NavBar;