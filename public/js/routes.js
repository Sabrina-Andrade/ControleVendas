app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "login.html"
        })
        .state('sale', {
            url: "/sale",
            templateUrl: "products.html"
        })
        .state('new', {
            url: "/new",
            templateUrl: "form.html"
        })
        .state('edit', {
            url: "/edit",
            templateUrl: "form.html"
        })
        .state('reports', {
            url: "/reports",
            templateUrl: "reports.html"
        })

        $urlRouterProvider.otherwise('login');
});