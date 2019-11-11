import React, {Component} from 'react';
import closeBtnSvg from '../../../../../assets/svg/registCourseSvg/closeBtn.svg';
import {Animated} from "react-animated-css";
import jsSvg from '../../../../../assets/svg/registCourseSvg/js_course.svg';
import javaSvg from '../../../../../assets/svg/registCourseSvg/java_course.svg';
import qaSvg from '../../../../../assets/svg/registCourseSvg/qa_course.svg';
import nodeJsSvg from '../../../../../assets/svg/registCourseSvg/nodeJs_course.svg';

import reactLogo from './../../../../../assets/logos/level_up_students.png';
import '../../../../../App.css';
import './style.css';
console.log('Animated', Animated);

class ApplyContentAnimate extends Component {


    handleCloseBtn = () => {
        console.log('handleCloseBtn :DDD');
        
        this.props.on_click();
    }
    render() { 
        
        return ( 
            <div className={this.props.class_name}>
                <div className="ApplyNow">
                <div className="overlay"></div>
                <span onClick={this.handleCloseBtn} className="Icon">
                    <img src={closeBtnSvg} alt="closeBtnSvg"/>
                </span>

                <Animated  animationIn="bounce" animationOut="fadeOut" isVisible={true}>
                    <div className="apply-body animated bounceInDown flexible">
                    <div className="flexible vertical jBetween grow withForm">
                      <span>Apply now</span>
                      <div className="courses-for-apply svgCourse">
                        <div style={{ background: `url(${jsSvg})` }}></div>
                        <div style={{ background: `url(${javaSvg})` }}></div>
                        <div style={{ background: `url(${qaSvg})` }}></div>
                        <div style={{ background: `url(${nodeJsSvg})` }}></div>
                      </div>

                      <div className="img" style={{ background: `url(${reactLogo})` }}></div>

                    </div>
                    </div>

                </Animated>

                </div>
            </div>
         );
    }
}
 
export default ApplyContentAnimate;