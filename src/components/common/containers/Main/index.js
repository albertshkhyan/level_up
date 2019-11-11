import React, {Component} from 'react';
import './style.css';
//import MainContent
import MainContent from './OurTeam/index.js';

//import section 


class ChangeDivisionOfMenu extends Component {
    render() { 
        return (  
            <section className="Main withStretch vertical flexible">
                <div className="MainVideoBlock">
                    <iframe className="iframeChange"  src="https://www.youtube.com/embed/6qfhLaHeI4o"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>

                {/* <div className="main-content flexible vertical grow page-content"></div> */}
                <MainContent/>
            </section>

            // <div className="main-content flexible vertical grow page-content"></div>
            // <OurTeam/>

        );
    }
}
 


class HomeMainContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <ChangeDivisionOfMenu/>
         );
    }
}
 
export default HomeMainContainer;