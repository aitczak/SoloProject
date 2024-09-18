import React from "react";
// import { render } from "react-dom";
import { createRoot } from "react-dom/client";
//import app - main react component
import App from "./components/App.jsx"

//import styles from css or scss


//link to
const root = createRoot(document.getElementById("root"));
root.render(
    <App/>
)

