app.controller('LoginController', function ($rootScope, $scope, $http, $state) {
    
    $rootScope.isInvalid = false;
    
    $scope.doLogin = function () {
        $http({
            method: 'POST',
            url: '/login/auth',
            data: $scope.user,
            timeout: 10000
        }).then(successCallback, errorCallback)
    }

    function successCallback(result) {
        $state.go('sales')
    }

    function errorCallback(error) {
        $rootScope.isInvalid = true
    }

})