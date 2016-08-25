'use strict';

import template from './app-header.template.html';
import './app-header.styles.css';


class AppHeaderComponent {
    constructor(){
        this.template = template;
        this.controller = AppHeaderController;
    }
}

class AppHeaderController{
    constructor($mdSidenav){
        this.$mdSidenav = $mdSidenav;
    }

    toggleSidenav() {
        this.$mdSidenav('left')
            .toggle();
    }


}

AppHeaderController.$inject = ['$mdSidenav'];

export default AppHeaderComponent;