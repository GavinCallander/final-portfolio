import React, { Component } from 'react';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

import Header from './components/Header';
import Footer from './components/Footer';

import 'react-pdf/dist/Page/AnnotationLayer.css';

import resume from '../img/resume.pdf';

export default class Resume extends Component {

    state = {
        numPages: null,
        pageNumber: 1
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({
            numPages
        })
    }

    render() {
        const { pageNumber, numPages } = this.state
        return (
            <div className = 'Resume'>
                <Header />
                <Document
                className = 'ResumePdf'
                file = { resume }
                    onLoadSuccess = { this.onDocumentLoadSuccess.bind(this) }>
                <Page pageNumber = { 1 } renderMode = 'svg' />
                </Document>
                <Footer />
            </div>
        )
    }
}