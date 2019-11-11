import React, { Component } from 'react';

import {OurTeam as CoursesDescription} from '../../../../../containers/Main/OurTeam';


import { 
    courseDescriptionOfJava,
    arrowsCodePng,
    levon_aloyan,
    
    durationSvg,
    hoursSvg,
    monthsSvg
} from '../../CoursesPage/dataOfMentor.js';



import {Mentor,CourseDescription,CurseDuration} from '../../CoursesPage/HtmlAndCssPage'; 


class JavaCoursePage extends Component {
    render() { 
        return ( 
            <div>
                <div className="flexible jCenter wrap">
                <Mentor 
                    name = "Levon Aloyan" 
                    position="Software Engineer at EPAM Systems"
                    urlImg = {levon_aloyan}
                    />
                </div>
                <CoursesDescription lang='Course Description'/>

                <CourseDescription 
                    data = {courseDescriptionOfJava}
                    icon = {arrowsCodePng}
                    />

                <CoursesDescription lang='Course duration and prices'/>

                <CurseDuration
                    dataInfo = { ["5-6 months", "6hours/week", "50.000 AMD/month"] }
                    dataSvg = { [durationSvg, hoursSvg, monthsSvg] }
                    dataIconName = { ['Duration : ', 'Effort :', 'Price :'] }

                    />

            </div>
         );
    }
}
 
export default JavaCoursePage;