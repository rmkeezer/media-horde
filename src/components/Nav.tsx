import * as React from "react";

export interface NavProps {}

import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class Nav extends React.Component<NavProps, {}> {
    render() {
        return (
            <div id="wrapper">
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index.html">Active Learning</a>
                    </div>
                    <ul className="nav navbar-right top-nav">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bell"></i> <b className="caret"></b></a>
                            <ul className="dropdown-menu alert-dropdown">
                                <li>
                                    <a href="questions.html">Recently Added <span className="label label-primary">Questions</span></a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> Username <b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#"><i className="fa fa-fw fa-user"></i> Profile</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-fw fa-envelope"></i> Inbox</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-fw fa-gear"></i> Settings</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="login-student.html"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav side-nav">
                            <li  className="active">
                                <a href="index.html"><i className="fa fa-fw fa-home"></i> Course Home</a>
                            </li>
                            <li>
                                <a href="questions.html"><i className="fa fa-fw fa-question-circle"></i> Questions</a>
                            </li>
                            <li>
                                <a href="statistics.html"><i className="fa fa-fw fa-bar-chart-o"></i> Statistics</a>
                            </li>
                            <li>
                                <a href="roster.html"><i className="fa fa-fw fa-desktop"></i> Roster</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div id="page-wrapper">
                </div>
            </div>
        );
    }
}