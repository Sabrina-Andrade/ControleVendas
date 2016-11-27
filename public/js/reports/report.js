app.controller('ReportController', function ($scope, $http) {

    $scope.initialDate = new Date()
    $scope.initialDate.setHours(0, 0, 0, 0);
    $scope.finalDate = new Date()

    $scope.reportChart = {}
    $scope.reportChart.type = "PieChart"

    $scope.filter = function () {
        $http({
            method: 'GET',
            url: '/reports',
            params: getParams(),
            timeout: 10000
        }).then(successList, errorCallback)
    }

    function getParams() {
        let param = {
            initial: $scope.initialDate,
            final: $scope.finalDate
        }
        return param
    }

    function successList(result) {
        buildReportChart(result.data)
    }

    function errorCallback(error) {
        console.log(error)
    }

    function buildReportChart(data) {
        $scope.reportChart.data = {"cols": [
            {id: "t", label: "Topping", type: "string"},
            {id: "s", label: "Slices", type: "number"}
        ], "rows": []}
        angular.forEach(data, function(value){
            let chartPiece = {
                c: [
                    {v: value.product},
                    {v: value.productQuantity}
                ]
            }
            $scope.reportChart.data.rows.push(chartPiece)
        })
    }

    $scope.reportChart.options = {
        'title': 'Vendas no período informado'
    };
});