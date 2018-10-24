const app = angular.module('MovieApp', [])

app.controller('MainController', ['$http', function($http){

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

  this.getMovie = function(){
    $http({
      method: 'GET',
      url: '/movies'
    }).then(function(response{
      console.log(response)
    })
  }

}])
