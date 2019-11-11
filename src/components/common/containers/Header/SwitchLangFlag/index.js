import React, { Component } from 'react';
import flagOfAm from '../../../../../assets/logos/img_am.png';
import flagOfRu from '../../../../../assets/logos/img_ru.png';
import flagOfEn from '../../../../../assets/logos/img_en_flag.png';
import './style.css';

const langages = [
    {
        code: "am",
        country : flagOfAm
    },
    {
        code: "ru",
        country : flagOfRu

    },
    {
        code: "en",
        country : flagOfEn
    }
];

class FlagsSwitchers extends Component {

    handlerBorder = e => {
        this.props.forChangeactiveOrNotState(e.target);
    }
    render() {
        let ouptutBtnsouptutBtns = langages.map((elem, i) => {
            let dp = langages[i].code === this.props.langFlag ? this.props.active_or_not : "";
            // console.log(dp);

            return (
                <span key={"id" + i}>
                    <img
                        
                        className={dp}
                        name={langages[i].code}
                        onClick={this.handlerBorder}
                    
                    src={langages[i].country}
                     alt={langages[i].code} />
                </span>
            );
        });
        return (
            <div className="langContainer">
                {ouptutBtnsouptutBtns}
            </div>

        );
    }
}


class SwitchLangFlagContainer extends Component {
    state = {
        lang: "en",
        activeOrNot: "activeFlagBtn"
    }

    forChangeactiveOrNotState = activeOrNot => {
        // console.log('aon', activeOrNot.name);
        if (activeOrNot.name === "ru") {
          this.setState({
            lang: "ru"
          });
        } else if (activeOrNot.name === "en") {
          this.setState({
            lang: "en"
          });
        } else if (activeOrNot.name === "am") {
          this.setState({
            lang: "am"
          });
        }
      };
    render() {
        return (
            <FlagsSwitchers
                active_or_not={this.state.activeOrNot}
                langFlag={this.state.lang}
                forChangeactiveOrNotState={this.forChangeactiveOrNotState}
            />
        );
    }
}


export default SwitchLangFlagContainer;




