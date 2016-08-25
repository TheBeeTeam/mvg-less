'use strict';

import template from './edit.template.html';


class EditComponent {
    constructor(){
        this.template = template;
        this.controller = EditController;
        this.bindings = {
            item: '<'
        };
    }
}

class EditController {

    constructor(itemsStoreService,$state) {
        this.itemsStoreService = itemsStoreService;
        this.$state = $state;

        this.model = JSON.parse(JSON.stringify(this.item));

    }

    reset() {
        this.model = JSON.parse(JSON.stringify(this.item));
    };

    update() {
        this.itemsStoreService.updateItem(this.item,this.model);
        this.$state.go('details',{ itemId:this.item.index});


    };

};

EditController.$inject = ['itemsStoreService','$state'];

export default EditComponent;