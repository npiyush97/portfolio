import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/"><div class='logo'><i class="fa fa-file-code-o" aria-hidden="true"></i> Piyush Negi </div></Link>} scroll>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About me</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/projects">Projects</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link style={{ textDecoration: 'none', color: 'burlywood' }} to="/"></Link>}>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/about me">About me</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/projects">Projects</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>
        )
    };
}

export default App;
