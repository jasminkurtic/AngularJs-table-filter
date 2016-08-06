tableFilter.controller('HomeController', function ($scope, arrayFactory, arrayOptions) {
    $scope.title = "simple angularjs directive for table, multi select on column data";

    /* you can use factory for get datas
        $scope.datas = arrayFactory.arraysForDd;
        arrayFactory.getArreysForDb().then(function () { }, function () { alert("Error") });
    */
    //without factory
    $scope.datas = [
        { "data_id": 0, "id": 35, "name": "Option-1" },
        { "data_id": 30, "id": 31, "name": "Option-1-1" },
        { "data_id": 0, "id": 35, "name": "Option-4" },
        { "data_id": 30, "id": 31, "name": "Option-1-3" }
    ];



})

tableFilter.controller('filterController', function ($scope, $q) {
    $scope.filters = [];
    $scope.headFilter = {};
    $scope.headFilter = ""
    $scope.table = {};
    var deferred = $q.defer();
    function pushFilter(array) {
        var columnNames = [];
        var rows = Object.keys(array[0]);
        for (var i = 0; i < rows.length; i++) {
            if (rows[i] != '$$hashKey') {
                columnNames.push(rows[i]);
            }
        }
        //{ "data_id": 0, "id": 35, "name": "Option-1" },
        var table = {};
        table.columnNames = [];
        table.rows = [];
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < columnNames.length; j++) {
                if (table.columnNames.indexOf(columnNames[j]) == -1) {
                    var column = {};
                    column.name = columnNames[j];
                    column.datas = [];
                    var data = {};
                    data.columnName = columnNames[j];
                    data.value = array[i][columnNames[j]];
                    data.check = true;
                    data.id = i;
                    var d = {};
                    d.id = i;
                    d.show = true;
                    data.ids = [];
                    data.ids.push(d);
                    column.datas.push(data);
                    table.rows.push(column);
                    table.columnNames.push(columnNames[j]);
                }
                else {
                    angular.forEach(table.rows, function (row) {
                        if (row.name == columnNames[j]) {
                            var k = 0;
                            angular.forEach(row.datas, function (data) {
                                if (data.value == array[i][columnNames[j]]) {
                                    data.id = i;
                                    var d = {};
                                    d.id = i;
                                    d.show = true;
                                    data.ids.push(d);
                                    k++;
                                }
                            })
                            if (k == 0) {
                                var data = {};
                                data.columnName = columnNames[j];
                                data.value = array[i][columnNames[j]];
                                data.check = true;
                                data.id = i;
                                data.ids = [];
                                var d = {};
                                d.id = i;
                                d.show = true;
                                data.ids.push(d);
                                row.datas.push(data);
                            }
                        }
                    })
                }
            }
        }
        $scope.table = table;
        
        deferred.resolve();
    }

    pushFilter($scope.arrayList);
    var expanded = false;
    $scope.showCheckboxes = function (index) {
        var idName = "checkboxes" + index;
        var checkboxes = document.getElementById(idName);
        if (!expanded) {
            checkboxes.style.display = "block";
            expanded = true;
        } else {
            checkboxes.style.display = "none";
            expanded = false;
        }
    }
    
    $scope.listFilterId = [];
    $scope.addId = function (filter) {
        $scope.headFilter = filter;
        if (filter.check == true) {
            filter.check = false;
            angular.forEach(filter.ids, function (id) {
                $scope.listFilterId.push(id.id);
            })
        }
        else {
            filter.check = true;
            for (var i = 0; i <= $scope.listFilterId.length; i++) {
                angular.forEach(filter.ids, function (id) {
                    if ($scope.listFilterId[i] == id.id) {
                        $scope.listFilterId.splice(i, 1);
                    }
                })
            }
        }
        
    }

})