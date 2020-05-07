import React, { Component } from 'react';

class Header extends Component {
   render() {
      return (
         <header id="home" style={{ marginBottom: 20 }}>
            <div className="row banner">
               <div className="banner-text" align="center">
                  <h1>G A L L E R I A</h1>
                  <h3>
                     Digital Art Works & Designs
                     by Afiqah Rashid
                  </h3>
                  <h6>
                     <br /> Posters | Instagram Posts | Instastory Posts | Facebook Posts | Facebook Banners | Logos | Sketches | Renders | Concept Inspiration</h6>
               </div>
            </div>
         </header>
      );
   }
}

export default Header;