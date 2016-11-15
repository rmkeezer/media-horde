import * as React from "react";
import * as ReactDOM from "react-dom";

// import { Nav } from "./components/Nav";
// import { Body } from "./components/Body";

// import '../node_modules/startbootstrap-sb-admin-2/bower_components/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/startbootstrap-sb-admin-2/bower_components/metisMenu/dist/metisMenu.min.css';
// import '../node_modules/startbootstrap-sb-admin-2/dist/css/sb-admin-2.css';
// import '../node_modules/startbootstrap-sb-admin-2/bower_components/font-awesome/css/font-awesome.min.css';

// import '../node_modules/startbootstrap-sb-admin-2/bower_components/metisMenu/dist/metisMenu.min.js';
// import '../node_modules/startbootstrap-sb-admin-2/dist/js/sb-admin-2.js';

import '../themes/adminlte/css/bootstrap.min.css';
import '../themes/adminlte/css/AdminLTE.min.css';
import '../themes/adminlte/css/skins/_all-skins.min.css';

import '../themes/adminlte/js/bootstrap.min.js';
import '../themes/adminlte/js/app.min.js';
import '../themes/adminlte/js/pages/dashboard.js';
import '../themes/adminlte/js/demo.js';

ReactDOM.render(
  <header className="main-header">
    <a href="index2.html" className="logo">
      <span className="logo-mini"><b>A</b>LT</span>
      <span className="logo-lg"><b>Admin</b>LTE</span>
    </a>
    <nav className="navbar navbar-static-top">
      <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>

      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <li className="dropdown messages-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-envelope-o"></i>
              <span className="label label-success">4</span>
            </a>
          </li>
          <li>
            <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
    ,
    document.getElementById("example")
);