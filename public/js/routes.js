app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "login.html",
            controller: 'LoginController'
        })
        .state('sales', {
            url: "/sales",
            templateUrl: "sales.html",
            controller: 'SaleController'
        })
        .state('new', {
            url: "/sales/new",
            templateUrl: "form.html",
            controller: 'SaleController'
        })
        .state('edit', {
            url: "/sales/edit/:id",
            templateUrl: "form.html",
            controller: 'SaleController'
        })
        .state('reports', {
            url: "/reports",
            templateUrl: "reports.html"
        })

        $urlRouterProvider.otherwise('login');
});