import * as React from "react";

export interface BodyProps {}

import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class Body extends React.Component<BodyProps, {}> {
    render() {
        return (
            <div id="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Blank</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}