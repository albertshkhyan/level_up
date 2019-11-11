import React, { Component } from 'react';

import img1 from '../../../../../assets/ContactUs_Images/01_img.jpg';
import img2 from '../../../../../assets/ContactUs_Images/02_img.JPG';
import img3 from '../../../../../assets/ContactUs_Images/03_img.JPG';
import img4 from '../../../../../assets/ContactUs_Images/04_img.JPG';

import '../../../../../App.css';
import './style.css';

import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

import mapSvg from '../../../../../assets/svg/contactUsSvg/map.svg';
import envelopeSvg from '../../../../../assets/svg/contactUsSvg/envelope.svg';
import phoneSvg from '../../../../../assets/svg/contactUsSvg/phone.svg';
import desktopSvg from '../../../../../assets/svg/contactUsSvg/desktop.svg';



import {OurTeam as ContastTeam} from '../../../containers/Main/OurTeam';
//C:\Users\aliks\Desktop\level_up\src\components\common\containers\Main\OurTeam\index.js



import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


let imageOfContactUs = [
    img1,
    img2,
    img3,
    img4
];

let PrevBtnIcon  = () => {
    return (
        <FaChevronCircleLeft className="prevBtn"/>

    )
}
let NextBtnIcon  = () => {
    return (
        <FaChevronCircleRight className="nextBtn"/>

    )
}


class ContactUs extends Component {
    render() { 
        return ( 
            <div className="ContactUs  withStretch flexible vertical">
                <Slider nextButton={<NextBtnIcon/>} previousButton={<PrevBtnIcon/>} className="slider mySld">
                    {
                        imageOfContactUs.map( (elem, index) => {
                            return (
                                <div className="MainImageBlock image-centering"
                                style={
                                    {
                                        background : `url(${elem})`
                                    }
                                }>
                                </div>
                            )
                        } )
                    }
 
                </Slider>


                <div className="contact-us-content page-content">
                    <ContastTeam lang="Contact Us"/>

                    <div className="contacts-info">
                        <div className="loaction-icon-block flexible aEnd jCenter">
                            <span className="Icon">
                                <img src={mapSvg} alt="mapSvg"/>
                            </span>
                        </div>

                        <div className="contact-info-block flexible vertical jBetween">
                            <h2>Armenia Yerevan, 15 Khorenatsi Street, Elite Plaza Business Center, 4th floor</h2>

                            <div className="info-icons flexible jAround">
                                <div className="message-icon in-ico flexible vertical aCenter">
                                <div><span>Email:</span> leveluparmenia@gmail.com</div>

                                <span className="Icon">
                                    <img src={envelopeSvg} alt="envelopeSvg"/>
                                </span>
                                </div>

                                <div className="phone-icon in-ico flexible vertical aCenter">
                                <div><span>Tel:</span> +374 (99) 91 36 90</div>

                                <span className="Icon">
                                    <img src={phoneSvg} alt="phoneSvg"/>
                                </span>
                                </div>

                                <div className="site-icon in-ico flexible vertical aCenter">
                                <div><span>Website:</span> levelup.am</div>

                                <span className="Icon">
                                    <img src={desktopSvg} alt="desktopSvg"/>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="google-map">
                    
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d761.8699827231069!2d44.49004600000001!3d40.198386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd6c7c865a59%3A0xd6608f277414da7b!2sDasaran%20Educational%20Center!5e0!3m2!1sru!2s!4v1569036352719!5m2!1sru!2s" ></iframe>
                </div>

            </div>
                

         );
    }
}

 
export default ContactUs;