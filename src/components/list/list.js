'use strict';

import angular from 'angular';

import ListComponent from './list.component'


export default angular.module('itemList', [])
    .component('list', new ListComponent);