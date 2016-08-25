'use strict'

import template from './app-sidenav.template.html';
import './app-sidenav.styles.css';

class AppSidenavComponent {
    constructor(){
        this.restrict = 'E';
        this.template = template;
        this.replace = true;
    }

}


export default AppSidenavComponent;