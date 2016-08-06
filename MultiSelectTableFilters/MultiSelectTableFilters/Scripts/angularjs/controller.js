autoDrops.controller('HomeController', function ($scope, arrayFactory, arrayOptions) {
    $scope.Pozdrav = "Simple angularjs module, option create select";

    /* you can use factory for get datas
        $scope.datas = arrayFactory.arraysForDd;
        arrayFactory.getArreysForDb().then(function () { }, function () { alert("Error") });
    */
    //without factory
    $scope.datas = [
        { "data_id": 0, "id": 30, "name": "Option-1" },
        { "data_id": 30, "id": 31, "name": "Option-1-1" },
        { "data_id": 0, "id": 33, "name": "Option-2" },
        { "data_id": 33, "id": 34, "name": "Option-2-1" },
        { "data_id": 34, "id": 35, "name": "Option-2-1-1" },
        { "data_id": 35, "id": 36, "name": "Option-2-1-1-1" }
    ];

    $scope.selects = [];
    var element = {};
    element.id = 0;
    $scope.selects.push(element);

    $scope.lastSelect = 0;
    $scope.newOption = function (node, index) {
        $scope.lastOpen = false;

        var a = index + 1;
        $scope.selects.splice(a, $scope.selects.length);

        var element = {};
        element.id = $scope.lastSelect = node.id;
        var i = 0;

        angular.forEach($scope.datas, function (data) {
            if (data.data_id == node.id) {
                i++;
            }
        })
        if (i > 0) {
            $scope.selects.push(element);
        }
        else {
            $scope.lastOpen = true;
        }
    }

    $scope.arrayList = [];
    $scope.addToArrayLise = function (selects, datas) {
        var elementForArrayList = {};
        elementForArrayList.id = 0;
        elementForArrayList.name = "";
        for (var i = 0; i <  datas.length; i++) {
            for (var j = 0; j < selects.length; j++) {
                if (selects[j].id == datas[i].id) {
                    if (elementForArrayList.name == "") {
                        elementForArrayList.name = datas[i].name;
                        $scope.node = "";
                    }
                    else {
                        elementForArrayList.name = elementForArrayList.name + "->" + datas[i].name;
                    }
                    break;
                }
            }
            if (datas[i].id == $scope.lastSelect) {
                elementForArrayList.id = datas[i].id;
                elementForArrayList.name = elementForArrayList.name + "->" + datas[i].name;
                break;
            }
        }
        $scope.selects.splice(1, $scope.selects.length);
        $scope.arrayList.push(elementForArrayList);
    }

})