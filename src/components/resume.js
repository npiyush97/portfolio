import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                        <img 
                        src="https://i.pinimg.com/236x/b3/ea/53/b3ea535f84097992105185784d7dfe6b--create-a-cartoon-avatar.jpg"
                        alt="avatar"
                        style={{height:'200px'}}/>
                    </div>

                    <h2 style={{paddingTop:'2em'}}>Piyush negi</h2>
                    <h4 style={{color:'grey'}}>Web developer</h4>
                    <hr style={{borderTop:'3px solid #833fb2', width:'50%' }}/>
                    <p>play gamessssssssss</p>
                    <hr style={{borderTop:'3px solid #833fb2', width:'50%' }}/>
                    <h5>address</h5>
                    <p>delhi</p>
                    <h5>phone</h5>
                    <p>7011897262</p>
                    <h5>email</h5>
                    <p>npiyush35@gmail.com</p>
                    <hr style={{borderTop:'3px solid #833fb2', width:'50%' }}/>
                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                    <Education
                    startYear={2015}
                    endYear={2018}
                    schoolName="sgtbimit"
                    SchoolDescription="jai ho"
                    />
                    <hr style={{borderTop:'3px solid #833fb2', width:'50%' }}/>
                    <h2>Experience</h2>
                    <Experience
                    startYear={2015}
                    endYear={2018}
                    jobtitle="sgtbimit"
                    jobDescription="jai ho"
                    />
                    <hr style={{borderTop:'3px solid #833fb2', width:'50%' }}/>
                    <h2>skills</h2>
                    <Skills
                    skill="javascript"
                    progress={100}
                    />
                    <Skills
                    skill="HTML/CSS"
                    progress={100}
                    />
                    <Skills
                    skill="LARAVEL"
                    progress={100}
                    />
                    <Skills
                    skill="React"
                    progress={100}
                    />
                    <Skills
                    skill="Node.js"
                    progress={100}
                    />
                </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;