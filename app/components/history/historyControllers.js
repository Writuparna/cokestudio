'use strict';

/* Controllers */

angular.module('studioApp.history.controller', []).controller('HistoryController', ['$scope','$state','studioAPI','HomeFactory',function($scope,$state,studioAPI,HomeFactory) {

	//var abc = HomeFactory.dwnSongAry.push(HomeFactory.getDwnSongFn());

	//const initDownAry = Object.freeze(HomeFactory.getDwnSongFn());

	//console.log('initDownAry: '+initDownAry);
	
	var downSongFn =  HomeFactory.getDwnSongFn();
	/*sessionStorage.setItem('dwnSongAry', JSON.stringify(downSongFn));
	var downStoreSong = sessionStorage.getItem('dwnSongAry');
	downStoreSong = JSON.parse(downStoreSong);*/
	//console.log('downSongFn: '+ JSON.stringify(downSongFn));





	$scope.downloadSong = downSongFn;
	//console.log('y: '+ JSON.stringify($scope.downloadSong));

	HomeFactory.dwnSongAry=$scope.downloadSong;
	//console.log('abc: '+ JSON.stringify(HomeFactory.dwnSongAry));

 }]);