const app = angular.module('MovieApp', [])

app.controller('MainController', ['$http', function($http){

<<<<<<< HEAD
  console.log('hello world');
=======
  this.createMovie = function(){
    $http({
      method: 'POST',
      url: '/movies',
      data: {
        title: this.title,
        director: this.director,
        rating: this.rating,
        year: this.year
      }
    }).then(function(response){
      console.log(response.data);
    })
  }
>>>>>>> a670890252889aa844261cd35ff44b0d50e75b26

}])
