(function () {
    'use strict';

    angular
        .module('routerApp')
        .controller('RootHeaderController', RootHeaderController);

    RootHeaderController.$inject = ['$scope', '$state'];

    function RootHeaderController($scope, $state) {

        $scope.$state = $state;

        var vm = this;

        vm.isCollapsed = false;


        var menu = '{"roles":["*"],"items":[{"title":"Menu1","state":"home1","type":"item","roles":["user","admin"],"position":0,"items":[],"$$hashKey":"object:22"},{"title":"Home","state":"home","type":"dropdown","roles":["admin"],"position":0,"items":[{"title":"Manage Micro Apps","state":"home.list","params":{},"roles":["admin"],"position":0},{"title":"Manage Users","state":"home.paragraph","params":{},"roles":["admin"],"position":0}],"$$hashKey":"object:23"},{"title":"Micro Apps","state":"microapps","type":"dropdown","roles":["*"],"position":0,"items":[{"title":"List Micro Apps","state":"microapps.list","params":{},"roles":["*"],"position":0,"$$hashKey":"object:36"}],"$$hashKey":"object:24","isCollapsed":true}]}';

        // vm.menu = JSON.parse(menu);

        vm.menu = {
            roles: [
                "*"
            ],
                items: [
            {
                title: "Dashboard",
                state: "dashboard",
                type: "item",
                roles: [
                    "user",
                    "admin"
                ],
                position: 0,
                items: []
            },
            {
                title: "Menu1",
                state: "menu1",
                type: "dropdown",
                roles: [
                    "admin"
                ],
                position: 0,
                items: [
                    {
                        title: "Menu1 Home",
                        state: "menu1",
                        params: {},
                        roles: [
                            "admin"
                        ],
                        position: 0
                    },
                    {
                        title: "Sub Menu1",
                        state: "menu1.submenu1",
                        params: {},
                        roles: [
                            "admin"
                        ],
                        position: 0
                    },
                    {
                        title: "Sub Menu2",
                        state: "menu1.submenu2",
                        params: {},
                        roles: [
                            "admin"
                        ],
                        position: 0
                    }
                ]
            },
            {
                title: "Menu2",
                state: "menu2",
                type: "dropdown",
                roles: [
                    "*"
                ],
                position: 0,
                items: [
                    {
                        title: "Menu2 Home",
                        state: "menu2",
                        params: {},
                        roles: [
                            "*"
                        ],
                        position: 0
                    },
                    {
                        title: "Sub Menu1",
                        state: "menu2.submenu1",
                        params: {},
                        roles: [
                            "*"
                        ],
                        position: 0
                    }
                ],
                isCollapsed: true
            },
            {
                title: "Multi View",
                state: "multiview",
                type: "item",
                roles: [
                    "user",
                    "admin"
                ],
                position: 0,
                items: []
            }

        ]
        };


        vm.authentication = {};

        var user = '{"_id":"58e85b6358727a273c4f8c48","displayName":"Jagadeesh Palaniappan","provider":"local","username":"jaganttp1","__v":0,"updated":"2017-04-12T03:06:16.062Z","created":"2017-04-08T03:39:15.365Z","roles":["user","admin"],"profileImageURL":"modules/users/client/img/profile/default.png","email":"jaganttp1@gmail.com","lastName":"P","firstName":"Jagadeesh"}';

        vm.authentication.user = JSON.parse(user);


        vm.getRootAppUrl = function (state, params) {
            params = params || {};
            return '/' + $state.href(state, params, {absolute: false});
        };

        vm.isMenuActive = function (microapp) {

            var active = false;

            if (microAppConfig && microAppConfig.title === microapp.title) {
                active = true;
            }

            return active;
        };


        // Side Menu

        vm.isSideMenuClosed = false;

        var body = angular.element(document.querySelector("body"));

        vm.toggleSideMenu = function () {
            vm.isSideMenuClosed = !vm.isSideMenuClosed;
            body.toggleClass("sidemenu-minimized");
        };

        vm.openSideMenu = function () {
            vm.isSideMenuClosed = false;
            body.removeClass("sidemenu-minimized");
        };


        vm.toggleDropDown = function (item) {
            item.isCollapsed = !item.isCollapsed;
            vm.openSideMenu();
        };


        vm.isDropDownCollapsed = function (item) {

            //if($state.includes(item.state)) {
            //  return false;
            //}

            return item.isCollapsed;
        }

    }
}());
