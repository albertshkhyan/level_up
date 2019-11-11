import React, { Component } from 'react';
import '../../../../App.css';
import './style.css';
// import LogoHomeLevelUpImage from '../../../assets/logos/level_up_students.png';
import logoHomeLevelUpImage from '../../../../assets/logos//level_up_students.png';
//C:\Users\aliks\Desktop\level_up\src\assets\logos\level_up_students.png

// import LogoHomeLevelUpImage from '../../../../assets/logos/level_up_students.png';
// console.log(LogoHomeLevelUpImage);


// console.log('LogoOfLevelUp', <LogoOfLevelUp/>);

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer className="Footer flexible aCenter jBetween">
                <div className="logo flexible aCenter">
                    <a href="">
                        <img src={logoHomeLevelUpImage} alt="levelupIcon"/>
                    </a>
                </div>

                <div className="footer-text">
                    ©2018 Level Up IT Center
                </div>
            </footer>
         );
    }
}
 
export default Footer;