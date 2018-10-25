const app = angular.module('MovieApp', [])

app.controller('MainController', ['$http', function($http) {

      this.movie = '';
      this.movies = '';

      this.createMovie = function() {
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

      this.deleteMovie = function(id) {
        $http({
          method: 'DELETE',
          url: '/movies/' + id
        }).then(response => {
          const removeByIndex = this.movies.findIndex(movie => {
            return movie._id === id
          })
          this.movies.splice(removeByIndex, 1)
        })
      }

      this.updateMovie = function(id) {
        $http({
          method: 'PUT',
          url: '/movies/' + id,
          data: {
            title: this.updatedTitle,
            director: this.updatedDirector,
            rating: this.updatedRating,
            year: this.updatedYear
          }
        }).then(function(response) {
            this.movies.getMovies();
          })
        }

        this.getMovies = function() {
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
