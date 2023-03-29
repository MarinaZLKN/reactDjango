import React from "react";
import * as ReactDOMClient from "react-dom/client";

import '../styles/App.scss';
import Recipelist from "./Recipelist";
import Header from "./Header";
import CategoryList from "./CategoryList";
const pic = '../img/banner.jpg.webp';
const picture = 'picture';
const App = () => {


  return (
      <div className="container-main">
          <Header/>
          <div className="page">
                <div className="content">
                    <CategoryList/>
                    <Recipelist/>

                </div>
            </div>

      </div>
  )
}

const container = document.getElementById("app");
const root = ReactDOMClient.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default App;