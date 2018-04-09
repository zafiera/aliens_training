import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from "./routers/AppRouter";
import ProjectRouter from "./routers/ProjectRouter";


ReactDOM.render(<AppRouter/>, document.getElementById('app'));
