import React, { Component } from 'react';

import {OurTeam as CoursesDescription} from '../../../../../containers/Main/OurTeam';


import { 
    courseDescriptionOfJQa,
    arrowsCodePng,
    karen_mkhitaryan,
    
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
                name = "Karen Mkhitaryan" 
                position="Software Test Automation Engineer at EPAM Systems"
                urlImg = {karen_mkhitaryan}
                />
            </div>
            <CoursesDescription lang='Course Description'/>

            <CourseDescription 
                data = {courseDescriptionOfJQa}
                icon = {arrowsCodePng}
                />

            <CoursesDescription lang='Course duration and prices'/>

            <CurseDuration
                dataInfo = { ["18 weeks", "6hours/week", "50.000 AMD/month"] }
                dataSvg = { [durationSvg, hoursSvg, monthsSvg] }
                dataIconName = { ['Duration : ', 'Effort :', 'Price :'] }

                />

        </div>

         );
    }
}
 
export default QaCoursePage;