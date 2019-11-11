import React, { Component } from 'react';
import './style.css';
import '../../../../../../App.css';

import htmlAndCssSvg from '../../../../../../assets/svg/course_html_and.svg';
import jsSvg from  '../../../../../../assets/svg/course_js.svg';
import javaSvg from  '../../../../../../assets/svg/course_java.svg';
import qaSvg from '../../../../../../assets/svg/course_qa_automation.svg';
import nodeSvg from '../../../../../../assets/svg/course_node_js.svg';

import {NavLink} from 'react-router-dom';

let dataOfLearnSvgs = [
{
    id : 0,
    // name : '/Courses/htmlAndCss',
    name : '/Courses/htmlAndCss',
    url : htmlAndCssSvg,
},
{
    id : 1,
    name : '/Courses/js',
    url : jsSvg,
},
{   
    id : 2,
    name : '/Courses/java',
    url : javaSvg,
},
{
    id : 3,
    name : '/Courses/qaAutomation',
    url : qaSvg,
},
{
    id : 4,
    name : '/Courses/nodeJs',
    url : nodeSvg,
},
];

class SelectLearnSvg extends Component {

    render() { 
        

        return ( 
            <NavLink to={this.props.namePath}>
                <div className="CourseItem image-centering animated fadeInUp">
                    <img src={this.props.url} alt={this.props.namePath}/>
                </div>
            </NavLink>
         );
    }
}
 

class WhatYouWantLearn extends Component {
    constructor(props) {
        super(props);
        

    }


    render() { 
        return ( 
            <div className="courses-block flexible jAround">
                {
                    dataOfLearnSvgs.map( (elem, index) => {
                        return (
                            <SelectLearnSvg 
                            key={elem.id}
                            id = {elem.id}
                            namePath = {elem.name}
                            url = {elem.url}

                            />
                        )
                    } )
                }
            </div>
         );
    }
}
 
export default WhatYouWantLearn;