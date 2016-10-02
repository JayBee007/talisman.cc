(function (){
  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if( $(this).attr("href")=="#carousel-example-generic") return;
    if( $(this).attr("href")=="#home") {
      $('html,body').animate({scrollTop:0},'slow');
      return false;
    } 

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
}());

var talismanApp = angular.module('talismanApp', ['ngRoute', 'ngAnimate']);

talismanApp.controller('mainController', function mainController($scope){
  

});

talismanApp.config(function ($routeProvider) {
  $routeProvider
    .when('/',
    {
      controller: 'mainController',
      templateUrl: '/views/carousel.html'
    })
    .when('/mandarine',
    {
      controller: 'mainController',
      templateUrl: '/views/mandarine.html'
    })
    .when('/potato',{
      controller: 'mainController',
      templateUrl: '/views/potato.html'
    })
    .when('/grape',{
      controller: 'mainController',
      templateUrl: '/views/grape.html'
    })
    .when('/pomegranate',{
      controller: 'mainController',
      templateUrl: '/views/pomegranate.html'
    })
    .when('/mango',{
      controller: 'mainController',
      templateUrl: '/views/mango.html'
    })
    .when('/nut',{
      controller: 'mainController',
      templateUrl: '/views/nut.html'
    })
    .when('/rice',{
      controller: 'mainController',
      templateUrl: '/views/rice.html'
    })
    .otherwise({redirectTo:'/'});
});