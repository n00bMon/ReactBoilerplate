import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter, Route, HashRouter, Link} from 'react-router-dom' ;

import Main from 'Main';

// Foundation loader
import 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css';
$(document).foundation();

// SCSS loader
import 'style-loader!css-loader!sass-loader!appStyles';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route path="/" component={Main} />
    </div>
  </HashRouter>,
  document.getElementById("app")
);
