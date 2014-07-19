/**
 * Created by Ray on 7/10/2014.
 */
function MyCtrl($scope) {
    $scope.visible = true;

    $scope.toggle = function(){
        $scope.visible = !$scope.visible;
    }
}
var app = angular.module("MyApp", []);

app.directive("show", function() {
    return {
        link: function(scope, element, attrs) {
            scope.$watch(attrs.show, function(value){
                element.css('display', value ? '' : 'none');
            });
        }
    };
});

var MyCtrl2 = function($scope){
    $scope.value = "another value";
    $scope.value2 = "2nd value";
};

function MyCtrlCMV ($scope) {
    $scope.value = 1;

    $scope.incrementValue = function(increment) {
        $scope.value += increment;
    };
}