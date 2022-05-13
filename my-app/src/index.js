import React from 'react';
import ReactDOM from 'react-dom/client';

// Stylesheets
import './styles/font.css';
import './styles/theme.css';
import './styles/index.css';

// Components
import NavBar from './components/NavBar/NavBar.js';
import IntroBanner from './components/IntroBanner/IntroBanner.js';

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <IntroBanner></IntroBanner>
                <img src="avatar.jpg" alt="profile"></img>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);