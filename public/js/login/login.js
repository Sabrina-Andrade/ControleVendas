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
        let userLogged = {}
        userLogged.name = result.data.name
        userLogged.authenticated = true
        window.localStorage.setItem('userLogged', JSON.stringify(userLogged))
        $state.go('sales')
    }

    function errorCallback(error) {
        $rootScope.isInvalid = true
    }

})