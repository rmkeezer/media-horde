import * as React from "react";
import * as ReactDOM from "react-dom";

import { Nav } from "./components/Nav";

import '../node_modules/startbootstrap-sb-admin-2/bower_components/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/startbootstrap-sb-admin-2/bower_components/metisMenu/dist/metisMenu.min.css';
import '../node_modules/startbootstrap-sb-admin-2/dist/css/sb-admin-2.css';
import '../node_modules/startbootstrap-sb-admin-2/bower_components/font-awesome/css/font-awesome.min.css';

import '../node_modules/startbootstrap-sb-admin-2/bower_components/metisMenu/dist/metisMenu.min.js';
import '../node_modules/startbootstrap-sb-admin-2/dist/js/sb-admin-2.js';

ReactDOM.render(
    <Nav />,
    document.getElementById("example")
);