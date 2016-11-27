app.controller('SaleController', function ($rootScope, $scope, $http, $state, toaster) {

    $scope.modal = { message: null }

    $scope.getAll = function () {
        $http({
            method: 'GET',
            url: '/sales',
            timeout: 10000
        }).then(successList, errorCallback)
    }

    function successList(result) {
        $scope.sales = result.data
    }

    $scope.update = function (sale) {
        $scope.sale = sale
        $scope.save()
    }

    $scope.save = function () {
        let method = $scope.sale.id > 0 ? 'PUT' : 'POST'
        let url = $scope.sale.id > 0 ? '/sales/edit' : '/sales/new'
        $http({
            method: method,
            url: url,
            data: $scope.sale,
            timeout: 10000
        }).then(successSave, errorCallback)
    }

    function successSave(result) {
        let message = $state.current.name === 'new' ? 'Venda cadastrada com sucesso.' : 'Venda alterada com sucesso.'
        toaster.pop('success', 'Sucesso', message)
        $state.go('sales')
    }

    if ($state.current.name === 'edit') {
        $http({
            method: 'GET',
            url: '/sales/edit/' + $state.params.id,
            timeout: 10000
        }).then(successGetSale, errorCallback)
    }

    function successGetSale(result) {
        $scope.sale = result.data
    }

    function errorCallback(error) {
        console.log("Erro")
    }

    $scope.delete = function (saleId) {
        $scope.modal.message = 'Deseja realmente excluir esta venda?';
        $scope.saleId = saleId;
        $("#confirm").modal('show');
    }

    $scope.remove = function () {
        $http({
            method: 'DELETE',
            url: '/sales/delete/' + $scope.saleId,
            timeout: 10000
        }).then(successDelete, errorCallback)
    }

    function successDelete(result) {
        $state.go('sales')
        toaster.pop('success', 'Sucesso', 'Venda removida com sucesso.')
        $scope.getAll()
    }

})