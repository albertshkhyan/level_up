import React, { Component } from 'react';
import './style.css';
import '../../../../../../App.css';


import {dataOfMembers} from './dataMemeber.js';
// console.log(dataOfMembers);



class HwoHaveSocialAccount extends Component {
    state = {  }
    render() {
        let outputCoolGuy = this.props.go_social.map( (elem, i) => {          
            return(
              (elem.addresSoc !== '') ? 
                <a key = {'unque'+i} href={elem.addresSoc} target="_blank">
                  <span> 
                      <img src={elem.iconSoc} alt="icon"/>
                  </span>
                </a>
            : null
            );
          } );
          
          
            return (
              <div className="social flexible jAround aCenter">
                {outputCoolGuy}
              </div>
            ); 
    }
}
 

class TeamMembers extends Component {
    state = {  }
    render() { 
        console.log('TeamMembers - ',dataOfMembers);
        
        let everyOne = dataOfMembers.map( (elem, index) => {            
            return (
                <div className="TeamMemberItem animated fadeInUp" key={elem.id}>
                <div className="team-member-item-block" >
  
                {/*team-member-item-block -- without margin */}
                <div className="image-block"
                    style = { {backgroundImage: `url(${elem.image_addres})`} }>
                </div>
  
                {/*text-block -- */}
                <div className="text-block"> 
                    <h3> {elem.name} </h3>
                    <p className="position"> {elem.post} </p> 
                    <p className="aboutWork"> {elem.about_work}  </p> 
  
                    {/*diveder - with ::before*/}
                    <div className="divider"></div>
  
                    {/* social flexible jAround aCenter */}
                         <HwoHaveSocialAccount
                         idOfPerson = {elem.id}
                         go_social = {elem.goCocial}
                         />
                    {/* {elem.fb && <i></i>} */}

                </div>
            </div>
            </div>
            )
        } );
        return ( 
            
        <div className="members flexible jAround">  
            {/* members flexible jAround - for margin*/}
  
                {/*TeamMemberItem animated fadeInUp - border-radius  */}
                {everyOne}
         
        </div>
  
         );
    }
}
 
export default TeamMembers;