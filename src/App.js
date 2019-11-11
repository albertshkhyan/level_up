import React, {Component } from 'react';    
import { BackgroundOfPreloader, LevelUpLoading, HeaderMenu, HomeMainContainer, Footer } from './components';
//C:\Users\aliks\Desktop\level_up\src\components\common\containers\Page\index.js
import {
About,
ContactUs,
Courses,
Home,
Students
} from './components/common/containers/Page';

import {BrowserRouter  as Router, Switch,Route} from 'react-router-dom';
// console.log('Router', Router);

class Preloader extends Component {
    render() { 
        return ( 
            <div className={this.props.closeorShowPreload}>
                <BackgroundOfPreloader />
                <LevelUpLoading/>
            </div>
         );
    }
}
 

class MainPreload extends Component {
    constructor(props) {
        super(props);
        this.closePreload = this.closePreload.bind(this);
        this.state = {
            class_name_of_preloader : ''
        }

    }

    

    closePreload() {
        setTimeout(()=>{
            this.setState({
                class_name_of_preloader : 'close'
            })
        },100);
    }

    componentDidMount() {
        window.addEventListener('load', this.closePreload);
    }
    render() { 
        return (  
            <Preloader closeorShowPreload = {this.state.class_name_of_preloader}/>
        );
    }
}
 


function App() {
    return (
        <Router>
            <div>
                <div className="App">
                    <div className="prelaod">
                        <MainPreload />
                    </div>
                    <HeaderMenu/>
                    {/* <HomeMainContainer/> */}
                    <Switch>
                        <Route exact path="/" component={HomeMainContainer}/>
                        <Route  path="/Students" component={Students}/>
                        <Route  path="/Courses" component={Courses}/>
                        <Route  path="/About" component={About}/>
                        <Route  path="/ContactUs" component={ContactUs}/>
                    </Switch>
                    
                    <Footer/>
                </div>
            </div>
        </Router>

    );
}

export default App;
