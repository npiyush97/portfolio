import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl'

class Landing extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid" >
                <Cell col={12}>
                    <img 
                    src="https://avatars1.githubusercontent.com/u/43876655?s=460&v=4"
                    alt="avatar"
                    className="avatar-img"
                    />

            <div className="banner-text">
                <h1>Web Developer</h1>
                <hr/>
                
                <p>HTML/CSS | BOOTSTRAP | JavaScript | React | NodeJS | Express | MongoDB | LARAVEL</p>

            <div className="social-links">
                {/*Linkedin*/}
                <a href="https://www.linkedin.com/in/piyush-negi/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>
                {/*Github*/}
                <a href="https://github.com/npiyush97" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github" aria-hidden="true"/>                    
                </a>
                {/*instagram*/}
                <a href="https://www.instagram.com/piyush.negi032/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-instagram" aria-hidden="true"/>
                </a>
                {/*facebook*/}
                <a href="https://www.facebook.com/piyush142" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-facebook" aria-hidden="true"/>
                </a>
            </div>    
            </div>
                </Cell>
                </Grid>
            </div>
            
        )
    }
}
export default Landing;