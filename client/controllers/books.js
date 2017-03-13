var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('BooksController loaded...');

	$scope.getBooks = function(){
		$http.get('api/books').then(successCallback, errorCallback);
		function successCallback(response){
		    //success code
			$scope.books = response.data;
		}
		function errorCallback(error){
	    //error code
		}
	}	

	$scope.getBook = function(){
		var id = $routeParams.id;
		$http.get('api/books/'+id).then(successCallback, errorCallback);
		function successCallback(response){
		    //success code
			$scope.book = response.data;
		}
		function errorCallback(error){
	    //error code
		}
	}

	$scope.addBook = function(){
		console.log($scope.book);
		$http.post('api/books/', $scope.book).then(successCallback, errorCallback);
		function successCallback(response){
		    //success code
		    window.location.href='#!/books';
		}
		function errorCallback(error){
	    //error code
		}
	}

	$scope.updateBook = function(){
		var id = $routeParams.id;
		$http.put('api/books/'+id, $scope.book).then(successCallback, errorCallback);
		function successCallback(response){
		    //success code
		    window.location.href='#!/books';
		}
		function errorCallback(error){
	    	//error code
		}
	}

	$scope.removeBook = function(id){
		$http.delete('api/books/'+id).then(successCallback, errorCallback);
		function successCallback(response){
		    //success code
		    window.location.href='#!/books';
		}
		function errorCallback(error){
	    	//error code
		}
	}

}]);