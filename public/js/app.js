const app = angular.module('MovieApp', [])

app.controller('MainController', ['$http', function($http){

  this.movies = '';

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
    }).then(response => {
      console.log(response.data);
    })
  }

  this.getMovies = function(){
    $http({
      method: 'GET',
      url: '/movies',
    }).then(response => {
      this.movies = response.data
      console.log(response.data);
    })
  }

  this.getMovies();

}])
