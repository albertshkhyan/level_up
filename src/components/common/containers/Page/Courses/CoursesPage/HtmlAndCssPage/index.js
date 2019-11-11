import React, { Component } from 'react';
import {OurTeam as CoursesDescription} from '../../../../../containers/Main/OurTeam';

// import arman_ghazaryan from '../../../../../../assets/Mentors/01_img.jpeg';

import arman_ghazaryan from '../../../../../../../assets/Mentors/01_img.jpeg';
import karen_sargsyan from '../../../../../../../assets/Mentors/02_img.jpg';
import './style.css';
import '../../../../../../../App.css';
import { 
    courseDescriptionOfHtmlAndCss,
    arrowsCodePng,
    
    durationSvg,
    hoursSvg,
    monthsSvg
} from '../../CoursesPage/dataOfMentor.js';


export let Mentor = (props) => {    
return(
    <div className="trainer-info flexible vertical aCenter">
        <div className="image-block">
            <div className="img image-centering"
                style = {
                    {
                        backgroundImage : `url(${props.urlImg})`
                    }
                }
            ></div>
        </div>
        <div className="name">{props.name}</div>
        <div className="position">{props.position}</div>
    </div>
    )
}

export let CourseDescription = (props) => {
    return (
        <div className="course-item-content-block flexible vertical">
            {
                props.data.map( (elem,i) => {
                    return (
                    <div key={`id ${i}`} className="desc-line flexible aStart animated fadeInRight">
                        <span className="image-centering" 
                        style={ { background : `url(${props.icon})` } }></span>
                        {elem}
                    </div>
                    );
                } )
            }
        </div>
    )
}

export let CurseDuration = (props) => {
// console.log(props.dataSvg[0]);

return (

    <div className="course-info-block flexible vertical">

{
    props.dataInfo.map( (elem,i) => {
        
        return(
        <div key={`id${ i}`} className="info flexible aCenter">
            <span className="Icon">
                <img src={props.dataSvg[i]} alt="duaration"/>
            </span>
            <span>{props.dataIconName[i]} </span>
            <p>{ elem}</p>
        </div>

        )
    } )
}



    </div>
)
}



class HtmlAndCssPage extends Component {
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
                    <CoursesDescription lang='Course Description'/>
                    
                    <CourseDescription 
                    data = {courseDescriptionOfHtmlAndCss}
                    icon = {arrowsCodePng}
                    />

                    <CoursesDescription lang='Course duration and prices'/>

                    <CurseDuration
                    dataInfo = { ["1-2 months", "6hours/week", "40.000 AMD/month"] }
                    dataSvg = { [durationSvg, hoursSvg, monthsSvg] }
                    dataIconName = { ['Duration : ', 'Effort :', 'Price :'] }

                    />


            </div>
         );
    }
}
 
export default HtmlAndCssPage;







