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

			vm.bookmarks = [
				    {"id": 0, "name": "Development bookmarks","category" : "Development"},
				    {"id": 0, "name": "Design bookmarks","category" : "Design"},
				    {"id": 0, "name": "Exercise bookmarks","category" : "Exercise"},
				    {"id": 0, "name": "Humor bookmarks","category" : "Humor"},
				    {"id": 0, "name": "Development bookmarks Two","category" : "Development"},
				]

			vm.currentCategory = null;

			function setCurrentCategory(category){
			  vm.currentCategory = category;
			  console.log(category);
			}

			function isCurrentCategory(category){
				return vm.currentCategory !== null && category.name === vm.currentCategory.name;
			}

			vm.setCurrentCategory = setCurrentCategory;

		}
})()

