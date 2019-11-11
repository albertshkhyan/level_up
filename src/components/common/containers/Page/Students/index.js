import React, { Component } from 'react';
import studentsMainImage from '../../../../../assets/students/studnetsCover.JPG';
import {OurTeam as StudentsTeam} from '../../Main/OurTeam';
import {dataOfStudents} from './dataOfStudents.js'
import searchIconSvg from '../../../../../assets/svg/search_icon.svg';
import OpenSliderOfStudent from  './OpenSliderOfStudnets';



 
/*+++++++++++++++++++++++++++++++++ */


function foo() {
    console.log('foo - hello');
    
}


class EveryStudent extends Component {

    clickOnStudent = (e) => {
        // console.log('e', e);
        let index = this.props.indexOfPerson,
        name =  this.props.name,
        course = this.props.whatStudy,
        imgStudent = this.props.imageOfStudents;
        this.props.sliderOpenFunc(index, name, course, imgStudent);
        
    }

    render() { 
        // console.log('EveryStudent props - ', this.props);
        
        return ( 
            <div className="StudentCard " key={this.props.id}>
                <div className="image-block image-centering"
                    style = {{
                        backgroundImage : `url(${this.props.imageOfStudents})`
                    }}>

                    <div onClick={this.clickOnStudent} className="hidden-block flexible">
                        <span className="Icon">
                            <img src={searchIconSvg} alt="searchIcon"/>
                        </span>
                    </div>

                </div>

                <div className="info-block flexible vertical aCenter">
                    <h3>{this.props.name}</h3>
                    <p className="course">{this.props.whatStudy}</p>
                </div>
            </div>
         );
    }
}
 

class AllStudents extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            open_slider : '',
            key : 0,
            showArrowIcons : 'prev',//filter < > arrows if null ուրեմն ունի 2 սլաքները , եթե prev է ուրեմն չունի previous button-ը , իսկ եթե next է ուրեմն չունի next button-ը։
            dataOfStudent : ''
        } 
    }

    openViewSlider = (index,name,course, img ) =>{
        // console.log('data openViewSlider *** ', data);
        if(this.state.open_slider === '') {
            this.setState({
                open_slider : 'slider-content',
                dataOfStudent : [index,name,course, img],
                key : index
            })
        }

        
    }


    closePerson = () => {
        console.log('hasanq chist tex bro');
        this.setState({
            open_slider : ''
        })
        
    }
    render() { 
        console.log(this.state.open_slider);
        
        
        return ( 
            <div className="Students">
                    <div className="MainImageBlock image-centering"
                        style={{
                            backgroundImage :`url(${studentsMainImage})`
                        }}>
                    </div>


                <div className="page-content students-content">
                    <StudentsTeam lang="Students"/>
                    
                    
                    <div className="studetns-cards flexible jAround wrap">
                    {
                        dataOfStudents.map( (elem, index) => {   
                                                     
                            return(
                                <EveryStudent
                                key = {elem.id}
                                name = {elem.nameSrname}
                                whatStudy={elem.toStudy}
                                imageOfStudents = {elem.url}
                                sliderOpenFunc = {this.openViewSlider}
                                indexOfPerson = {index}
                                />
                            )
                        } )
                    }
                    </div>
                    {/* բացած սլայդեռը */}
                    <OpenSliderOfStudent    
                    showOrNotSlider = {this.state.open_slider}
                    indexOfPerson = {this.state.key}
                    dataOfStudent = {this.state.dataOfStudent}

                    nextArrow = {this.nextPerson}
                    prevArrow = {this.prevPerson}
                    closeCarouselBtn = {this.closePerson}

                    
                    />
                </div>

            </div>

            

         );
    }
}
 
export default AllStudents;