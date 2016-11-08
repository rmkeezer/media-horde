import * as React from "react";

export interface NavProps {}

import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class Nav extends React.Component<NavProps, {}> {
    render() {
        return (
            <div id="nav">
                <h1>Test:</h1>
                <ButtonToolbar>
                    <Button>Default</Button>
                </ButtonToolbar>
            </div>
        );
    }
}