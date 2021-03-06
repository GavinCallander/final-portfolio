import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Brands from '@fortawesome/free-brands-svg-icons';
import * as Icon from '@fortawesome/free-solid-svg-icons';

import me from '../img/me.jpg';
import minit from '../img/Minit.png';
import props from '../img/Props.png';
import readit from '../img/ReadIt.png';
import fcg from '../img/FCG.png';

export default class Portfolio extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleSubjectChange = (e) => {
        this.setState({
            subject: e.target.value
        })
    }

    handleMessageChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    render() {
        
        return (
            <div className = 'Portfolio'>
                <hr />
                <div className = 'Splash'>
                    <div className = 'SplashLeft'>
                        <img className = 'Me' src = { me } />
                    </div>
                    <div className = 'SplashRight'>
                        <h1>Gavin Callander</h1>
                        <h2>Full Stack Web Development</h2>
                        <div className = 'SplashSocial'>
                            <div className = 'SocialLink'>
                                <a href = 'https://github.com/GavinCallander'><FontAwesomeIcon className = 'SplashIcon' icon = { Brands.faGithub } size = '2x' /></a>
                                <div className = 'SocialText'>
                                    <h6>Github</h6>
                                </div>
                            </div>
                            <div className = 'SocialLink'>
                                <a href = 'https://www.linkedin.com/in/gavin-callander/'><FontAwesomeIcon className = 'SplashIcon' icon = { Brands.faLinkedin } size = '2x' /></a>
                                <div className = 'SocialText'>
                                    <h6 id = '#LinkedIn'>LinkedIn</h6>
                                </div>
                            </div>
                            <div className = 'SocialLink'>
                                <a href = 'https://twitter.com/GavinCallander'><FontAwesomeIcon className = 'SplashIcon' icon = { Brands.faTwitter } size = '2x' /></a>
                                <div className = 'SocialText'>
                                    <h6>Twitter</h6>
                                </div>
                            </div>
                            <div className = 'SocialLink'>
                                <Link to = '/blog'><FontAwesomeIcon className = 'SplashIcon' icon = { Icon.faBlog } size = '2x' /></Link>
                                <div className = 'SocialText'>
                                    <h6>Blog</h6>
                                </div>
                            </div>
                            <div className = 'SocialLink'>
                                <Link to = '/resume'><FontAwesomeIcon className = 'SplashIcon' icon = { Icon.faFile } size = '2x' /></Link>
                                <div className = 'SocialText'>
                                    <h6>Resume</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className = 'SectionLink' href = '#about'><FontAwesomeIcon className = 'Scroller' icon = { Icon.faChevronCircleDown } size = '3x' /></a>
                <hr />
                <a name = 'about'></a><div className = 'About'>
                    <h1>About</h1>
                    <h2>A Full Stack Web Developer with a focus on front end</h2>
                    <h3>In-depth experience with a multitude of technologies, with specific focus on JavaScript and React</h3>
                    <h3>An experienced problem-solver, capable of thinking on my feet in high pressure situations</h3>
                    <h3>Caring and empathetic, with an urge to see the larger culture thrive ahead of my own needs</h3>
                    <h3>Feel free to reach out to me at any time or, alternatively, check out my <Link className = 'PageLink' to = '/blog'>blog</Link> or my <Link className = 'PageLink' to = '/resume'>resume</Link></h3>
                    <div className = 'Tech'>
                        <FontAwesomeIcon className = 'TechIcon' icon = { Brands.faHtml5 } size = '4x' />
                        <FontAwesomeIcon className = 'TechIcon' icon = { Brands.faCss3 } size = '4x' />
                        <FontAwesomeIcon className = 'TechIcon' icon = { Brands.faJs } size = '4x' />
                        <FontAwesomeIcon className = 'TechIcon' icon = { Brands.faReact } size = '4x' />
                        <FontAwesomeIcon className = 'TechIcon' icon = { Brands.faVuejs } size = '4x' />
                        <FontAwesomeIcon className = 'TechIcon' icon = { Brands.faPython } size = '4x' />
                        <FontAwesomeIcon className = 'TechIcon' icon = { Brands.faGit } size = '4x' />
                        <FontAwesomeIcon className = 'TechIcon' icon = { Brands.faBootstrap } size = '4x' />
                    </div>
                </div>
                <a href = '#projects'><FontAwesomeIcon className = 'Scroller' icon = { Icon.faChevronCircleDown } size = '3x' /></a>
                <hr />
                <a name = 'projects'></a><div className = 'Projects'>
                    <h1>Projects</h1>
                    <div className = 'Projects'>
                        <Carousel showThumbs = { false } showStatus = { false } className = 'Carousel'>
                            <div className = 'Project fade' id = 'Minit'>
                                <h2>Minit</h2>
                                <img className = 'ProjectImg' id = 'MinitImg' src = { minit } />
                                <h3>Minit is a mental health app with an emphasis on both anonymity and community.</h3>
                                <h3>Users can connect with others in a similar position and can make use of the breathing exercise and distraction game included in the app. </h3>
                                <a className = 'AppLink' href = 'https://github.com/GavinCallander/minit'>Check the code</a>
                                <a className = 'AppLink' href = 'https://fathomless-temple-99588.herokuapp.com/'>Check the app</a>
                            </div>
                            <div className = 'Project fade' id = 'Props'>
                                <h2>Props</h2>
                                <img className = 'ProjectImg' src = { props } />
                                <h3>Props was developed collaboratively with another to engineers as an employee engagement platform.</h3>
                                <h3>With cross-team interaction a challenge for many organizations, Props offers employees a chance to publically say thanks (or give Props) to those they interact with.</h3>
                                <a className = 'AppLink' href = 'https://github.com/GavinCallander/project3'>Check the code</a>
                                <a className = 'AppLink' href = 'https://intense-basin-36132.herokuapp.com'>Check the app</a>
                            </div>
                            <div className = 'Project fade' id = 'ReadIt'>
                                <h2>ReadIt</h2>
                                <img className = 'ProjectImg' src = { readit } />
                                <h3>ReadIt is an application built off the News API.</h3>
                                <h3>Putting users into contact with news outlets from across the world, keeping them up to date with the latest headlines and allowing them to save the stories they care about for later reading.</h3>
                                <a className = 'AppLink' href = 'https://github.com/GavinCallander/readit'>Check the code</a>
                                <a className = 'AppLink' href = 'https://pure-plains-51572.herokuapp.com/'>Check the app</a>
                            </div>
                            <div className = 'Project fade' id = 'Fcg'>
                                <h2>Fantasy Card Game</h2>
                                <img className = 'ProjectImg' src = { fcg } />
                                <h3>Fantasy Card Game was developed as a game similar to Hearthstone or Magic the Gathering.</h3>
                                <h3>It was created as a proof of concept and is currently being redeveloped in React.</h3>
                                <a className = 'AppLink' href = 'https://github.com/GavinCallander/the-fantasy-card-gamehttps://github.com/GavinCallander/the-fantasy-card-game'>Check the code</a>
                                <a className = 'AppLink' href = 'https://gavincallander.github.io/unit-1-project-final/' >Check the app</a>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <a href = '#contact'><FontAwesomeIcon className = 'Scroller' icon = { Icon.faChevronCircleDown } size = '3x' /></a>
                <hr />
                <a name = 'contact'></a><div className = 'Contact'>
                    <h1>Contact</h1>
                    <form 
                    action="https://formcarry.com/s/YsV3Tfn1ahT" method="POST" accept-charset="UTF-8" 
                    onSubmit = { this.handleSubmit }>
                        <input type = 'text' value = { this.state.name } name = 'name' placeholder = 'Name...' onChange = { this.handleNameChange } /> <br />
                        <input type = 'email' value = { this.state.email } name = 'email' placeholder = 'Email...' onChange = { this.handleEmailChange }/> <br />
                        <input type = 'text' value = { this.state.subject } name = 'subject' placeholder = 'Subject...' onChange = { this.handleSubjectChange }/><br />
                        <textarea value = { this.state.message } name = 'message' placeholder = 'Message...' onChange = { this.handleMessageChange }/><br />
                        <input id = 'FormSubmit' type = 'submit' onSubmit = { this.handleSubmit }/>
                    </form>
                </div>
                <hr />
                <p>All rights reserved Gavin Callander 2019</p>
            </div>
        )
    }
}