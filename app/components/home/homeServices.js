'use strict';

/* Controllers */

angular.module('studioApp.home.services', []).factory('HomeFactory', ['studioAPI','$q','$http',function(studioAPI,$q,$http){

	var homeFactoryObj = {
		apiCallFn : apiCallFn,
		setDwnSongFn : setDwnSongFn,
		dwnSongAry : [],
		getDwnSongFn : getDwnSongFn,
	};

	function apiCallFn(){
		var defer = $q.defer();
		$http({
			url : studioAPI,
			method : 'GET'
		}).success(function(data){
			defer.resolve(data);
			localStorage.setItem('studioData', JSON.stringify(data));
		}).error(function(){
			defer.reject();
			console.log('no data is fetched');
		});

		return defer.promise;
	}

	function setDwnSongFn(data){
		var count = 0;
		//var showCount = 1;
		homeFactoryObj.dwnSongAry.push(data);
		for(var i=0; i<homeFactoryObj.dwnSongAry.length; i++){
			if(homeFactoryObj.dwnSongAry[i].url == data.url){
				count++;
				console.log('count: '+count);
				homeFactoryObj.dwnSongAry[i].count = count;
				homeFactoryObj.showCountAry = [];
				homeFactoryObj.showCountAry.push(JSON.stringify(data));
				console.log('showCountAry: '+homeFactoryObj.showCountAry);
			}
			if(count>1){
				homeFactoryObj.dwnSongAry.pop();
			}
			sessionStorage.setItem('dwnSongAry', JSON.stringify(homeFactoryObj.dwnSongAry));
		};
		
		
	}
	function getDwnSongFn(){
		var downStoreSong = sessionStorage.getItem('dwnSongAry');
		downStoreSong = JSON.parse(downStoreSong);
		console.log('x: '+ JSON.stringify(downStoreSong));
		return downStoreSong;
	}




	return homeFactoryObj;

 }]);













