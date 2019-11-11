import React, { Component } from 'react';
import './style.css';
import courseCover from '../../../../../assets/logos/LevelUp_cover_courses.jpg';
import '../Students/style.css';
import '../../../../../App.css';
import {OurTeam as CoursesTeam} from '../../../containers/Main/OurTeam';
import {Switch, Route} from 'react-router-dom';

import {
    HtmlAndCssPage,
    JsCoursePage,
    JavaCoursePage,
    NodeJsCoursePage,
    QaCoursePage
} from './CoursesPage';

import WhatYouWantLearn from './WhatYouWantLearn';

import htmlCssWbCover from '../../../../../assets/Mentors/html_css_cover_wb.jpg';
import jsCover from '../../../../../assets/Mentors/Js_cover_web.jpg';
import javaCover from '../../../../../assets/Mentors/Java_cover.jpg';
import qaCover from '../../../../../assets/Mentors/Qa_automation_cover.jpg';
import nodeJsCover from '../../../../../assets/Mentors/nodejs.jpg';




class Courses extends Component {
constructor(props) {
    super(props);
    this.state = {
        // header_text_courses_or_mentor : 'Courses'
    }
}


selectCover = ()=> {
    switch(window.location.pathname) {
        case '/Courses/htmlAndCss' : return htmlCssWbCover;
        case '/Courses/js' : return jsCover;
        case '/Courses/java' : return javaCover;
        case '/Courses/qaAutomation' : return qaCover;
        case '/Courses/nodeJs' : return nodeJsCover;

        default : return courseCover;
    }
    
}




    render() { 
        let textMentorOrCourses = window.location.pathname === '/Courses' ? 'Courses' : 'Mentor';

        let class_name1 = window.location.pathname === '/Courses' ? 'courses-content page-content'
        : 'courses-item-content page-content';

        let class_name2 = window.location.pathname === '/Courses' ? 'Courses withStretch flexible vertical' : 'CourseItemPage withStretch flexible vertical';
        

        
        return ( 
            <section className={class_name2}>
                <div className="MainImageBlock image-centering"
                        style={{
                            backgroundImage :`url(${this.selectCover()})`
                        }}>
                    </div> 
                    
                    <div className={class_name1}>
                        <CoursesTeam lang={textMentorOrCourses}/>
                        <Switch>
                            <Route exact  path="/Courses" component={WhatYouWantLearn}/>

                            <Route exact path="/Courses/htmlAndCss" component={HtmlAndCssPage}/>
                            <Route exact path="/Courses/js" component={JsCoursePage}/>
                            <Route exact path="/Courses/java" component={JavaCoursePage}/>
                            <Route exact path="/Courses/qaAutomation" component={QaCoursePage}/>
                            <Route exact path="/Courses/nodeJs" component={NodeJsCoursePage}/>

                        </Switch>

                    </div>

            </section>
         );
    }
}
 
export default Courses;