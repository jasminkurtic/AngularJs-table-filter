autoDrops.factory('arrayFactory', function ($q, $http) {
    var _arraysForDd = [];
    var deferred = $q.defer();
    var _getArreysForDb = function () {
        $("#pleaseWaitDialog").modal('show');

        $http.get("/api/Snizenje/Snizenje").then(function (result) {
            angular.copy(result.data, _snizenje);
            deferred.resolve();
            $("#pleaseWaitDialog").modal('hide');

        },
       function () {
           deferred.reject();
           $("#pleaseWaitDialog").modal('hide');

       });
        return deferred.promise;
    }
    return {
        arraysForDd: _arraysForDd,
        getArreysForDb: _getArreysForDb
    }
})