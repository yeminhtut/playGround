(function () {
	'use strict';
	angular
		.module('nextStepApp')
		.controller('mainCtrl', main)


		main.$inject= ['$scope','$http'];
		function main ($scope, $http) {
			let vm = this;
			vm.title = 'Angular Main Page';
			vm.sub_regions = [
			  {"id":1,"name":"South-Eastern Asia"},
			  {"id":2,"name":"Southern Asia"},
			  {"id":3,"name":"Western Asia"},
			  {"id":4,"name":"Singapore"},
			  {"id":5,"name":"East Asia"},
			];
			//console.log(vm.sub_regions);
			$http.get('https://restcountries.eu/rest/v1/region/asia')
			.then(function (response) {
				vm.countries = response.data;
				//console.log(vm.countries);
			})

			vm.currentCategory = null;

			function setCurrentCategory(category){
			  vm.currentCategory = category;
			  console.log(category);
			}

			vm.setCurrentCategory = setCurrentCategory;

			var fruits = ['apple','orange'];
			// console.log(vm.sub_regions);
			// console.log(vm.sub_regions[vm.sub_regions.length - 1]);
			// vm.sub_regions = vm.sub_regions.filter(function(obj){
			// 	return obj.name != "East Asia";
			// })
			// console.log(vm.sub_regions);

			var double_x = function(x){
				return x * 2;
			}

			var double_value = double_x;

			console.log(double_value(30));


			var countries = [
			  {"id":0,"name":"Singapore","region":"Asia","population" : 6000000},
			  {"id":1,"name":"Norway","region":"Europe", "population" : 3000000},
			  {"id":2,"name":"Germany","region":"Europe","population" : 8000000},
			  {"id":3,"name":"Italy","region":"Europe"},
			  {"id":4,"name":"Japan","region":"Asia","population" : 20000000},
			];

			var countries_name = countries.map(function(obj){
				return obj.name;
			});

			//console.log(countries_name);

			// var asia = [];

			// for (var i = 0; i < countries.length; i++) {
				
			// 	if (countries[i].region === 'Asia') {
			// 		asia.push(countries[i]);
			// 	};
			// };

			var asia = countries.filter(function(obj){
				return obj.region == 'Asia';
			})

			console.log(asia);

			// var asia_population = asia.reduce(function(sum,population){
			// 	return sum + population.population;
			// },0);

			var asia_population = asia.reduce((sum,population) => sum + population.population, 0);

			console.log(asia_population);


		}
})()












