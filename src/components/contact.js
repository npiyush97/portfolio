import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'; 

class Contact extends Component{
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}><h2>Piyush negi</h2>
                    <img 
                    src="https://i.pinimg.com/236x/b3/ea/53/b3ea535f84097992105185784d7dfe6b--create-a-cartoon-avatar.jpg"
                    alt="avatar"
                    style={{height:'250px'}}/>
                    
                    <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>lasannnnnnnnnnnnnnnnnnnnnnnn</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Gayathri'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    7011897262
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Gayathri'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    npiyush35@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Gayathri'}}>
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                    https://www.linkedin.com/in/piyush-negi/
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
         </div>
        )
    }
}
export default Contact;