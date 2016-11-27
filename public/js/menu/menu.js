app.controller('MenuController', function ($rootScope, $scope, $state) {

    $rootScope.userLogged = JSON.parse(window.localStorage.getItem('userLogged'));
    if ($rootScope.userLogged && $rootScope.userLogged.authenticated) {
        if ($state.current.url.match('sales')) {
            $rootScope.activeSales = true
            $rootScope.activeReports = false
        } else {
            $rootScope.activeSales = false
            $rootScope.activeReports = true
        }
    } else {
        $state.go('login')
    }

    $rootScope.logout = function (userLogged) {
        userLogged.authenticated = false
        window.localStorage.setItem('userLogged', JSON.stringify(userLogged))
        $state.go('login')
    }

})