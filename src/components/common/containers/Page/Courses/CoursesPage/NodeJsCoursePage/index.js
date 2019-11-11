import React, { Component } from 'react';

import {OurTeam as CoursesDescription} from '../../../../../containers/Main/OurTeam';


import { 
    courseDescriptionOfNodeJs,
    arrowsCodePng,
    ruben_aprikyan,
    
    durationSvg,
    hoursSvg,
    monthsSvg
} from '../../CoursesPage/dataOfMentor.js';



import {Mentor,CourseDescription,CurseDuration} from '../../CoursesPage/HtmlAndCssPage'; 



class QaCoursePage extends Component {
    render() { 
        return ( 
            <div>
            <div className="flexible jCenter wrap">
            <Mentor 
                name = "Ruben Aprikyan" 
                position="Software Engineer at Brainstorm Technologies"
                urlImg = {ruben_aprikyan}
                />
            </div>
            <CoursesDescription lang='Course Description'/>

            <CourseDescription 
                data = {courseDescriptionOfNodeJs}
                icon = {arrowsCodePng}
                />

            <CoursesDescription lang='Course duration and prices'/>

            <CurseDuration
                dataInfo = { ["3-4 months", "6hours/week", "45.000 AMD/month"] }
                dataSvg = { [durationSvg, hoursSvg, monthsSvg] }
                dataIconName = { ['Duration : ', 'Effort :', 'Price :'] }

                />

        </div>

         );
    }
}
 
export default QaCoursePage;