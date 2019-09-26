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
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #1</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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
                    {/*p2*/}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #1</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >React Project #1</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/laravel.svg) center / cover' }} >React Project #1</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.pngkit.com/png/detail/225-2254691_9kib-354x415-unnamed-mongodb-logo-svg.png) center / cover' }} >React Project #1</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png) center / cover' }} >React Project #1</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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