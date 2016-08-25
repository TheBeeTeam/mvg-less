'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngMdIcons from 'angular-material-icons';

import Store from './components/items-store/items-store';

import AppContent from './components/app-content/app-content';

import Config from './config';


var appModule = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngMdIcons,
    Store.name,
    AppContent.name
]);

appModule.config(Config);

angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [appModule.name], {
        strictDi: true
    });
});

export default appModule;