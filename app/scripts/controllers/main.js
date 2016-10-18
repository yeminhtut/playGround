(function () {
	'use strict';
	angular
		.module('nextStepApp')
		.controller('mainCtrl', main)


		main.$inject= ['$scope','$http'];
		function main ($scope, $http) {
			let vm = this;
			vm.title = 'Angular Main Page';
			vm.categories = [
			  {"id":1,"name":"Thailand"},
			  {"id":2,"name":"Myanmar"},
			  {"id":3,"name":"Japan"},
			  {"id":4,"name":"Singapore"},
			  {"id":5,"name":"Malaysia"},
			];
			$http.get('https://restcountries.eu/rest/v1/region/asia')
			.then(function (response) {
				vm.countries = response.data;
			})

			vm.currentCategory = null;

			function setCurrentCategory(category){
			  vm.currentCategory = category;
			  console.log(category);
			}

			vm.setCurrentCategory = setCurrentCategory;
		}
})()
