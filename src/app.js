'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngMdIcons from 'angular-material-icons';

import ItemList from './components/list/list';
import ItemListItem from './components/list-item/list-item';
import EditableField from './components/editable-field/editable-field';
import Details from './components/view-details/details';
import Edit from './components/view-edit/edit';
import Dashboard from './components/view-dashboard/dashboard';
import Store from './components/items-store/items-store';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs'


import Config from './config';


var appModule = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngMdIcons,
    Store.name,
    Breadcrumbs.name,
    Dashboard.name,
    Details.name,
    Edit.name,
    EditableField.name,
    ItemList.name,
    ItemListItem.name,
]);

appModule.config(Config);

angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [appModule.name], {
        strictDi: true
    });
});

export default appModule;