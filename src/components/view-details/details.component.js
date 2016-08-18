'use strict';

import template from './details.template.html';


class DetailsComponent {
    constructor(){
        this.template = template;
        this.controller = DetailsController;
        this.bindings = {
            item: '<'
        };
    }
}

class DetailsController {

    constructor(itemsStoreService,$state) {
        this.itemsStoreService = itemsStoreService;
        this.$state = $state;
    }


    edit () {
        this.$state.go('edit',{ itemId:this.item.index});
    };


    delete() {
        this.itemsStoreService.deleteItem(this.item);
        this.$state.go('dashboard');

    };

    update(prop, value) {
        this.itemsStoreService.updateItemProperty(this.item,prop, value)
    };

};

DetailsController.$inject = ['itemsStoreService','$state'];

export default DetailsComponent;