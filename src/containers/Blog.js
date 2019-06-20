import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default class Blog extends Component {

    state = {

    }

    render () {

        return (
            <div className = 'Blog'>
                <Header />
                <div className = 'BlogMain'>
                </div>
                <Footer />
            </div>
        )
    }
}