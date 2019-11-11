import React, { Component } from 'react';
import './style.css';
import '../../../../../App.css';

//import translate
///C:/Users/aliks/Desktop/level_up/src/components/common/containers/Main/OurTeam/TeamMembers/index.js
// import TeamMembers from './TeamMembers/index.js' 
// import TeamMembers from 'C:/Users/aliks/Desktop/level_up/src/components/common/containers/Main/OurTeam/TeamMembers/index.js'; 
import TeamMembers from '../../../containers/Main/OurTeam/TeamMembers'; 

// console.log('TeamMembers', TeamMembers);

import ApplyContentAnimate from '../ApplyContentAnimate';



class ApplyNow extends Component {

    handleApply = () => {
        this.props.clickOrNot();
    }
    render() { 
        console.log(this.props);
        
        return (
                <button onClick={this.handleApply} className="jss27 jss1 jss3 jss6 apply">
                    <span className="jss2">{this.props.lang}</span>
                    <span className="jss30"></span>
                </button>
        );
    }
}


class OurTeam extends Component {
    render() { 
        return ( 
            <h2 className="header-text flexible vertical">
                {this.props.lang}
                    <div className="divider"></div>
            </h2>
         );
    }
}

export {OurTeam};
 
 

class MainContent extends Component {
    state = { 
        classOfApplyAnimate : 'apply-content-none'
     }

     clickedFunc = () => {
         console.log('mtav ???');
        this.setState({
            classOfApplyAnimate : 'apply-content'
        })
    }

    clickOnClose = () => {
        this.setState({
            classOfApplyAnimate : 'apply-content-none'
        })
    }

    render() { 
        return ( 
            <div className="main-content flexible vertical grow page-content">
                <ApplyNow clickOrNot = {this.clickedFunc} lang='Apply now'/>
                <OurTeam lang="Our Team"/>

                <TeamMembers/>


         

                <ApplyContentAnimate 
                class_name={this.state.classOfApplyAnimate}
                on_click = {this.clickOnClose}
                
                />
            </div>
         );
    }
}
 
export default MainContent;