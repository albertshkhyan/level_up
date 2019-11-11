import React, { Component } from 'react';
import logoHomeLevelUpImage from '../../../assets/logos/level_up_students.png';
import './style.css';

import {NavLink} from 'react-router-dom';


class LogoOfLevelUp extends Component {
    render() { 
        return ( 
            <div className="logo flexible aCenter">
                <NavLink to="/">
                    <div className="img" style={ {
                                backgroundImage : `url(${logoHomeLevelUpImage})`,
                            }
                        }>
                    </div>
                </NavLink>
                
            </div>
         );
    }
}
 
export default LogoOfLevelUp;


/* ************************ */
 