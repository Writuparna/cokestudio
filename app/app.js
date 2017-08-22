'use strict';


// Declare app level module which depends on filters, and services
angular.module('studioApp', [
	'ui.router',
	'studioApp.home',
	'studioApp.header',
	'studioApp.history',
])
.constant('studioAPI', 'data/Sureify.json');