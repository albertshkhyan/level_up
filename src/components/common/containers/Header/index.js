import React, { Component } from 'react';
import LogoOfLevelUp from '../../../sections/LogoLevelUp';
import SwitchLangFlagContainer from './SwitchLangFlag';
import './SwitchLangFlag/style.css';

import './style.css';
// import '../../../../App';

import {NavLink} from 'react-router-dom';
// console.log('NavLink', NavLink);


class NavBar extends Component {
    render() { 
        return ( 
            ////thare must be Routing(маршрутизация)
            <ul className="flexible aCenter">
                <li className="flexible aCenter ">
                    <NavLink to="/Students">Students</NavLink>
                </li>
                <li className="flexible aCenter ">
                <NavLink to="/Courses">Courses</NavLink>
                </li>
                <li className="flexible aCenter ">
                <NavLink to="/About">About</NavLink>

                </li>
                <li className="flexible aCenter ">
                <NavLink to="/ContactUs">Contact Us</NavLink>

                </li>
                <li className="langaugePart ">
                    <SwitchLangFlagContainer/>
                </li>
            </ul>
         );
    }
}




class HeaderMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerShowOrHide: false, // for responsive
            scrollOrNoScroll_shadow: 'flexible jBetween', //default don't have shadow
            lang: 'en',
            activeNavWord: 'active',
            burgerShowOrNot : 'hamburger-menu ',
            menuCloseWithBurger : 'Header '
        }
    }
  



    whenScroll = () => {
        if(window.scrollY > 0) {
            this.setState({
                scrollOrNoScroll_shadow : 'flexible jBetween isShadowShown'
            });
        }

        else if(window.scrollY === 0) {
            this.setState({
                scrollOrNoScroll_shadow : 'flexible jBetween '
            });
        }
    }


    handleBurger = () => {
        console.log('??', this.state.burgerShowOrNot);
    if(this.state.burgerShowOrNot === 'hamburger-menu ') {
        this.setState({
            menuCloseWithBurger : 'Header headerShown',
            burgerShowOrNot : 'hamburger-menu animate'
        })
    }
    else if(this.state.burgerShowOrNot === 'hamburger-menu animate') {
        this.setState({
            menuCloseWithBurger : 'Header ',
            burgerShowOrNot : 'hamburger-menu '
        })
    }
    }

componentDidMount() {
    window.addEventListener('scroll', this.whenScroll)
}
    render() {
        // this.state.burgerShowOrNot
        return (
            <header className={this.state.menuCloseWithBurger}>
                <nav className={this.state.scrollOrNoScroll_shadow}>
                        <LogoOfLevelUp activeNavWord = {this.state.activeNavWord}/> 
                        
                        <div onClick={this.handleBurger} className='menu-wrapper'>
                            <div className={this.state.burgerShowOrNot}></div>
                        </div>
                        <NavBar/>
                 </nav>
            </header>
                );
            }
        }
        
        export default HeaderMenu;
        
