'use strict';

import AppSidenavComponent from './app-sidenav.component';

export default angular.module('appSidenav', [])
    .directive('appSidenav', () => new AppSidenavComponent );