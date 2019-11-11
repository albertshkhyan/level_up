import React, { Component } from 'react';
import {OurTeam as CoursesDescription} from '../../../../../containers/Main/OurTeam';
import {Mentor} from '../../CoursesPage/HtmlAndCssPage';

import arman_ghazaryan from '../../../../../../../assets/Mentors/01_img.jpeg';
import karen_sargsyan from '../../../../../../../assets/Mentors/02_img.jpg';
import '../../../../../../../App.css';

import {CourseDescription,CurseDuration} from '../../../../../containers/Page/Courses/CoursesPage/HtmlAndCssPage';

import {
    courseDescriptionOfJs,
    arrowsCodePng,

    durationSvg,
    hoursSvg,
    monthsSvg

} from '../dataOfMentor.js';

class JsCoursePage extends Component {
    render() { 
        return ( 
            <div>
                <div className="flexible jCenter wrap">
                   <Mentor 
                    name = "Arman Ghazaryan" 
                    position="Software Engineer at EPAM Systems"
                    urlImg = {arman_ghazaryan}
                    />
                    <Mentor 
                    name = "Karen Sargsyan" 
                    position="Js Mentor at Level Up IT Center"
                    urlImg = {karen_sargsyan}
                    />
                </div>
                <CoursesDescription lang = 'Course Description'/>

                <CourseDescription 
                    data = {courseDescriptionOfJs}
                    icon = {arrowsCodePng}
                    />

                <CoursesDescription lang = 'Course duration and prices'/>

                <CurseDuration
                    dataInfo = { ["2-3 months", "6hours/week", "40.000 AMD/month"] }
                    dataSvg = { [durationSvg, hoursSvg, monthsSvg] }
                    dataIconName = { ['Duration : ', 'Effort :', 'Price :'] }

                    />


            </div>
         );
    }
}
 
export default JsCoursePage;