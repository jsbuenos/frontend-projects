// Create the module
var angularRoutingApp = angular.module("angularRoutingApp", ["ngRoute"]);

// Create routes
angularRoutingApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when("/", {
            templateUrl : "pages/home.html",
            controller  : "mainController"
        })
        .when("/cartodb", {
            templateUrl : "pages/cartodb.html",
            controller  : "cartodbController"
        })
        .when("/loader", {
            templateUrl : "pages/loader.html",
            controller  : "loaderController"
        })
        .when("/modal", {
            templateUrl : "pages/modal.html",
            controller  : "modalController"
        })
        .when("/paginator", {
            templateUrl : "pages/paginator.html",
            controller  : "paginatorController"
        })
        .when("/textwrapper", {
            templateUrl : "pages/textWrapper.html",
            controller  : "textWrapperController"
        })
        .otherwise({
            redirectTo: "/"
        });

        $locationProvider.html5Mode(true, false);
}]);

angularRoutingApp.controller("mainController", function($scope) {
    $scope.message = "Home!";
});

angularRoutingApp.controller("cartodbController", function($scope) {
    $scope.message = "CartoDB";
});

angularRoutingApp.controller("loaderController", function($scope) {
    $scope.message = "Loader";
});

angularRoutingApp.controller("modalController", function($scope) {
    $scope.message = "Modal";
});

angularRoutingApp.controller("paginatorController", function($scope) {
    $scope.message = "Paginator";
});

angularRoutingApp.controller("textWrapperController", function($scope) {
    $scope.message = "textWrapper";
});