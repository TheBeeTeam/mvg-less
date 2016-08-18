'use strict';

import template from './list.template.html';


class ListComponent {

    constructor() {
        this.template = template;
        this.controller = ListController;
        this.bindings = {
            list: '<'
        };
    }
}

class ListController{
    constructor(){


    };

}


export default ListComponent;