import * as React from "react";

export interface NavProps {}

import { NavSidebar } from './NavSidebar';
import { NavTopbar } from './NavTopbar';

import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class Nav extends React.Component<NavProps, {}> {
    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="index.html">SB Admin v2.0</a>
                </div>
                <NavTopbar />
                <NavSidebar />
            </nav>
        );
    }
}