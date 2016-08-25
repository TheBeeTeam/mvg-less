'use strict'

import template from './app-sidenav.template.html';

class AppSidenavComponent {
    constructor(){
        this.restrict = 'E';
        this.template = template;
        this.replace = true;
    }

}


export default AppSidenavComponent;