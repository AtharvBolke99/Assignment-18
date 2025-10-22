import { createRoot } from 'react-dom/client'
import "./index.css";
import Home from "./Home.jsx";
import Apps from "./Apps.jsx";
import Games from "./Games.jsx";


const root = createRoot(document.getElementById('root'));

const path = window.location.pathname;
console.log(path);

if(path == "/"){
    root.render(<Home />);
} else if (path == "/Apps"){
    root.render(<Apps />);
} else if (path == "/Games"){
    root.render(<Games />);
} else {
    root.render(<h1>Error</h1>);
}
