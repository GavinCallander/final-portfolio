import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <div className = 'Header'>
            <hr/>
            <h1>Gavin Callander</h1>
            <div className = 'HeaderNav'>
                <Link className = 'Nav' to = '/'>home</Link>|
                <Link className = 'Nav' to = '/blog'>blog</Link>|
                <Link className = 'Nav' to = '/resume'>resume</Link>
            </div>
            <br />
            <hr />
        </div>
    )
}