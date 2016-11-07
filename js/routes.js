app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('sale', {
            url: "/sale",
            templateUrl: "templates/products.html"
        })
        .state('new', {
            url: "/new",
            templateUrl: "templates/form.html"
        })
        .state('edit', {
            url: "/edit",
            templateUrl: "templates/form.html"
        })
        .state('reports', {
            url: "/reports",
            templateUrl: "templates/reports.html"
        })

        $urlRouterProvider.otherwise('sale');
});