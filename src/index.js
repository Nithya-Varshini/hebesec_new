import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "@fontsource/londrina-solid"; // Defaults to weight 400
import "@fontsource/londrina-solid/400.css"; // Specify weight
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/lato"; // Defaults to weight 400
import "@fontsource/lato/400.css"; // Specify weight
import "@fontsource/lato/400-italic.css"; // Specify weight and style
import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/400.css"; // Specify weight
import "@fontsource/rubik/400-italic.css"; // Specify weight and style
import "@fontsource/bebas-neue"; // Defaults to weight 400
import "@fontsource/bebas-neue/400.css"; // Specify weight
import "@fontsource/eb-garamond"; // Defaults to weight 400
import "@fontsource/eb-garamond/400.css"; // Specify weight

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

