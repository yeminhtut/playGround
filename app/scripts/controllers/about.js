/**
 * @ngdoc function
 * @name nextStepApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nextStepApp
 */

(function () {
	'use strict';
	angular
		.module('nextStepApp')
		.controller('AboutCtrl', main)


		main.$inject= ['$scope','$http'];
		function main ($scope, $http) {
			let vm = this;
			vm.title = 'Angular Main Page';
			vm.categories = [
				    {"id": 0, "name": "Development"},
				    {"id": 1, "name": "Design"},
				    {"id": 2, "name": "Exercise"},
				    {"id": 3, "name": "Humor"}
				]

			vm.currentCategory = null;

			function setCurrentCategory(category){
			  vm.currentCategory = category;
			  console.log(category);
			}

			vm.setCurrentCategory = setCurrentCategory;
		}
})()

