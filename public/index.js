'use strict'

// var $ = require('jquery'),
//     _ = require('lodash'),
//     Firebase = require('firebase');

angular
.module('bbqApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {url:'/', templateUrl:'views/home.html'})
    .state('menu', {url:'/menu', templateUrl:'views/menu.html'})
    .state('schedule', {url:'/schedule', templateUrl:'views/schedule.html'})
    .state('contact', {url:'/contact', templateUrl:'views/contact.html'})

});
