'use strict';

/* Controllers */

angular.module('studioApp.home.controller', []).controller('HomeController', ['$scope','$state','studioAPI','HomeFactory',function($scope,$state,studioAPI,HomeFactory) {

	HomeFactory.apiCallFn()
		.then(function(){
			var apiData = localStorage.getItem('studioData');
			apiData = JSON.parse(apiData);
			$scope.allData = apiData;
			//console.log(apiData);
		},function(){
			console.log('no data retreived')
		});


	$scope.downloadSong = function(data){
		HomeFactory.setDwnSongFn(data);
	}



 }]);