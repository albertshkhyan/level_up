import React, { Component } from 'react';
import arrowLeftSvg from '../../../../../../assets/svg/sliderArrow/arrow_Left.svg';
import arrowRightSvg from '../../../../../../assets/svg/sliderArrow/arrow_Right.svg';
import '../../../../../../App.css';
import './style.css';
import closeBtnSvg from '../../../../../../assets/svg/sliderArrow/close_slider.svg';
import {dataOfStudents} from '../dataOfStudents.js'








class Content extends Component {
    render() { 
        let img = (this.props.index !== undefined) ?
        dataOfStudents[this.props.index].url 
        : null;
        let name = (this.props.index !== undefined) ?
        dataOfStudents[this.props.index].nameSrname 
        : null;
        let course = (this.props.index !== undefined) ?
        dataOfStudents[this.props.index].toStudy
        : null;
        // console.log('Content 😜😜this.props.index', this.props.index);
   
        
        
        return ( 
            <div className="content">
            <div className="image-block image-centering"
            style={
                {
                    background : `url(${img})`
                }
            }>
            <div className="hidden-block">
                {/*Thera must be props form Studnets index.js */}
                <h3>{name}</h3>
                <p className="course">{course}</p>
            </div>
            </div>

        </div>
         );
    }
}

class PrevButton extends Component {
    handlePrevClick = () => {
        this.props.prevStudentFunc();
    }
    render() { 

let countId = (this.props.passIndex !== undefined) ? 
dataOfStudents[this.props.passIndex].id : null;
console.log('countId this is prev BROOOO', countId);

let classOfNextBtn = (countId === 0) ? 'hidden' : 'Icon';
        return ( 
        <div onClick={this.handlePrevClick} className="prev flexible aCenter jCenter">
            <span className={classOfNextBtn}>
                <img src={arrowLeftSvg} alt="arrowLeft"/>
            </span>
        </div>

         );
    }
}

class NextButton extends Component {
constructor(props) {
    super(props);
    // console.log('props ffff - ', this.props);
    // this.i = this.props.passIndex;

}

    handleNextClick = (e) => {
         this.props.nextStudentFunc();
    }   


    render() { 
let countId = (this.props.passIndex !== undefined) ? 
dataOfStudents[this.props.passIndex].id : null;

let classOfNextBtn = (countId === dataOfStudents.length-1) ? 'hidden' : 'Icon';

        return ( 
        <div className="next flexible aCenter jCenter">
            <span onClick={this.handleNextClick} className={classOfNextBtn}>
                <img src={arrowRightSvg} alt="arrowRightSvg"/>
            </span>
        </div>
         );
    }
}
 
 
class CloseBtn extends Component {

    handleCloseBtn1 = () => {
        console.log('hello bro im close btn');
        this.props.closeSlide();
        
    }
    render() { 
        return ( 
            <span onClick={this.handleCloseBtn1} className="Icon">
                <img src={closeBtnSvg} alt="closeBtnSvg"/>
            </span>
         );
    }
}
 
 






class OpenSliderOfStudnets extends Component {
    constructor(props){
        super(props);

        this.state = {
            nextAndPrevClassName : '',
            data : dataOfStudents,
        }
        
    }

    nextStudent = () => {

        let takeFirst =  dataOfStudents.shift()
        dataOfStudents.push(takeFirst)

        this.setState({
            data : dataOfStudents,
            // checkArrowIndex : 
        })

    }
    prevStudent = () => {
        let takeLast =  dataOfStudents.pop();
        dataOfStudents.unshift(takeLast);

        this.setState({
            data : dataOfStudents
        })
    }
    closeSlide = () => {
        console.log('hima um foo kanchem bro');
        this.props.closeCarouselBtn();
        
        
    }
    render() { 
        let index = this.props.dataOfStudent[0],
        name = this.props.dataOfStudent[1],
        course = this.props.dataOfStudent[2],
        imgStudent = this.props.dataOfStudent[3];

        // console.log('hlyhlyhlylhlylhly',this.state.data);
        
        
        ;

        return ( 
            <div className={this.props.showOrNotSlider}>
                <div className="LevelUpSlider flexible jBetween">
                    <div className="flexible jBetween grow">
                        <PrevButton
                        prevStudentFunc = {this.prevStudent}
                        passIndex = {index}
                        />

                        <Content
                        course = {course}
                        imgStudent={imgStudent}
                        name = {name}
                        index = {index}
                        />

                        <NextButton
                        nextStudentFunc = {this.nextStudent}
                        passIndex = {index}
                        
                        
                        />
                    </div>
                    <CloseBtn
                    closeSlide = {this.closeSlide}
                    />

                </div>
            </div>
         );
    }
}
 
export default OpenSliderOfStudnets;