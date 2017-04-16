var routerApp = angular.module('routerApp', ['ui.router', 'ui.bootstrap']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '/assets/html/home.html'
        })

        .state('dashboard', {
            url: '/dashboard',
            templateUrl: '/assets/html/dashboard.html'
        })


        .state('menu1', {
            url: '/menu1',
            templateUrl: '/assets/html/menu1.html'
        })
        
        // nested list with custom controller
        .state('menu1.submenu1', {
            url: '/submenu1',
            templateUrl: '/assets/html/menu1.submenu1.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // nested list with custom controller
        .state('menu1.submenu2', {
            url: '/submenu2',
            templateUrl: '/assets/html/menu1.submenu2.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        .state('menu2', {
            url: '/menu2',
            templateUrl: '/assets/html/menu2.html'
        })

        // nested list with custom controller
        .state('menu2.submenu1', {
            url: '/submenu1',
            templateUrl: '/assets/html/menu2.submenu1.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('multiview', {
            url: '/multiview',
            views: {
                '': { templateUrl: '/assets/html/multiview.html' },
                'columnOne@multiview': {
                    template: '<h2>First View !!!</h2>'
                },
                'columnTwo@multiview': {
                    templateUrl: '/assets/html/multiview.view2.html',
                    controller: function($scope) {
                        $scope.myText = 'Second View';
                    }
                }
            }
            
        });
        
});

routerApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});