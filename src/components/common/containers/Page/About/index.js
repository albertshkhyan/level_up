import React, { Component } from 'react';
import AboutCover from '../../../../../assets/logos/LevelUp_cover_courses.jpg';
// import '../../../../../App.css';
import '../../../../../App.css'
import './style.css';
import {OurTeam as AboutUsTeam} from '../../../containers/Main/OurTeam';

import cPlusPlusImage from '../../../../../assets/logos/cPlusPlusCover.jpg';
import sassImage from '../../../../../assets/logos/sass_cover.jpg' ;



import {dataOfLang} from './translate.js';


class About extends Component {
    render() { 
        return ( 
            <section className="AboutUs withStretch flexible vertical">
                <div className="MainImageBlock image-centering"
                        style={{
                            backgroundImage :`url(${AboutCover})`
                        }}>
                </div>      

                <div className="about-us-content page-content">
                        <AboutUsTeam lang="About Us"/>

                        <div className="about-Info-content flexible jAround aStart">
                            <div className="image-centering"
                                style={{
                                    backgroundImage :`url(${cPlusPlusImage})`
                                }}>

                            </div>

                            {/* <p>{lang}</p> */}
                            <p>
                                {dataOfLang.en.aboutUslangP}
                            </p>
                        </div>


                        <div className="about-Info-content flexible jAround aStart reverse">
                        <div className="image-centering"
                                style={{
                                    backgroundImage :`url(${sassImage})`
                                }}>

                        </div>

                        <p>
                            {dataOfLang.en.aboutUslangP2}
                        </p>

                        </div>
                </div>       
            </section>
         );
    }
}
 
export default About;