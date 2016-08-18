'use strict';

import template from './list-item.template.html';


class ListItemComponent {
    constructor(){
        this.template = template;
        this.controller = ListItemController;
        this.transclude = true;
        this.bindings = {
            item: '<'
        };
    }
}



class ListItemController{

    constructor($state , itemsStoreService) {

        this.$state = $state;

        this.itemsStoreService = itemsStoreService

    };

    details () {
        this.$state.go('details',{ itemId:this.item.index});
    };

    edit () {
        this.$state.go('edit',{ itemId:this.item.index});
    };


    delete() {
        this.itemsStoreService.deleteItem(this.item);
    };

    update(prop, value) {
        this.itemsStoreService.updateItemProperty(this.item,prop, value)
    };

};

ListItemController.$inject = ['$state','itemsStoreService'];


export default ListItemComponent;