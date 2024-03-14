import { Link } from 'react-router-dom'; 
import Navigation from './Navigation';

function Header() {
    return (
        <Navigation
            className="navigation"
            links={[
                { key: 1, to: "/about", label: "About" },
                { key: 2, to: "/resume", label: "Resume" },
                { key: 3, to: "/portfolio", label: "Portfolio" },
                { key: 4, to: "/contact", label: "Contact" }
            ]}
        />
    );
}

export default Header;
