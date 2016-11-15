app.controller('LoginController', function ($rootScope, $scope, $http, $state) {
    
    $rootScope.isInvalid = false;
    
    $scope.doLogin = function () {
        $http({
            method: 'POST',
            url: '/auth',
            data: $scope.user,
            headers: {'Content-Type': 'application/json'}
        }).then(successCallback, errorCallback)
    }

    function successCallback(result) {
        $state.go('sale')
    }

    function errorCallback(error) {
        $rootScope.isInvalid = true;
    }

})