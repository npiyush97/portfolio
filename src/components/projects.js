import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            /*project #1*/
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '200px', backgroud: 'url(https://cdn.worldvectorlogo.com/logos/react.svg) center / cover'
                        }}>React project#1</CardTitle>
                        <CardText>
                            WEBSITE
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/npiyush97"></a><i className="fa fa-github"></i>Github</Button>
                            <Button colored><a></a><i class="fa fa-laptop" aria-hidden="true"></i>livedemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/*p2*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '200px', backgroud:
                                'url(http://www.iconninja.com/files/332/243/605/react-js-react-logo-js-icon.png)center/cover'
                        }}>React project#1</CardTitle>
                        <CardText>
                            REAL ESTATE
                        </CardText>
                        <CardActions border>
                            <CardActions border>
                                <Button colored><a href="https://github.com/npiyush97"></a><i className="fa fa-github"></i>Github</Button>
                                <Button colored><a></a><i class="fa fa-laptop" aria-hidden="true"></i>livedemo</Button>
                            </CardActions>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/*p3*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '200px', backgroud:
                                'url(http://www.iconninja.com/files/332/243/605/react-js-react-logo-js-icon.png)center/cover'
                        }}>React project#1</CardTitle>
                        <CardText>
                            WEATHER APP
                        </CardText>
                        <CardActions border>
                            <CardActions border>
                                <Button colored><a href="https://github.com/npiyush97"></a><i className="fa fa-github"></i>Github</Button>
                                <Button colored><a></a><i class="fa fa-laptop" aria-hidden="true"></i>livedemo</Button>
                            </CardActions>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }


        /*project*/
        else if (this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '200px', backgroud:
                            'url(http://www.iconninja.com/files/332/243/605/react-js-react-logo-js-icon.png)center/cover'
                    }}>React project#1</CardTitle>
                    <CardText>
                        liuuuuuuuuasdjwajksssssdln
                </CardText>
                    <CardActions border>
                        <CardActions border>
                            <Button colored><a href="https://github.com/npiyush97"></a><i className="fa fa-github"></i>Github</Button>
                            <Button colored><a></a><i class="fa fa-laptop" aria-hidden="true"></i>livedemo</Button>
                        </CardActions>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }
        else if (this.state.activeTab === 2) {
            /*project #2*/
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '200px', backgroud:
                            'url("http://www.iconninja.com/files/332/243/605/react-js-react-logo-js-icon.png") center / cover'
                    }}>React project#1</CardTitle>
                    <CardText>
                        SUCIDE
                </CardText>
                    <CardActions border>
                        <CardActions border>
                            <Button colored><a href="https://github.com/npiyush97"></a><i className="fa fa-github"></i>Github</Button>
                            <Button colored><a></a><i class="fa fa-laptop" aria-hidden="true"></i>livedemo</Button>
                        </CardActions>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }
        else if (this.state.activeTab === 3) {
            /*project #3*/
            return (
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '200px', backgroud:
                            'url(http://www.iconninja.com/files/332/243/605/react-js-react-logo-js-icon.png)center/cover'
                    }}>React project#1</CardTitle>
                    <CardText>
                        liuuuuuuuuasdjwajksssssdln
                </CardText>
                    <CardActions border>
                        <CardActions border>
                            <Button colored><a href="https://github.com/npiyush97"></a><i className="fa fa-github"></i>Github</Button>
                            <Button colored><a></a><i class="fa fa-laptop" aria-hidden="true"></i>livedemo</Button>
                        </CardActions>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>LARAVEL</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>Angular</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}
export default Projects;