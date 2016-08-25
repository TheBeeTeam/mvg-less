'use strict';

import ItemList from './../list/list';
import ItemListItem from './../list-item/list-item';
import Details from './../view-details/details';
import Edit from './../view-edit/edit';
import Dashboard from './../view-dashboard/dashboard';
import Breadcrumbs from './../breadcrumbs/breadcrumbs';
import AppHeaderComponent from './../app-header/app-header';
import AppSidenavComponent from './../app-sidenav/app-sidenav';



import AppContentComponent from './app-content.component';

var appContent = angular.module('appContent', [
    Breadcrumbs.name,
    Dashboard.name,
    AppHeaderComponent.name,
    AppSidenavComponent.name,
    Details.name,
    Edit.name,
    ItemList.name,
    ItemListItem.name,
]);


appContent
    .component('appContent', new AppContentComponent );


export default appContent;